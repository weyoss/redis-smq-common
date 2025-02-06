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
import { resolve } from 'node:path';
import { getDirname } from '../../src/env/index.js';
import {
  EWorkerThreadChildExecutionCode,
  EWorkerThreadParentMessage,
  EWorkerType,
  TWorkerThreadParentMessage,
} from '../../src/worker/index.js';
import { mockModule } from '../mock-module.js';

const dir = getDirname();

it('WorkerCallable: case 3', async () => {
  const mockParentPort: EventEmitter & { postMessage?: () => void } =
    new EventEmitter();
  mockParentPort.postMessage = jest.fn();

  const mockFilename = resolve(dir, './workers/worker-ok.worker.js');
  const mockType = EWorkerType.CALLABLE;

  mockModule('worker_threads', () => {
    return {
      isMainThread: false,
      parentPort: mockParentPort,
      workerData: { filename: mockFilename, type: mockType },
    };
  });

  // @ts-expect-error any
  const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});

  await import('../../src/worker/worker-thread/worker-thread.js');

  await bluebird.delay(5000);

  const message: TWorkerThreadParentMessage = {
    type: EWorkerThreadParentMessage.CALL,
    payload: '123456',
  };
  mockParentPort.emit('message', message);

  await bluebird.delay(5000);

  expect(mockParentPort.postMessage).toHaveBeenCalledTimes(1);
  expect(mockParentPort.postMessage).toHaveBeenCalledWith({
    code: EWorkerThreadChildExecutionCode.OK,
    data: message.payload,
  });

  expect(mockExit).toHaveBeenCalledTimes(0);
});
