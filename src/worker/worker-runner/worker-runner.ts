/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { ICallback, ILogger, TEvent } from '../../../types';
import { PowerSwitch } from '../../power-switch/power-switch';
import { Ticker } from '../../ticker/ticker';
import { ELockStatus, Lock } from '../../lock/lock';
import { RedisClient } from '../../redis-client/redis-client';
import { WorkerPool } from './worker-pool';
import { Worker } from '../worker';
import { async } from '../../async/async';
import { LockAcquireError } from '../../lock/errors';
import { EventEmitter } from '../../event';

export class WorkerRunner extends EventEmitter<TEvent> {
  private readonly powerManager: PowerSwitch;
  private readonly ticker: Ticker;
  private readonly lock: Lock;
  private readonly redisClient: RedisClient;
  private readonly logger: ILogger;
  private readonly workerPool: WorkerPool;

  constructor(
    redisClient: RedisClient,
    keyLock: string,
    workerPool: WorkerPool,
    logger: ILogger,
  ) {
    super();
    this.powerManager = new PowerSwitch();
    this.redisClient = redisClient;
    this.logger = logger;
    this.lock = new Lock(redisClient, keyLock, 60000);
    this.ticker = new Ticker(this.onTick);
    this.workerPool = workerPool;
  }

  private onTick = (): void => {
    async.waterfall(
      [
        (cb: ICallback<void>) => {
          this.lock.acquireOrExtend((err, status) => {
            if (status === ELockStatus.locked) {
              this.logger.info(
                `Workers are exclusively running from this instance (Lock ID ${this.lock.getId()}).`,
              );
            }
            cb(err);
          });
        },
        (cb: ICallback<void>) => {
          this.workerPool.work(cb);
        },
      ],
      (err) => {
        if (!err || err instanceof LockAcquireError) this.ticker.nextTick();
        else this.emit('error', err);
      },
    );
  };

  private clearWorkerPool = (cb: ICallback<void>): void => {
    this.workerPool.clear(cb);
  };

  private stopTicker = (cb: ICallback<void>) => {
    this.ticker.once('down', cb);
    this.ticker.quit();
  };

  private releaseLock = (cb: ICallback<void>) => {
    this.lock.releaseLock(cb);
  };

  addWorker(instance: Worker): void {
    this.workerPool.add(instance);
  }

  run = (cb: ICallback<void>): void => {
    this.ticker.nextTick();
    this.emit('up');
    cb();
  };

  quit = (cb: ICallback<void>): void => {
    async.waterfall(
      [this.stopTicker, this.clearWorkerPool, this.releaseLock],
      () => {
        this.emit('down');
        cb();
      },
    );
  };
}
