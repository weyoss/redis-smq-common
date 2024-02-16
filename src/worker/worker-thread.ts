/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import {
  isMainThread,
  MessagePort,
  parentPort,
  // type-coverage:ignore-next-line
  workerData,
} from 'worker_threads';
import {
  EWorkerThreadExecutionCode,
  EWorkerThreadExitCode,
  EWorkerType,
  IWorkerData,
  TWorkerFn,
  TWorkerThreadMessage,
  TWorkerThreadMessageCode,
} from '../../types/worker';
import path from 'path';
import { statSync } from 'fs';

function importWorkerFn(
  filename: string,
  cb: (worker: TWorkerFn) => void,
): void {
  import(filename)
    .then((importedModule: { default?: TWorkerFn } | TWorkerFn) => {
      const fn =
        typeof importedModule !== 'function' && importedModule.default
          ? importedModule.default
          : importedModule;
      if (typeof fn !== 'function') {
        exit(EWorkerThreadExitCode.INVALID_WORKER_TYPE);
      } else cb(fn);
    })
    .catch((err: unknown) => {
      console.error(err);
      exit(EWorkerThreadExitCode.FILE_IMPORT_ERROR);
    });
}

function formatErrorMessage(
  code: TWorkerThreadMessageCode,
  err?: unknown,
): TWorkerThreadMessage {
  const error =
    err && err instanceof Error
      ? { name: err.name, message: err.message }
      : null;
  return {
    code,
    error,
  };
}

function formatOKMessage(data: unknown): TWorkerThreadMessage {
  return {
    code: EWorkerThreadExecutionCode.OK,
    data,
  };
}

function postMessage(
  messagePort: MessagePort,
  code: TWorkerThreadMessageCode,
  err?: unknown,
  data?: unknown,
) {
  const msg =
    code === EWorkerThreadExecutionCode.OK
      ? formatOKMessage(data)
      : formatErrorMessage(code, err);
  messagePort.postMessage(msg);
}

function exit(code: TWorkerThreadMessageCode, err?: unknown) {
  parentPort && postMessage(parentPort, code, err);
  process.exit(code);
}

if (!isMainThread && parentPort) {
  // type-coverage:ignore-next-line
  if (!workerData) {
    exit(EWorkerThreadExitCode.WORKER_DATA_REQUIRED);
  } else {
    const messagePort: MessagePort = parentPort;

    const { type, filename }: IWorkerData = workerData;

    if (!['.js', '.cjs'].includes(path.extname(filename))) {
      exit(EWorkerThreadExitCode.FILE_EXTENSION_ERROR);
    }

    try {
      statSync(filename);
    } catch (e: unknown) {
      exit(EWorkerThreadExitCode.FILE_READ_ERROR, e);
    }

    importWorkerFn(filename, (workerFn) => {
      const callback = (err?: Error | null, reply?: unknown) => {
        if (err) {
          postMessage(
            messagePort,
            EWorkerThreadExecutionCode.PROCESSING_ERROR,
            err,
          );
        } else {
          postMessage(messagePort, EWorkerThreadExecutionCode.OK, null, reply);
        }
      };

      const onMessage = (...args: unknown[]) => {
        try {
          workerFn(...args, callback);
        } catch (err: unknown) {
          postMessage(
            messagePort,
            EWorkerThreadExecutionCode.PROCESSING_CAUGHT_ERROR,
            err,
          );
        }
      };
      if (type === EWorkerType.CALLABLE) messagePort.on('message', onMessage);
      else messagePort.once('message', onMessage);
    });
  }

  process.on('uncaughtException', (err) => {
    exit(EWorkerThreadExitCode.UNCAUGHT_EXCEPTION, err);
  });
}
