import { promisifyAll } from 'bluebird';
import { RedisClient } from '../src/redis-client/redis-client';
import { redisConfig } from './config';

const redisClients: RedisClient[] = [];

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

export async function getRedisInstance() {
  const RedisClientAsync = promisifyAll(RedisClient);
  const c = promisifyAll(
    await RedisClientAsync.getNewInstanceAsync(redisConfig),
  );
  redisClients.push(c);
  return c;
}
