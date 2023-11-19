/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { promisify, promisifyAll } from 'bluebird';
import { RedisClient } from '../src/redis-client/redis-client';
import { redisConfig } from './config';
import { redis } from '../src/redis-client';

const redisClients: RedisClient[] = [];
const createClientInstanceAsync = promisify(redis.createInstance);

export async function startUp(): Promise<void> {
  const redisClient = await getRedisInstance();
  await redisClient.flushallAsync();
}

export async function shutdown(): Promise<void> {
  while (redisClients.length) {
    const redisClient = redisClients.pop();
    if (redisClient) {
      await promisifyAll(redisClient).haltAsync();
    }
  }
}

export async function getRedisInstance(config = redisConfig) {
  const c = promisifyAll(await createClientInstanceAsync(config));
  redisClients.push(c);
  return c;
}
