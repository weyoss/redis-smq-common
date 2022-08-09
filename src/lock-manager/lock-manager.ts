import { ICallback } from '../../types';
import { RedisClient } from '../redis-client/redis-client';
import { v4 as uuid } from 'uuid';
import { LockManagerAbortError } from './errors/lock-manager-abort.error';
import { LockManagerExtendError } from './errors/lock-manager-extend.error';
import { LockManagerAcquireError } from './errors/lock-manager-acquire.error';
import * as fs from 'fs';
import { LockManagerMethodNotAllowedError } from './errors/lock-manager-method-not-allowed.error';
import { LockManagerNotAcquiredError } from './errors/lock-manager-not-acquired.error';
import { LockManagerNotReleasedError } from './errors/lock-manager-not-released.error';

export enum ELockStatus {
  unlocked,
  locking,
  locked,
  releasing,
  extending,
  extended,
}

export enum ELuaScript {
  RELEASE_LOCK = 'RELEASE_LOCK',
  EXTEND_LOCK = 'EXTEND_LOCK',
}

RedisClient.addScript(
  ELuaScript.RELEASE_LOCK,
  fs.readFileSync(`${__dirname}/redis-client/lua/release-lock.lua`).toString(),
);
RedisClient.addScript(
  ELuaScript.EXTEND_LOCK,
  fs.readFileSync(`${__dirname}/redis-client/lua/extend-lock.lua`).toString(),
);

export class LockManager {
  protected readonly lockId: string;
  protected readonly lockKey: string;
  protected readonly retryOnFail: boolean;
  protected readonly ttl: number;
  protected readonly redisClient: RedisClient;
  protected readonly autoExtend: boolean;

  protected status: ELockStatus = ELockStatus.unlocked;
  protected lockingTimer: NodeJS.Timeout | null = null;
  protected autoExtendTimer: NodeJS.Timeout | null = null;
  protected throwExceptions = true;

  constructor(
    redisClient: RedisClient,
    lockKey: string,
    ttl: number,
    retryOnFail = false,
    autoExtend = false,
    throwExceptions = true,
  ) {
    this.lockKey = lockKey;
    this.ttl = ttl;
    this.retryOnFail = retryOnFail;
    this.lockId = uuid();
    this.redisClient = redisClient;
    this.autoExtend = autoExtend;
    this.throwExceptions = throwExceptions;
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
    if (!this.isLocked()) cb(new LockManagerNotAcquiredError());
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
                cb(new LockManagerExtendError());
              } else {
                this.setExtended();
                cb();
              }
            } else {
              cb(new LockManagerAbortError());
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
          if (!err) this.runAutoExtendTimer();
          else if (
            this.throwExceptions &&
            !(err instanceof LockManagerAbortError)
          )
            throw err;
        }),
      ms,
    );
  }

  acquireLock(cb: ICallback<void>): void {
    if (!this.isReleased()) cb(new LockManagerNotReleasedError());
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
                    cb(new LockManagerAcquireError());
                  }
                } else {
                  this.setLocked();
                  if (this.autoExtend) {
                    this.runAutoExtendTimer();
                  }
                  cb();
                }
              } else {
                cb(new LockManagerAbortError());
              }
            },
          );
        } else {
          cb(new LockManagerAbortError());
        }
      };
      lock();
    }
  }

  extendLock(cb: ICallback<void>): void {
    if (this.autoExtend) cb(new LockManagerMethodNotAllowedError());
    else this.extend(cb);
  }

  releaseLock(cb: ICallback<void>): void {
    const status = this.status;
    if (status === ELockStatus.unlocked) cb();
    else if (!this.isLocked()) cb(new LockManagerNotAcquiredError());
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
    if (this.autoExtend) cb(new LockManagerMethodNotAllowedError());
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
            if (err instanceof LockManagerExtendError) lock();
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
