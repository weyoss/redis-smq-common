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
