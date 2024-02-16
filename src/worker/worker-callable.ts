/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { EWorkerType, IWorkerCallable } from '../../types/worker';
import { Worker } from './worker';
import { ICallback } from '../../types';
import { WorkerPayloadRequiredError } from './errors';

export class WorkerCallable<Payload, Reply>
  extends Worker
  implements IWorkerCallable<Payload, Reply>
{
  protected readonly type: EWorkerType = EWorkerType.CALLABLE;

  call(payload: Payload, cb: ICallback<Reply>) {
    if (payload === null || payload === undefined) {
      cb(new WorkerPayloadRequiredError());
    } else {
      // @ts-expect-error reply data type is known only at runtime
      this.exec(payload, cb);
    }
  }
}
