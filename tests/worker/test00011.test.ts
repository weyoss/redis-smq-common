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
import {
  WorkerAlreadyDownError,
  WorkerAlreadyRunningError,
} from '../../src/worker/errors/index.js';
import { WorkerRunnable } from '../../src/worker/worker-runnable.js';

const dir = getDirname();

it('WorkerRunnable', async () => {
  const filename = resolve(dir, './workers/runnable/runnable1.worker.js');
  const worker = bluebird.promisifyAll(new WorkerRunnable<string>(filename));
  // will emit an error upon shutdown
  worker.on('worker.error', (err) => {
    console.error(err);
  });
  await worker.runAsync('Hello world!');

  await expect(async () => worker.runAsync('Hello world!')).rejects.toThrow(
    WorkerAlreadyRunningError,
  );

  await worker.shutDownAsync();

  await expect(async () => worker.shutDownAsync()).rejects.toThrow(
    WorkerAlreadyDownError,
  );
});
