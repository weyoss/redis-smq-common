/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { delay, promisifyAll } from 'bluebird';
import { Lock } from '../../src/lock/lock';
import { getRedisInstance } from '../common';
import {
  LockExtendError,
  LockNotAcquiredError,
  LockNotReleasedError,
} from '../../src/lock/errors';

test('Lock: acquireLock(), extendLock(), releaseLock()', async () => {
  const redisClient = await getRedisInstance();
  const lock = promisifyAll(new Lock(redisClient, 'key1', 5000, false));

  await lock.acquireLockAsync();

  await expect(lock.acquireLockAsync()).rejects.toThrow(LockNotReleasedError);

  await delay(10000);
  await expect(lock.extendLockAsync()).rejects.toThrow(LockExtendError);

  await lock.acquireLockAsync();

  await lock.extendLockAsync();

  await expect(
    Promise.all([lock.releaseLockAsync(), lock.releaseLockAsync()]),
  ).rejects.toThrow(LockNotAcquiredError);

  await delay(5000);
  await lock.releaseLockAsync();
  await lock.releaseLockAsync();

  await expect(lock.extendLockAsync()).rejects.toThrow(LockNotAcquiredError);

  await lock.acquireLockAsync();
});
