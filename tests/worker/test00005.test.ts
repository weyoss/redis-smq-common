/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { EventEmitter } from 'events';
import { delay } from 'bluebird';
import { EWorkerThreadExecutionCode, EWorkerType } from '../../types/worker';
import path from 'path';

it('WorkerCallable: case 5', async () => {
  const mockParentPort: EventEmitter & { postMessage?: () => void } =
    new EventEmitter();
  mockParentPort.postMessage = jest.fn();

  const mockFilename = path.resolve(
    __dirname,
    './workers/worker-exception.worker.js',
  );
  const mockType = EWorkerType.CALLABLE;

  jest.mock('worker_threads', () => {
    return {
      isMainThread: false,
      parentPort: mockParentPort,
      workerData: { filename: mockFilename, type: mockType },
    };
  });

  // eslint-disable-next-line
  // @ts-ignore
  const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {}); // type-coverage:ignore-line

  await import('../../src/worker/worker-thread');

  await delay(5000);

  mockParentPort.emit('message', '123456789');

  await delay(5000);

  expect(mockParentPort.postMessage).toHaveBeenCalledTimes(1);
  expect(mockParentPort.postMessage).toHaveBeenCalledWith({
    code: EWorkerThreadExecutionCode.PROCESSING_CAUGHT_ERROR,
    error: { name: 'Error', message: 'THROW_ERROR' },
  });

  expect(mockExit).toHaveBeenCalledTimes(0); // type-coverage:ignore-line
});