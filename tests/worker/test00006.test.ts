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

it('WorkerCallable: case 6', async () => {
  const mockParentPort: EventEmitter & { postMessage?: () => void } =
    new EventEmitter();
  mockParentPort.postMessage = jest.fn();

  const mockFilename = resolve(dir, './workers/worker-faulty.worker.js');
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

  expect(mockParentPort.postMessage).toHaveBeenCalledTimes(1);
  expect(mockParentPort.postMessage).toHaveBeenCalledWith({
    code: EWorkerThreadExitCode.INVALID_WORKER_TYPE,
    error: null,
  });

  // type-coverage:ignore-next-line
  expect(mockExit).toHaveBeenCalledTimes(1);

  // type-coverage:ignore-next-line
  expect(mockExit).toHaveBeenCalledWith(
    EWorkerThreadExitCode.INVALID_WORKER_TYPE,
  );
});
