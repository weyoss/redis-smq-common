/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { promisifyAll } from 'bluebird';
import { Locker } from '../../src/locker/locker';
import { getRedisInstance } from '../common';

test('Locker: retryOnFail', async () => {
  const redisClient = await getRedisInstance();
  const lock = promisifyAll(
    new Locker(redisClient, console, 'key1', 20000, false),
  );
  await expect(lock.acquireLockAsync()).resolves.toBe(true);

  const lock2 = promisifyAll(
    new Locker(redisClient, console, 'key1', 10000, false),
  );
  await expect(lock2.acquireLockAsync()).resolves.toBe(false);

  const lock3 = promisifyAll(
    new Locker(redisClient, console, 'key1', 10000, true),
  );
  await expect(lock3.acquireLockAsync()).resolves.toBe(true);
  await expect(lock3.extendLockAsync()).resolves.toBeUndefined();
});