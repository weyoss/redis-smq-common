/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { Worker } from '../worker';
import { ICallback } from '../../../types';
import { async } from '../../async/async';

export class WorkerPool {
  private pool: Worker[] = [];

  work = (cb: ICallback<void>): void => {
    if (this.pool.length) {
      const tasks = this.pool.map(
        (worker) => (cb: ICallback<void>) => worker.work(cb),
      );
      async.waterfall(tasks, cb);
    } else cb();
  };

  add = (worker: Worker): number => {
    this.pool.push(worker);
    return this.pool.length;
  };

  clear = (cb: ICallback<void>): void => {
    async.each(
      this.pool,
      (worker, _, done) => {
        worker.quit(done);
      },
      () => {
        this.pool = [];
        cb();
      },
    );
  };
}
