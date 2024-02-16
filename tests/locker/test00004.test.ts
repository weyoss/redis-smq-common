/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

// type-coverage:ignore-next-line
import { LockAbortError } from '../../src/locker/errors';

// type-coverage:ignore-next-line
const mockRunScript = jest
  .fn()
  .mockImplementationOnce(
    (
      scriptName: string,
      keys: (string | number)[],
      args: (string | number)[],
      cb: ICallback<unknown>,
    ) => {
      setTimeout(() => cb(null, 1), 10000);
    },
  )
  .mockImplementationOnce(
    (
      scriptName: string,
      keys: (string | number)[],
      args: (string | number)[],
      cb: ICallback<unknown>,
    ) => {
      setTimeout(() => cb(null, 1), 1000);
    },
  );

// type-coverage:ignore-next-line
const mockHalt = jest.fn().mockImplementationOnce((cb: ICallback<void>) => {
  setTimeout(() => cb(), 5000);
});

// type-coverage:ignore-next-line
const mockSet = jest.fn().mockImplementationOnce(
  (
    key: string,
    value: string,
    options: {
      expire?: { mode: 'EX' | 'PX'; value: number };
      exists?: 'NX' | 'XX';
    },
    cb: ICallback<string | null>,
  ) => {
    setTimeout(() => cb(null, '1'), 5000);
  },
);

jest.mock('../common', () => {
  return {
    getRedisInstance() {
      return Promise.resolve({
        // type-coverage:ignore-next-line
        runScript: mockRunScript,
        // type-coverage:ignore-next-line
        halt: mockHalt,
        // type-coverage:ignore-next-line
        set: mockSet,
      });
    },
  };
});

import { promisifyAll } from 'bluebird';
import { Locker } from '../../src/locker/locker';
import { getRedisInstance } from '../common';
import { ICallback } from '../../types';

test('Locker: extendLock() -> LockAbortError', async () => {
  const redisClient = await getRedisInstance();
  const lock = promisifyAll(
    new Locker(redisClient, console, 'key1', 10000, false),
  );
  await expect(lock.acquireLockAsync()).resolves.toBe(true);
  await expect(
    Promise.all([lock.extendLockAsync(), lock.shutdownAsync()]),
  ).rejects.toThrow(LockAbortError);
});
