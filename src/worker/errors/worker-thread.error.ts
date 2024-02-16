/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { WorkerError } from './worker-error';
import {
  EWorkerThreadExecutionCode,
  EWorkerThreadExitCode,
  TWorkerThreadMessage,
} from '../../../types/worker';

export class WorkerThreadError extends WorkerError {
  constructor(msg: TWorkerThreadMessage) {
    const { code, error } = msg;
    const messageStr = `Error code: ${
      EWorkerThreadExitCode[code] ?? EWorkerThreadExecutionCode[code]
    }.${error ? ` Cause: ${error.name}(${error.message})` : ''}`;
    super(messageStr);
  }
}