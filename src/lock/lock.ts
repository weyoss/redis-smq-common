/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { ICallback } from '../../types';
import { RedisClient } from '../redis-client/redis-client';
import { v4 as uuid } from 'uuid';
import {
  LockAbortError,
  LockAcquireError,
  LockExtendError,
  LockMethodNotAllowedError,
  LockNotAcquiredError,
  LockNotReleasedError,
} from './errors';
import { ELuaScript } from './redis-client/redis-client';
import { getEventBusInstance } from '../event';

export enum ELockStatus {
  unlocked,
  locking,
  locked,
  releasing,
  extending,
  extended,
}

export class Lock {
  protected readonly lockId: string;
  protected readonly lockKey: string;
  protected readonly retryOnFail: boolean;
  protected readonly ttl: number;
  protected readonly redisClient: RedisClient;
  protected readonly autoExtend: boolean;

  protected status: ELockStatus = ELockStatus.unlocked;
  protected lockingTimer: NodeJS.Timeout | null = null;
  protected autoExtendTimer: NodeJS.Timeout | null = null;

  constructor(
    redisClient: RedisClient,
    lockKey: string,
    ttl: number,
    retryOnFail = false,
    autoExtend = false,
  ) {
    this.lockKey = lockKey;
    this.ttl = ttl;
    this.retryOnFail = retryOnFail;
    this.lockId = uuid();
    this.redisClient = redisClient;
    this.autoExtend = autoExtend;
  }

  protected resetTimers(): void {
    if (this.lockingTimer) {
      clearTimeout(this.lockingTimer);
      this.lockingTimer = null;
    }
    if (this.autoExtendTimer) {
      clearTimeout(this.autoExtendTimer);
      this.autoExtendTimer = null;
    }
  }

  protected setUnlocked(): void {
    this.status = ELockStatus.unlocked;
  }

  protected setLocked(): void {
    this.status = ELockStatus.locked;
  }

  protected setExtended(): void {
    this.status = ELockStatus.extended;
  }

  protected extend(cb: ICallback<void>): void {
    if (!this.isLocked()) cb(new LockNotAcquiredError());
    else {
      this.status = ELockStatus.extending;
      this.redisClient.runScript(
        ELuaScript.EXTEND_LOCK,
        [this.lockKey],
        [this.lockId, this.ttl],
        (err, reply) => {
          if (err) cb(err);
          else {
            if (this.status === ELockStatus.extending) {
              if (!reply) {
                this.setUnlocked();
                cb(new LockExtendError());
              } else {
                this.setExtended();
                cb();
              }
            } else {
              cb(new LockAbortError());
            }
          }
        },
      );
    }
  }

  protected runAutoExtendTimer(): void {
    const ms = Math.ceil(this.ttl / 2);
    this.autoExtendTimer = setTimeout(
      () =>
        this.extend((err) => {
          if (err) {
            if (!(err instanceof LockAbortError))
              getEventBusInstance().emit('error', err);
          } else this.runAutoExtendTimer();
        }),
      ms,
    );
  }

  acquireLock(cb: ICallback<void>): void {
    if (!this.isReleased()) cb(new LockNotReleasedError());
    else {
      this.status = ELockStatus.locking;
      const lock = () => {
        if (this.status === ELockStatus.locking) {
          this.redisClient.set(
            this.lockKey,
            this.lockId,
            {
              expire: {
                mode: 'PX',
                value: this.ttl,
              },
              exists: 'NX',
            },
            (err, reply) => {
              if (err) cb(err);
              else if (this.status === ELockStatus.locking) {
                if (!reply) {
                  if (this.retryOnFail)
                    this.lockingTimer = setTimeout(lock, 1000);
                  else {
                    this.setUnlocked();
                    cb(new LockAcquireError());
                  }
                } else {
                  this.setLocked();
                  if (this.autoExtend) {
                    this.runAutoExtendTimer();
                  }
                  cb();
                }
              } else {
                cb(new LockAbortError());
              }
            },
          );
        } else {
          cb(new LockAbortError());
        }
      };
      lock();
    }
  }

  extendLock(cb: ICallback<void>): void {
    if (this.autoExtend) cb(new LockMethodNotAllowedError());
    else this.extend(cb);
  }

  releaseLock(cb: ICallback<void>): void {
    const status = this.status;
    if (status === ELockStatus.unlocked) cb();
    else if (!this.isLocked()) cb(new LockNotAcquiredError());
    else {
      this.resetTimers();
      this.status = ELockStatus.releasing;
      this.redisClient.runScript(
        ELuaScript.RELEASE_LOCK,
        [this.lockKey],
        [this.lockId],
        (err) => {
          if (err) cb(err);
          else {
            this.setUnlocked();
            cb();
          }
        },
      );
    }
  }

  acquireOrExtend(cb: ICallback<ELockStatus>): void {
    if (this.autoExtend) cb(new LockMethodNotAllowedError());
    else {
      const lock = () => {
        this.acquireLock((err) => {
          if (err) cb(err);
          else cb(null, ELockStatus.locked);
        });
      };
      if (this.isLocked())
        this.extend((err) => {
          if (err) {
            if (err instanceof LockExtendError) lock();
            else cb(err);
          } else cb(null, ELockStatus.extended);
        });
      else lock();
    }
  }

  isLocked(): boolean {
    return (
      this.status === ELockStatus.locked || this.status === ELockStatus.extended
    );
  }

  isReleased(): boolean {
    return this.status === ELockStatus.unlocked;
  }

  getId(): string {
    return this.lockId;
  }
}
