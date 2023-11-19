/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { promisifyAll } from 'bluebird';
import { Lock } from '../../src/lock/lock';
import { getRedisInstance } from '../common';
import { LockAcquireError } from '../../src/lock/errors';

test('Lock: retryOnFail', async () => {
  const redisClient = await getRedisInstance();
  const lock = promisifyAll(new Lock(redisClient, 'key1', 20000, false));

  await lock.acquireLockAsync();

  const lock2 = promisifyAll(new Lock(redisClient, 'key1', 10000, false));

  await expect(lock2.acquireLockAsync()).rejects.toThrow(LockAcquireError);

  const lock3 = promisifyAll(new Lock(redisClient, 'key1', 10000, true));

  await lock3.acquireLockAsync();

  await lock3.extendLockAsync();
});
