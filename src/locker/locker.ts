/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { ICallback, IEventBus, ILogger } from '../../types/index.js';
import { CallbackEmptyReplyError } from '../errors/callback-empty-reply.error.js';
import { EventBus } from '../event/event-bus/event-bus.js';
import { RedisClient } from '../redis-client/redis-client.js';
import { Runnable } from '../runnable/runnable.js';
import { Timer } from '../timer/timer.js';
import {
  LockAbortError,
  LockAcquireError,
  LockExtendError,
  LockMethodNotAllowedError,
  LockNotAcquiredError,
} from './errors/index.js';
import { ELuaScript } from './redis-client/redis-client.js';

export type TLockerEvent = {
  'locker.up': (id: string) => void;
  'locker.down': (id: string) => void;
  'locker.goingUp': (id: string) => void;
  'locker.goingDown': (id: string) => void;
  'locker.error': (error: Error, id: string) => void;
};

export class Locker extends Runnable {
  protected readonly lockKey;
  protected readonly retryOnFail;
  protected readonly ttl;
  protected readonly redisClient;
  protected readonly autoExtendInterval;
  protected readonly timer;
  protected eventBus: IEventBus<TLockerEvent> | null = null;

  constructor(
    redisClient: RedisClient,
    logger: ILogger,
    lockKey: string,
    ttl: number,
    retryOnFail = false,
    autoExtendInterval: number = 0,
  ) {
    super(logger);
    this.lockKey = lockKey;
    this.ttl = ttl;
    this.retryOnFail = retryOnFail;
    this.autoExtendInterval = autoExtendInterval;
    this.timer = new Timer();
    this.redisClient = redisClient;
    this.redisClient.on('error', (err) => this.handleError(err));
  }

  protected setUpEventBus = (cb: ICallback<void>): void => {
    if (!this.eventBus) {
      EventBus.getInstance<TLockerEvent>((err, instance) => {
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

  protected lock = (cb: ICallback<void>) => {
    this.redisClient.set(
      this.lockKey,
      this.id,
      {
        expire: {
          mode: 'PX',
          value: this.ttl,
        },
        exists: 'NX',
      },
      (err, reply) => {
        if (err) cb(err);
        else if (this.powerSwitch.isGoingUp()) {
          if (!reply) {
            if (this.retryOnFail)
              this.timer.setTimeout(() => this.lock(cb), 1000);
            else cb(new LockAcquireError());
          } else cb();
        } else {
          cb(new LockAbortError());
        }
      },
    );
  };

  protected extend = (cb: ICallback<void>) => {
    if (!this.isRunning()) cb(new LockNotAcquiredError());
    else {
      this.redisClient.runScript(
        ELuaScript.EXTEND_LOCK,
        [this.lockKey],
        [this.id, this.ttl],
        (err, reply) => {
          if (err) cb(err);
          else {
            if (this.powerSwitch.isRunning()) {
              if (reply !== 1) {
                this.forceShutdown(() => cb(new LockExtendError()));
              } else cb();
            } else cb(new LockAbortError());
          }
        },
      );
    }
  };

  protected release = (cb: ICallback<void>): void => {
    this.redisClient.runScript(
      ELuaScript.RELEASE_LOCK,
      [this.lockKey],
      [this.id],
      (err) => cb(err),
    );
  };

  protected tearDownTicker = (cb: ICallback<void>): void => {
    this.timer.reset();
    cb();
  };

  protected autoExtendLock(): void {
    if (this.autoExtendInterval) {
      this.timer.setTimeout(
        () =>
          this.extend((err) => {
            if (err) {
              if (!(err instanceof LockAbortError)) this.handleError(err);
            } else this.autoExtendLock();
          }),
        this.autoExtendInterval,
      );
    }
  }

  protected override goingUp(): ((cb: ICallback<void>) => void)[] {
    return super.goingUp().concat([this.setUpEventBus, this.lock]);
  }

  protected override goingDown(): ((cb: ICallback<void>) => void)[] {
    return [this.tearDownTicker, this.release, this.tearDownEventBus].concat(
      super.goingDown(),
    );
  }

  override run(cb: ICallback<boolean>) {
    super.run((err, reply) => {
      if (err) {
        if (err instanceof LockAcquireError) cb(null, false);
        else cb(err);
      } else {
        if (reply) this.autoExtendLock();
        cb(null, Boolean(reply));
      }
    });
  }

  protected override handleError(err: Error) {
    this.eventBus?.emit('locker.error', err, this.id);
    super.handleError(err);
  }

  acquireLock(cb: ICallback<boolean>) {
    this.run(cb);
  }

  releaseLock(cb: ICallback<boolean>) {
    this.shutdown(cb);
  }

  extendLock(cb: ICallback<void>): void {
    if (this.autoExtendInterval) cb(new LockMethodNotAllowedError());
    else if (!this.powerSwitch.isRunning()) cb(new LockNotAcquiredError());
    else this.extend(cb);
  }

  isLocked(): boolean {
    return this.powerSwitch.isRunning();
  }

  isReleased(): boolean {
    return this.powerSwitch.isDown();
  }
}
