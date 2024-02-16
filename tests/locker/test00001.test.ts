/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { delay, promisifyAll } from 'bluebird';
import { Locker } from '../../src/locker/locker';
import { getRedisInstance } from '../common';
import { LockExtendError, LockNotAcquiredError } from '../../src/locker/errors';

test('Locker: locker(), extend(), releaseLock()', async () => {
  const redisClient = await getRedisInstance();
  const lock = promisifyAll(
    new Locker(redisClient, console, 'key1', 5000, false),
  );
  expect(lock.getId()).toBeDefined();
  await expect(lock.acquireLockAsync()).resolves.toBe(true);
  expect(lock.isLocked()).toBe(true);
  await expect(lock.acquireLockAsync()).resolves.toBe(false);
  expect(lock.isLocked()).toBe(true);

  await delay(10000);

  await expect(lock.extendLockAsync()).rejects.toThrow(LockExtendError);
  await expect(lock.acquireLockAsync()).resolves.toBe(true);
  await expect(lock.extendLockAsync()).resolves.toBeUndefined();
  await expect(lock.releaseLockAsync()).resolves.toBe(true);
  expect(lock.isLocked()).toBe(false);
  expect(lock.isReleased()).toBe(true);
  await expect(lock.releaseLockAsync()).resolves.toBe(false);
  expect(lock.isReleased()).toBe(true);
  await expect(lock.extendLockAsync()).rejects.toThrow(LockNotAcquiredError);
  await expect(lock.acquireLockAsync()).resolves.toBe(true);
  await expect(lock.releaseLockAsync()).resolves.toBe(true);
});
