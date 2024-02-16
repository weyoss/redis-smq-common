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
import {
  WorkerAlreadyDownError,
  WorkerAlreadyRunningError,
} from '../../src/worker/errors';
import { WorkerRunnable } from '../../src/worker/worker-runnable';

it('WorkerRunnable', async () => {
  const filename = path.resolve(
    __dirname,
    './workers/worker-runnable-ok.worker.js',
  );
  const worker = promisifyAll(new WorkerRunnable<string>(filename));
  // will emit an error upon shutdown
  worker.on('worker.error', (err) => {
    console.error(err);
  });
  await worker.runAsync('Hello world!');

  await expect(async () => worker.runAsync('Hello world!')).rejects.toThrow(
    WorkerAlreadyRunningError,
  );

  await worker.quitAsync();

  await expect(async () => worker.quitAsync()).rejects.toThrow(
    WorkerAlreadyDownError,
  );
});
