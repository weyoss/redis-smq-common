/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { readdir } from 'fs';
import path from 'path';
import { ICallback, IEventBus, ILogger } from '../../types/index.js';
import { async } from '../async/async.js';
import { CallbackEmptyReplyError } from '../errors/callback-empty-reply.error.js';
import { EventBus } from '../event/event-bus/event-bus.js';
import { Locker, TLockerEvent } from '../locker/locker.js';
import { PowerSwitch } from '../power-switch/power-switch.js';
import { RedisClient } from '../redis-client/redis-client.js';
import { Runnable } from '../runnable/runnable.js';
import { WorkerRunnable } from './worker-runnable.js';

export type TWorkerResourceGroupEvent = TLockerEvent & {
  'workerResourceGroup.error': (
    err: Error,
    workerResourceGroupId: string,
  ) => void;
};

export class WorkerResourceGroup extends Runnable {
  protected readonly powerManager: PowerSwitch;
  protected readonly locker: Locker;
  protected readonly redisClient: RedisClient;
  protected workers: { instance: WorkerRunnable<unknown>; payload: unknown }[] =
    [];
  protected eventBus: IEventBus<TWorkerResourceGroupEvent> | null = null;

  constructor(
    redisClient: RedisClient,
    logger: ILogger,
    resourceGroupId: string,
  ) {
    super(logger);
    this.powerManager = new PowerSwitch();
    this.logger = logger;

    //
    this.redisClient = redisClient;
    this.redisClient.on('error', (err) => this.handleError(err));

    // Locker
    this.locker = new Locker(
      redisClient,
      logger,
      resourceGroupId,
      60000,
      true,
      15000,
    );
    this.eventBus?.on('locker.error', (err, id) => {
      if (id === this.locker.getId()) this.handleError(err);
    });
  }

  protected setUpEventBus = (cb: ICallback<void>): void => {
    if (!this.eventBus) {
      EventBus.getInstance<TWorkerResourceGroupEvent>((err, instance) => {
        if (err) cb(err);
        else if (!instance) cb(new CallbackEmptyReplyError());
        else {
          this.eventBus = instance;
          cb();
        }
      });
    } else cb();
  };

  protected tearDownEventBus = (cb: ICallback<void>): void => {
    if (this.eventBus) this.eventBus.disconnect(cb);
    else cb();
  };

  protected runWorkers = (): void => {
    async.waterfall(
      [
        (cb: ICallback<void>) => {
          this.locker.acquireLock((err) => {
            if (err) cb(err);
            else {
              this.logger.info(
                `Workers are exclusively running from this instance (Lock ID ${this.locker.getId()}).`,
              );
              cb();
            }
          });
        },
        (cb: ICallback<void>) => {
          async.each(
            this.workers,
            (worker, _, done) => {
              const { instance, payload } = worker;
              instance.run(payload, done);
            },
            cb,
          );
        },
      ],
      (err) => {
        if (err) this.handleError(err);
      },
    );
  };

  protected shutDownWorkers = (cb: ICallback<void>): void => {
    async.each(
      this.workers,
      (worker, _, done) => {
        worker.instance.quit(() => done());
      },
      () => {
        this.workers = [];
        cb();
      },
    );
  };

  protected releaseLock = (cb: ICallback<void>) => {
    this.locker.releaseLock((err) => cb(err));
  };

  addWorker = (filename: string, payload: unknown): void => {
    const worker = new WorkerRunnable(filename);
    worker.on('worker.error', (err) => this.handleError(err));
    this.workers.push({ instance: worker, payload });
  };

  loadFromDir = (
    workersDir: string,
    payload: unknown,
    cb: ICallback<void>,
  ): void => {
    readdir(workersDir, (err, files) => {
      if (err) cb(err);
      else {
        async.each(
          files ?? [],
          (file, _, done) => {
            if (file.endsWith('.worker.js')) {
              const filepath = path.resolve(workersDir, file);
              this.addWorker(filepath, payload);
              done();
            } else done();
          },
          (err) => cb(err),
        );
      }
    });
  };

  protected override goingUp(): ((cb: ICallback<void>) => void)[] {
    return super.goingUp().concat([this.setUpEventBus]);
  }

  protected override goingDown(): ((cb: ICallback<void>) => void)[] {
    return [
      this.shutDownWorkers,
      this.releaseLock,
      this.tearDownEventBus,
    ].concat(super.goingDown());
  }

  protected override up(cb: ICallback<boolean>): void {
    super.up(() => {
      this.runWorkers();
      cb();
    });
  }

  protected override handleError(err: Error) {
    this.eventBus?.emit('workerResourceGroup.error', err, this.id);
    super.handleError(err);
  }
}
