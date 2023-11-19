/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { delay, promisifyAll } from 'bluebird';
import { ELockStatus, Lock } from '../../src/lock/lock';
import { getRedisInstance } from '../common';
import { LockMethodNotAllowedError } from '../../src/lock/errors';

test('Lock: acquireOrExtend', async () => {
  const redisClient = await getRedisInstance();
  const lm1 = promisifyAll(new Lock(redisClient, 'key1', 10000, false, true));
  await expect(lm1.acquireOrExtendAsync()).rejects.toThrowError(
    LockMethodNotAllowedError,
  );
  const lm2 = promisifyAll(new Lock(redisClient, 'key1', 10000));
  const op1 = await lm2.acquireOrExtendAsync();
  expect(op1).toEqual(ELockStatus.locked);
  await delay(5000);
  const op2 = await lm2.acquireOrExtendAsync();
  expect(op2).toEqual(ELockStatus.extended);
  await delay(15000);
  const op3 = await lm2.acquireOrExtendAsync();
  expect(op3).toEqual(ELockStatus.locked);
});
