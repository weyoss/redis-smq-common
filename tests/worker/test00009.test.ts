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
  EWorkerThreadChildExitCode,
  EWorkerThreadParentMessage,
  EWorkerType,
} from '../../src/worker/index.js';
import { mockModule } from '../mock-module.js';

const dir = getDirname();

it('WorkerCallable: case 9', async () => {
  const mockParentPort: EventEmitter & { postMessage?: () => void } =
    new EventEmitter();
  mockParentPort.postMessage = jest.fn();

  const mockFilename = resolve(dir, './workers/worker-non-existent.js');
  const mockType = EWorkerType.CALLABLE;

  mockModule('worker_threads', () => {
    return {
      isMainThread: false,
      parentPort: mockParentPort,
      workerData: { filename: mockFilename, type: mockType },
    };
  });

  // eslint-disable-next-line
  // @ts-ignore
  const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});

  await import('../../src/worker/worker-thread/worker-thread.js');

  await bluebird.delay(5000);

  mockParentPort.emit('message', {
    type: EWorkerThreadParentMessage.CALL,
    payload: '123456',
  });

  await bluebird.delay(5000);

  // In real world the thread would exit when the file has been imported
  // But process.exit is mocked so the code continues execution

  expect(mockExit).toHaveBeenCalledTimes(2);

  expect(mockExit).toHaveBeenNthCalledWith(
    1,
    EWorkerThreadChildExitCode.FILE_READ_ERROR,
  );

  expect(mockExit).toHaveBeenNthCalledWith(
    2,
    EWorkerThreadChildExitCode.FILE_IMPORT_ERROR,
  );
});
