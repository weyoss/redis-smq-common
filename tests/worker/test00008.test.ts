/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { expect, it, jest } from '@jest/globals';
import bluebird from 'bluebird';
import { EventEmitter } from 'events';
import {
  EWorkerThreadChildExitCode,
  EWorkerThreadParentMessage,
} from '../../src/worker/index.js';
import { mockModule } from '../mock-module.js';

it('WorkerCallable: case 8', async () => {
  const mockParentPort: EventEmitter & { postMessage?: () => void } =
    new EventEmitter();
  mockParentPort.postMessage = jest.fn();

  mockModule('worker_threads', () => {
    return {
      isMainThread: false,
      parentPort: mockParentPort,
      workerData: '',
    };
  });

  // @ts-expect-error any
  const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
  await import('../../src/worker/worker-thread/worker-thread.js');

  await bluebird.delay(5000);

  mockParentPort.emit('message', {
    type: EWorkerThreadParentMessage.CALL,
    payload: '123456',
  });

  await bluebird.delay(5000);

  // In real world the thread would exit when workerData is empty
  // But process.exit is mocked so getHandlerFn() is called with empty workerData
  expect(mockParentPort.postMessage).toHaveBeenCalledTimes(1);
  expect(mockParentPort.postMessage).toHaveBeenNthCalledWith(1, {
    code: EWorkerThreadChildExitCode.WORKER_DATA_REQUIRED,
    error: null,
  });

  // In real world the thread would exit when workerData is empty
  // But process.exit is mocked so getHandlerFn() is called with empty workerData

  expect(mockExit).toHaveBeenCalledTimes(1);

  expect(mockExit).toHaveBeenNthCalledWith(
    1,
    EWorkerThreadChildExitCode.WORKER_DATA_REQUIRED,
  );
});
