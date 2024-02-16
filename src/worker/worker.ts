/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { ICallback } from '../../types';
import { Worker as WorkerThread } from 'worker_threads';
import path from 'path';
import {
  EWorkerThreadExecutionCode,
  EWorkerThreadExitCode,
  EWorkerType,
  TWorkerThreadMessage,
} from '../../types/worker';
import { WorkerThreadError } from './errors';
import { EventEmitter } from '../event';

export type TWorkerEvent = {
  'worker.error': (err: Error) => void;
  'worker.data': (payload: unknown) => void;
};

export abstract class Worker extends EventEmitter<TWorkerEvent> {
  protected abstract readonly type: EWorkerType;
  protected readonly workerFilename;
  protected workerThread: WorkerThread | null = null;

  constructor(workerFilename: string) {
    super();
    this.workerFilename = workerFilename;
  }

  protected getWorkerThread(): WorkerThread {
    if (!this.workerThread) {
      this.workerThread = new WorkerThread(
        path.resolve(__dirname, './worker-thread.js'),
        {
          workerData: { filename: this.workerFilename, type: this.type },
        },
      );
      this.workerThread.on('messageerror', (err) => {
        console.error(err);
      });
      this.workerThread.on('error', (err) => {
        console.error(err);
      });
      this.workerThread.on('exit', () => {
        this.workerThread = null;
      });
    }
    return this.workerThread;
  }

  protected registerEvents(cb: ICallback<unknown> | Worker): void {
    const worker = this.getWorkerThread();
    const cleanUp = () => {
      worker
        .removeListener('message', onMessage)
        .removeListener('exit', onExit);
    };
    const callback: ICallback<unknown> = (err, data) => {
      if (err) {
        if (cb instanceof Worker) {
          this.emit('worker.error', err);
        } else cb(err);
      } else {
        if (cb instanceof Worker) this.emit('worker.data', data);
        else cb(null, data);
      }
    };
    const onMessage = (msg: TWorkerThreadMessage) => {
      cleanUp();
      if (msg.code !== EWorkerThreadExecutionCode.OK) {
        console.error(`WorkerThreadError`, msg);
        callback(new WorkerThreadError(msg));
      } else callback(null, msg.data);
    };
    const onExit = () => {
      cleanUp();
      const msg = {
        code: EWorkerThreadExitCode.TERMINATED,
        error: null,
      };
      console.error('WorkerThreadError', msg);
      callback(new WorkerThreadError(msg));
    };
    worker.once('message', onMessage);
    worker.once('exit', onExit);
  }

  protected exec(payload: unknown, cb: ICallback<unknown>): void {
    this.registerEvents(cb);
    if (!(payload === null || payload === undefined))
      this.getWorkerThread().postMessage(payload);
  }

  quit(cb: ICallback<void>) {
    const callback = () => {
      this.workerThread = null;
      cb();
    };
    if (this.workerThread) {
      this.workerThread.terminate().then(callback).catch(callback);
    } else cb();
  }
}
