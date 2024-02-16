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

it('WorkerCallable: case 2', async () => {
  const filename = path.resolve(
    __dirname,
    './workers/worker-non-existent.worker.js',
  );
  const worker = promisifyAll(new WorkerCallable<string, string>(filename));

  await expect(worker.callAsync('Hello world!')).rejects.toThrow(
    'Error code: FILE_READ_ERROR',
  );

  await expect(worker.callAsync('Hello world!')).rejects.toThrow(
    'Error code: FILE_READ_ERROR',
  );

  const filename2 = path.resolve(
    __dirname,
    './workers/worker-non-existent.worker.jsc',
  );
  const worker2 = promisifyAll(new WorkerCallable<string, string>(filename2));
  await expect(worker2.callAsync('Hello world!')).rejects.toThrow(
    'Error code: FILE_EXTENSION_ERROR',
  );

  const filename3 = path.resolve(__dirname, './workers/worker-error.worker.js');
  const worker3 = promisifyAll(new WorkerCallable<string, string>(filename3));
  await expect(worker3.callAsync('Hello world!')).rejects.toThrow(
    'Error code: PROCESSING_ERROR',
  );
  await worker3.quitAsync();

  const filename4 = path.resolve(
    __dirname,
    './workers/worker-exception.worker.js',
  );
  const worker4 = promisifyAll(new WorkerCallable<string, string>(filename4));
  await expect(worker4.callAsync('Hello world!')).rejects.toThrow(
    'Error code: PROCESSING_CAUGHT_ERROR',
  );
  await worker4.quitAsync();

  const filename5 = path.resolve(
    __dirname,
    './workers/worker-faulty.worker.js',
  );
  const worker5 = promisifyAll(new WorkerCallable<string, string>(filename5));
  await expect(worker5.callAsync('Hello world!')).rejects.toThrow(
    'Error code: INVALID_WORKER_TYPE',
  );

  const filename6 = path.resolve(
    __dirname,
    './workers/worker-faulty-exit.worker.js',
  );
  const worker6 = promisifyAll(new WorkerCallable<string, string>(filename6));
  await expect(worker6.callAsync('Hello world!')).rejects.toThrow(
    'Error code: TERMINATED',
  );
});
