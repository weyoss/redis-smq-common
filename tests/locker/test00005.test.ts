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
import { getDirname } from '../../src/env/environment.js';
import { Locker } from '../../src/locker/locker.js';
import { IoredisClient } from '../../src/redis-client/clients/ioredis-client.js';
import { ICallback, TFunction } from '../../src/common/index.js';
import { mockModule } from '../mock-module.js';

const dir = getDirname();

it('Locker: acquireLock() -> LockAbortError', async () => {
  const modulePath = resolve(dir, '../common.js');

  // type-coverage:ignore-next-line
  const mockRunScript = jest
    .fn<TFunction>()
    .mockImplementationOnce(
      (
        scriptName: string,
        keys: (string | number)[],
        args: (string | number)[],
        cb: ICallback<unknown>,
      ) => {
        setTimeout(() => cb(null, 1), 1000);
      },
    )
    .mockImplementationOnce(
      (
        scriptName: string,
        keys: (string | number)[],
        args: (string | number)[],
        cb: ICallback<unknown>,
      ) => {
        console.log('second', scriptName);
        setTimeout(() => cb(null, 1), 1000);
      },
    );

  // type-coverage:ignore-next-line
  const mockHalt = jest
    .fn<TFunction>()
    .mockImplementationOnce((cb: ICallback<void>) => {
      setTimeout(() => cb(), 5000);
    });

  // type-coverage:ignore-next-line
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
      setTimeout(() => cb(null, '1'), 10000);
    },
  );

  // type-coverage:ignore-next-line
  mockModule(modulePath, () => {
    return {
      getRedisInstance() {
        const e = new EventEmitter();
        return Promise.resolve(
          Object.assign(e, {
            // type-coverage:ignore-next-line
            runScript: mockRunScript,
            // type-coverage:ignore-next-line
            halt: mockHalt,
            // type-coverage:ignore-next-line
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
  await expect(
    Promise.all([
      lock.acquireLockAsync(),
      new Promise<void>((resolve) => {
        setTimeout(() => {
          redisClient.emit('error', new Error());
          resolve();
        }, 3000);
      }),
    ]),
  ).rejects.toThrow(AbortError);
});
