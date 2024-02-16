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
import { EWorkerThreadExitCode, EWorkerType } from '../../types/worker';
import path from 'path';

it('WorkerCallable: case 7', async () => {
  const mockParentPort: EventEmitter & { postMessage?: () => void } =
    new EventEmitter();
  mockParentPort.postMessage = jest.fn();

  const mockFilename = path.resolve(
    __dirname,
    './workers/worker-faulty-exit.worker.js',
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

  // In real world the thread would exit when the file has been imported
  // But process.exit is mocked so getHandlerFn() continues and trigger a second
  // exit call

  // type-coverage:ignore-next-line
  expect(mockExit).toHaveBeenCalledTimes(2);

  // type-coverage:ignore-next-line
  expect(mockExit).toHaveBeenNthCalledWith(1, 333);

  // type-coverage:ignore-next-line
  expect(mockExit).toHaveBeenNthCalledWith(
    2,
    EWorkerThreadExitCode.INVALID_WORKER_TYPE,
  );
});
