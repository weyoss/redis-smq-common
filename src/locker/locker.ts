/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { ICallback } from '../common/index.js';
import { AbortError } from '../errors/index.js';
import { ILogger } from '../logger/index.js';
import { IRedisClient } from '../redis-client/index.js';
import { Runnable } from '../runnable/index.js';
import { Timer } from '../timer/index.js';
import {
  LockAcquireError,
  LockExtendError,
  LockMethodNotAllowedError,
  LockNotAcquiredError,
} from './errors/index.js';
import { ELuaScript } from './redis-client/lua-scripts/lua-scripts.js';

export type TLockerEvent = {
  'locker.up': (id: string) => void;
  'locker.down': (id: string) => void;
  'locker.goingUp': (id: string) => void;
  'locker.goingDown': (id: string) => void;
  'locker.error': (error: Error, id: string) => void;
};

export class Locker extends Runnable<TLockerEvent> {
  protected readonly lockKey;
  protected readonly retryOnFail;
  protected readonly ttl;
  protected readonly redisClient;
  protected readonly autoExtendInterval;
  protected readonly timer;
  protected readonly logger;

  constructor(
    redisClient: IRedisClient,
    logger: ILogger,
    lockKey: string,
    ttl: number,
    retryOnFail = false,
    autoExtendInterval: number = 0,
  ) {
    super();
    this.lockKey = lockKey;
    this.ttl = ttl;
    this.retryOnFail = retryOnFail;
    this.autoExtendInterval = autoExtendInterval;
    this.logger = logger;
    this.redisClient = redisClient;
    this.redisClient.on('error', (err) => this.handleError(err));
    this.timer = new Timer();
    this.timer.on('error', (err) => this.handleError(err));
  }

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
          cb(new AbortError());
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
                this.shutdown(() => cb(new LockExtendError()));
              } else cb();
            } else cb(new AbortError());
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

  protected resetTimer = (cb: ICallback<void>): void => {
    this.timer.reset();
    cb();
  };

  protected autoExtendLock(): void {
    if (this.autoExtendInterval) {
      this.timer.setTimeout(
        () =>
          this.extend((err) => {
            if (err) {
              if (!(err instanceof AbortError)) this.handleError(err);
            } else this.autoExtendLock();
          }),
        this.autoExtendInterval,
      );
    }
  }

  protected override goingUp(): ((cb: ICallback<void>) => void)[] {
    return super.goingUp().concat([this.lock]);
  }

  protected override goingDown(): ((cb: ICallback<void>) => void)[] {
    return [this.resetTimer, this.release].concat(super.goingDown());
  }

  protected override handleError(err: Error) {
    this.emit('locker.error', err, this.id);
    super.handleError(err);
  }

  protected override getLogger(): ILogger {
    return this.logger;
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

  acquireLock(cb: ICallback<boolean>) {
    this.run(cb);
  }

  releaseLock(cb: ICallback<void>) {
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
