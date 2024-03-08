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
import { resolve } from 'node:path';
import { getDirname } from '../../src/env/environment.js';
import { WorkerPayloadRequiredError } from '../../src/worker/errors/index.js';
import { WorkerCallable } from '../../src/worker/worker-callable.js';

const dir = getDirname();

it('WorkerCallable: case 1', async () => {
  const filename = resolve(dir, './workers/worker-ok.worker.js');
  const worker = bluebird.promisifyAll(
    new WorkerCallable<string | null, string>(filename),
  );
  const reply = await worker.callAsync('Hello world!');
  expect(reply).toEqual('Hello world!');

  await expect(async () => worker.callAsync(null)).rejects.toThrow(
    WorkerPayloadRequiredError,
  );

  await worker.shutDownAsync();

  // second timer is OK
  await worker.shutDownAsync();
});
