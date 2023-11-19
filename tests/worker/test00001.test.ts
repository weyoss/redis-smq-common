/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { Worker } from '../../src/worker/worker';
import { delay } from 'bluebird';
import { WorkerRunner } from '../../src/worker/worker-runner/worker-runner';
import { getRedisInstance } from '../common';
import { WorkerPool } from '../../src/worker/worker-runner/worker-pool';
import { ICallback } from '../../types';

class UnmanagedCounterWorker extends Worker {
  count = 0;

  constructor() {
    super(false);
  }

  override work(cb: ICallback<void>) {
    if (this.count >= 3) this.quit(() => void 0);
    else this.count += 1;
    cb();
  }
}

class ManagedCounterWorker extends Worker {
  count = 0;

  constructor() {
    super(true);
  }

  override work(cb: ICallback<void>) {
    if (this.count < 3) this.count += 1;
    cb();
  }
}

describe('Worker & WorkerRunner', () => {
  test('Case 1', async () => {
    const worker = new UnmanagedCounterWorker();
    worker.run();
    await delay(5000);
    expect(worker.count).toBe(3);
  });

  test('Case 2', async () => {
    const worker1 = new ManagedCounterWorker();
    const worker2 = new ManagedCounterWorker();
    expect(() => worker1.run()).toThrow('You can not run a managed worker');
    const client = await getRedisInstance();
    const workerRunner = new WorkerRunner(
      client,
      'my-runner',
      new WorkerPool(),
      console,
    );
    workerRunner.addWorker(worker1);
    workerRunner.addWorker(worker2);
    workerRunner.run();
    await delay(10000);
    expect(worker1.count).toBe(3);
    expect(worker2.count).toBe(3);
    await new Promise((resolve) => workerRunner.quit(resolve));
  });
});
