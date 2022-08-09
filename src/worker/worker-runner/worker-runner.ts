import { ICallback, ICompatibleLogger } from '../../../types';
import { PowerManager } from '../../power-manager/power-manager';
import { EventEmitter } from 'events';
import { Ticker } from '../../ticker/ticker';
import { ELockStatus, LockManager } from '../../lock-manager/lock-manager';
import { RedisClient } from '../../redis-client/redis-client';
import { events } from '../../events/events';
import { WorkerPool } from './worker-pool';
import { Worker } from '../worker';
import { async } from '../../async/async';
import { LockManagerAcquireError } from '../../lock-manager/errors/lock-manager-acquire.error';

export class WorkerRunner extends EventEmitter {
  private readonly powerManager: PowerManager;
  private readonly ticker: Ticker;
  private readonly lockManager: LockManager;
  private readonly redisClient: RedisClient;
  private readonly logger: ICompatibleLogger;
  private readonly workerPool: WorkerPool;

  constructor(
    redisClient: RedisClient,
    keyLock: string,
    workerPool: WorkerPool,
    logger: ICompatibleLogger,
  ) {
    super();
    this.powerManager = new PowerManager();
    this.redisClient = redisClient;
    this.logger = logger;
    this.lockManager = new LockManager(redisClient, keyLock, 60000);
    this.ticker = new Ticker(this.onTick);
    this.workerPool = workerPool;
  }

  private onTick = (): void => {
    async.waterfall(
      [
        (cb: ICallback<void>) => {
          this.lockManager.acquireOrExtend((err, status) => {
            if (status === ELockStatus.locked) {
              this.logger.info(
                `Workers are exclusively running from this instance (Lock ID ${this.lockManager.getId()}).`,
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
        if (!err || err instanceof LockManagerAcquireError)
          this.ticker.nextTick();
        else this.emit(events.ERROR, err);
      },
    );
  };

  private clearWorkerPool = (cb: ICallback<void>): void => {
    this.workerPool.clear(cb);
  };

  private stopTicker = (cb: ICallback<void>) => {
    this.ticker.once(events.DOWN, cb);
    this.ticker.quit();
  };

  private releaseLock = (cb: ICallback<void>) => {
    this.lockManager.releaseLock(cb);
  };

  addWorker(instance: Worker): void {
    this.workerPool.add(instance);
  }

  run = (): void => {
    this.emit(events.UP);
    this.ticker.nextTick();
  };

  quit = (cb: ICallback<void>): void => {
    async.waterfall(
      [this.stopTicker, this.clearWorkerPool, this.releaseLock],
      () => {
        this.emit(events.DOWN);
        cb();
      },
    );
  };
}
