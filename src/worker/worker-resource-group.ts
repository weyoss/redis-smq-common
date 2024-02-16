/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { ICallback, ILogger } from '../../types';
import { PowerSwitch } from '../power-switch/power-switch';
import { Locker } from '../locker/locker';
import { RedisClient } from '../redis-client/redis-client';
import { async } from '../async/async';
import { WorkerRunnable } from './worker-runnable';
import { Runnable } from '../runnable/runnable';
import { readdir } from 'fs';
import path from 'path';

export type TWorkerResourceGroupEvent = {
  'workerResourceGroup.error': (
    err: Error,
    workerResourceGroupId: string,
  ) => void;
};

export class WorkerResourceGroup extends Runnable<TWorkerResourceGroupEvent> {
  protected readonly powerManager: PowerSwitch;
  protected readonly locker: Locker;
  protected readonly redisClient: RedisClient;
  protected workers: { instance: WorkerRunnable<unknown>; payload: unknown }[] =
    [];

  constructor(
    redisClient: RedisClient,
    logger: ILogger,
    resourceGroupId: string,
  ) {
    super(logger);
    this.powerManager = new PowerSwitch();
    this.redisClient = redisClient;
    this.logger = logger;

    // Locker
    this.locker = new Locker(
      redisClient,
      logger,
      resourceGroupId,
      60000,
      true,
      15000,
    );
    this.locker.on('locker.error', (err) => {
      this.emit('workerResourceGroup.error', err, this.id);
    });
    this.on('workerResourceGroup.error', (err) => {
      this.handleError(err);
    });
  }

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
        if (err) this.emit('workerResourceGroup.error', err, this.id);
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
    worker.on('worker.error', (err) => {
      this.emit('workerResourceGroup.error', err, this.id);
    });
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

  protected override goingDown(): ((cb: ICallback<void>) => void)[] {
    return [this.shutDownWorkers, this.releaseLock].concat(super.goingDown());
  }

  protected override up(cb: ICallback<boolean>): void {
    super.up(() => {
      this.runWorkers();
      cb();
    });
  }
}
