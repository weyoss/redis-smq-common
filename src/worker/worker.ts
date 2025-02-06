/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { resolve } from 'path';
import { Worker as WorkerThread } from 'worker_threads';
import { ICallback } from '../common/index.js';
import {
  EWorkerThreadChildExecutionCode,
  EWorkerThreadChildExitCode,
  EWorkerType,
  TWorkerThreadChildMessage,
  TWorkerThreadParentMessage,
} from './types/index.js';
import { getDirname } from '../env/index.js';
import { EventEmitter } from '../event/index.js';
import { WorkerThreadError } from './errors/index.js';

export type TWorkerEvent = {
  'worker.error': (err: Error) => void;
  'worker.data': (payload: unknown) => void;
};

const dir = getDirname();

export abstract class Worker<
  Payload,
  Reply,
> extends EventEmitter<TWorkerEvent> {
  protected abstract readonly type: EWorkerType;
  protected readonly workerFilename;
  protected readonly initialPayload;
  protected workerThread: WorkerThread | null = null;

  constructor(workerFilename: string, initialPayload?: unknown) {
    super();
    this.workerFilename = workerFilename;
    this.initialPayload = initialPayload;
  }

  protected getWorkerThread(): WorkerThread {
    if (!this.workerThread) {
      this.workerThread = new WorkerThread(
        resolve(dir, './worker-thread/worker-thread.js'),
        {
          workerData: {
            filename: this.workerFilename,
            initialPayload: this.initialPayload,
            type: this.type,
          },
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

  protected registerEvents(
    cb: ICallback<Reply> | Worker<Payload, Reply>,
  ): void {
    const worker = this.getWorkerThread();
    const cleanUp = () => {
      worker
        .removeListener('message', onMessage)
        .removeListener('exit', onExit);
    };
    const callback: ICallback<Reply> = (err, data) => {
      if (err) {
        if (cb instanceof Worker) {
          this.emit('worker.error', err);
        } else cb(err);
      } else {
        if (cb instanceof Worker) this.emit('worker.data', data);
        else cb(null, data);
      }
    };
    const onMessage = (msg: TWorkerThreadChildMessage<Reply>) => {
      cleanUp();
      if (msg.code !== EWorkerThreadChildExecutionCode.OK) {
        callback(new WorkerThreadError(msg));
      } else callback(null, msg.data);
    };
    const onExit = () => {
      cleanUp();
      const msg = {
        code: EWorkerThreadChildExitCode.TERMINATED,
        error: null,
      };
      callback(new WorkerThreadError(msg));
    };
    worker.once('message', onMessage);
    worker.once('exit', onExit);
  }

  postMessage(message: TWorkerThreadParentMessage): void {
    this.getWorkerThread().postMessage(message);
  }

  shutdown(cb: ICallback<void>) {
    const callback = () => {
      this.workerThread = null;
      cb();
    };
    if (this.workerThread) {
      this.workerThread.terminate().then(callback).catch(callback);
    } else cb();
  }
}
