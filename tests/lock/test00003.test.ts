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
  LockAcquireError,
  LockMethodNotAllowedError,
} from '../../src/lock/errors';

test('Lock: autoExtend', async () => {
  const redisClient = await getRedisInstance();
  const lock = promisifyAll(new Lock(redisClient, 'key1', 10000, false, true));

  await lock.acquireLockAsync();

  await expect(lock.extendLockAsync()).rejects.toThrowError(
    LockMethodNotAllowedError,
  );

  await delay(20000);

  const lock2 = promisifyAll(new Lock(redisClient, 'key1', 10000, false));

  await expect(lock2.acquireLockAsync()).rejects.toThrow(LockAcquireError);

  await lock.releaseLockAsync();
  await lock2.releaseLockAsync();
});
