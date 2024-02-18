/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { expect, it } from '@jest/globals';
import bluebird from 'bluebird';
import { LockMethodNotAllowedError } from '../../src/locker/errors/index.js';
import { Locker } from '../../src/locker/locker.js';
import { getRedisInstance } from '../common.js';

it('Locker: autoExtend', async () => {
  const redisClient = await getRedisInstance();
  const lock = bluebird.promisifyAll(
    new Locker(redisClient, console, 'key1', 10000, false, 3000),
  );
  await expect(lock.acquireLockAsync()).resolves.toBe(true);
  await expect(lock.extendLockAsync()).rejects.toThrowError(
    LockMethodNotAllowedError,
  );

  await bluebird.delay(20000);

  const lock2 = bluebird.promisifyAll(
    new Locker(redisClient, console, 'key1', 10000, false),
  );
  await expect(lock2.acquireLockAsync()).resolves.toBe(false);

  await lock.releaseLockAsync();
  await lock2.releaseLockAsync();
});
