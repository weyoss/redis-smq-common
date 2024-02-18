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
import { getDirname } from '../../src/env/environment.js';
import { EWorkerThreadExitCode, EWorkerType } from '../../types/index.js';
import { mockModule } from '../mock-module.js';

const dir = getDirname();

it('WorkerCallable: case 10', async () => {
  const mockParentPort: EventEmitter & { postMessage?: () => void } =
    new EventEmitter();
  mockParentPort.postMessage = jest.fn();

  const mockFilename = resolve(dir, './workers/worker-non-existent.cjsx');
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
  const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {}); // type-coverage:ignore-line

  await import('../../src/worker/worker-thread.js');

  await bluebird.delay(5000);

  mockParentPort.emit('message', '123456789');

  await bluebird.delay(5000);

  // In real world the thread would exit when the file has been imported
  // But process.exit is mocked so the code continues execution

  // type-coverage:ignore-next-line
  expect(mockExit).toHaveBeenCalledTimes(3);

  // type-coverage:ignore-next-line
  expect(mockExit).toHaveBeenNthCalledWith(
    1,
    EWorkerThreadExitCode.FILE_EXTENSION_ERROR,
  );

  // type-coverage:ignore-next-line
  expect(mockExit).toHaveBeenNthCalledWith(
    2,
    EWorkerThreadExitCode.FILE_READ_ERROR,
  );

  // type-coverage:ignore-next-line
  expect(mockExit).toHaveBeenNthCalledWith(
    3,
    EWorkerThreadExitCode.FILE_IMPORT_ERROR,
  );
});
