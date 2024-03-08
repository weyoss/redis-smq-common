/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { ICallback } from '../../common/index.js';

export enum EWorkerType {
  CALLABLE,
  RUNNABLE,
}

// eslint-disable-next-line
export type TWorkerFn = (...args: [...any[], ICallback<any>]) => void; // type-coverage:ignore-line

export interface IWorkerRunnable<Payload> {
  run(initialPayload: Payload, cb: ICallback<void>): void;
}

export interface IWorkerCallable<Payload, Reply> {
  call(payload: Payload, cb: ICallback<Reply>): void;
}

export interface IWorkerData {
  type: EWorkerType;
  filename: string;
}

export enum EWorkerThreadExitCode {
  WORKER_DATA_REQUIRED = 100,
  INVALID_WORKER_TYPE,
  FILE_IMPORT_ERROR,
  UNCAUGHT_EXCEPTION,
  FILE_EXTENSION_ERROR,
  FILE_READ_ERROR,
  TERMINATED,
}

export enum EWorkerThreadExecutionCode {
  OK = 200,
  PROCESSING_ERROR,
  PROCESSING_CAUGHT_ERROR,
}

export type TWorkerThreadMessageCode =
  | EWorkerThreadExitCode
  | EWorkerThreadExecutionCode;

export type TWorkerThreadError = {
  name: string;
  message: string;
};

export type TWorkerThreadMessage = {
  code: TWorkerThreadMessageCode;
  data?: unknown;
  error?: TWorkerThreadError | null;
};
