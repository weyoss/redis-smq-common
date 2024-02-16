/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { promisifyAll } from 'bluebird';
import path from 'path';
import { WorkerCallable } from '../../src/worker/worker-callable';
import { WorkerPayloadRequiredError } from '../../src/worker/errors';

it('WorkerCallable: case 1', async () => {
  const filename = path.resolve(__dirname, './workers/worker-ok.worker.js');
  const worker = promisifyAll(
    new WorkerCallable<string | null, string>(filename),
  );
  const reply = await worker.callAsync('Hello world!');
  expect(reply).toEqual('Hello world!');

  await expect(async () => worker.callAsync(null)).rejects.toThrow(
    WorkerPayloadRequiredError,
  );

  await worker.quitAsync();

  // second timer is OK
  await worker.quitAsync();
});
