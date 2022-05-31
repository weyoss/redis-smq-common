import { promisify, promisifyAll } from 'bluebird';
import { RedisClient } from '../src/redis-client/redis-client';
import { redisConfig } from './config';
import { createClientInstance } from '../src/redis-client/create-client-instance';

const redisClients: RedisClient[] = [];
const createClientInstanceAsync = promisify(createClientInstance);

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
  redisClients.push(promisifyAll(c));
  return c;
}
