import { promisifyAll } from 'bluebird';
import * as redisClient from '../src/redis-client/create-client-instance';
import { RedisClient } from '../src/redis-client/redis-client';
import { redisConfig } from './config';

const redisClients: RedisClient[] = [];
const redisClientAsync = promisifyAll(redisClient);

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
  const c = promisifyAll(
    await redisClientAsync.createClientInstanceAsync(config),
  );
  redisClients.push(promisifyAll(c));
  return c;
}
