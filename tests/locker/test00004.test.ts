/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { expect, it, jest } from '@jest/globals';
import { AbortError } from '../../src/errors/index.js';
import bluebird from 'bluebird';
import { EventEmitter } from 'events';
import { resolve } from 'path';
import { getDirname } from '../../src/env/index.js';
import { Locker } from '../../src/locker/locker.js';
import { IoredisClient } from '../../src/redis-client/index.js';
import { ICallback, TFunction } from '../../src/common/index.js';
import { mockModule } from '../mock-module.js';

const dir = getDirname();

it('Locker: extendLock() -> LockAbortError', async () => {
  const modulePath = resolve(dir, '../common.js');

  const mockRunScript = jest
    .fn<TFunction>()
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

  const mockHalt = jest
    .fn<TFunction>()
    .mockImplementationOnce((cb: ICallback<void>) => {
      setTimeout(() => cb(), 5000);
    });

  const mockSet = jest.fn<TFunction>().mockImplementationOnce(
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

  mockModule(modulePath, () => {
    return {
      getRedisInstance() {
        const e = new EventEmitter();
        return Promise.resolve(
          Object.assign(e, {
            runScript: mockRunScript,
            halt: mockHalt,
            set: mockSet,
          }),
        );
      },
    };
  });

  const { getRedisInstance }: { getRedisInstance: TFunction<IoredisClient> } =
    await import(modulePath);
  const redisClient = await getRedisInstance();
  const lock = bluebird.promisifyAll(
    new Locker(redisClient, console, 'key1', 10000, false),
  );
  await expect(lock.acquireLockAsync()).resolves.toBe(true);
  await expect(
    Promise.all([lock.extendLockAsync(), lock.shutdownAsync()]),
  ).rejects.toThrow(AbortError);
});
