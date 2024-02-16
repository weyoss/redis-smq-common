/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { EWorkerType, IWorkerRunnable } from '../../types/worker';
import { Worker } from './worker';
import { ICallback } from '../../types';
import { PowerSwitch } from '../power-switch/power-switch';
import { WorkerAlreadyDownError, WorkerAlreadyRunningError } from './errors';

export class WorkerRunnable<Payload>
  extends Worker
  implements IWorkerRunnable<Payload>
{
  protected readonly type: EWorkerType = EWorkerType.RUNNABLE;
  protected readonly powerSwitch;

  constructor(workerFilename: string) {
    super(workerFilename);
    this.powerSwitch = new PowerSwitch();
  }

  run(initialPayload: Payload, cb: ICallback<void>) {
    const r = this.powerSwitch.goingUp();
    if (r) {
      this.exec(initialPayload, (err) => {
        if (err) {
          this.powerSwitch.rollback();
          cb(err);
        } else {
          this.powerSwitch.commit();
          this.registerEvents(this);
          cb();
        }
      });
    } else cb(new WorkerAlreadyRunningError());
  }

  override quit(cb: ICallback<void>) {
    const r = this.powerSwitch.goingDown();
    if (r) {
      super.quit(() => {
        this.powerSwitch.commit();
        cb();
      });
    } else cb(new WorkerAlreadyDownError());
  }
}