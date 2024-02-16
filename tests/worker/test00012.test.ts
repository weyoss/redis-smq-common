/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { delay, promisifyAll } from 'bluebird';
import path from 'path';
import { WorkerResourceGroup } from '../../src/worker/worker-resource-group';
import { getRedisInstance } from '../common';

it('WorkerResourceGroup: addWorker()', async () => {
  const redisClient = await getRedisInstance();
  const workerRunnableResourceGroup = promisifyAll(
    new WorkerResourceGroup(redisClient, console, 'mygroupid'),
  );

  const filename = path.resolve(
    __dirname,
    './workers/worker-runnable-ok.worker.js',
  );
  workerRunnableResourceGroup.addWorker(filename, 'hello world');
  await workerRunnableResourceGroup.runAsync();

  await delay(10000);

  await workerRunnableResourceGroup.shutdownAsync();
});
