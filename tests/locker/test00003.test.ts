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
import { LockMethodNotAllowedError } from '../../src/locker/errors';

test('Locker: autoExtend', async () => {
  const redisClient = await getRedisInstance();
  const lock = promisifyAll(
    new Locker(redisClient, console, 'key1', 10000, false, 3000),
  );
  await expect(lock.acquireLockAsync()).resolves.toBe(true);
  await expect(lock.extendLockAsync()).rejects.toThrowError(
    LockMethodNotAllowedError,
  );

  await delay(20000);

  const lock2 = promisifyAll(
    new Locker(redisClient, console, 'key1', 10000, false),
  );
  await expect(lock2.acquireLockAsync()).resolves.toBe(false);

  await lock.releaseLockAsync();
  await lock2.releaseLockAsync();
});
