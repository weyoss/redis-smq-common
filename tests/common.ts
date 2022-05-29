import { delay, promisifyAll } from 'bluebird';
import * as redisClient from '../src/redis-client/create-instance';
import { RedisClient } from '../src/redis-client/redis-client';
import { redisConfig } from './config';
import { TRedisConfig } from '../types';

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
  const c = promisifyAll(await redisClientAsync.createInstanceAsync(config));
  redisClients.push(promisifyAll(c));
  return c;
}

export async function standardCommands(config: TRedisConfig) {
  const client = await getRedisInstance(config);

  let r: unknown = await client.setAsync('key1', 'value', {});
  expect(r).toBe('OK');

  r = await client.getAsync('key1');
  expect(r).toBe('value');

  r = await client.delAsync('key1');
  expect(r).toBe(1);

  r = await client.setAsync('key2', 'value', {
    expire: { mode: 'PX', value: 10000 },
  });
  expect(r).toBe('OK');

  r = await client.setAsync('key3', 'value', {
    expire: { mode: 'PX', value: 10000 },
    exists: 'NX',
  });
  expect(r).toBe('OK');

  r = await client.zaddAsync('key4', 100, 'value');
  expect(r).toBe(1);

  r = await client.zcardAsync('key4');
  expect(r).toBe(1);

  r = await client.zrangeAsync('key4', 0, 200);
  expect(r).toEqual(['value']);

  r = await client.zrangebyscoreAsync('key4', 0, 200);
  expect(r).toEqual(['value']);

  r = await client.zrangebyscorewithscoresAsync('key4', 0, 200);
  expect(r).toEqual({ 100: 'value' });

  r = await client.zremrangebyscoreAsync('key4', 0, 200);
  expect(r).toEqual(1);

  r = await client.saddAsync('key5', 'value');
  expect(r).toBe(1);

  r = await client.smembersAsync('key5');
  expect(r).toEqual(['value']);

  r = await client.hsetAsync('key6', 'k', 'v');
  expect(r).toBe(1);

  r = await client.hgetAsync('key6', 'k');
  expect(r).toBe('v');

  r = await client.hmgetAsync('key6', ['k']);
  expect(r).toEqual(['v']);

  r = await client.hgetallAsync('key6');
  expect(r).toEqual({ k: 'v' });

  r = await client.hkeysAsync('key6');
  expect(r).toEqual(['k']);

  r = await client.hlenAsync('key6');
  expect(r).toEqual(1);

  r = await client.hdelAsync('key6', 'k');
  expect(r).toEqual(1);

  r = await client.hgetallAsync('key6');
  expect(r).toEqual({});

  r = await client.llenAsync('key7');
  expect(r).toEqual(0);

  r = await client.lrangeAsync('key7', 0, 100);
  expect(r).toEqual([]);

  r = await client.brpoplpushAsync('key7', 'key8', 1);
  expect(r).toEqual(null);

  r = await client.rpoplpushAsync('key7', 'key8');
  expect(r).toEqual(null);

  r = await client.rpopAsync('key7');
  expect(r).toEqual(null);

  r = await client.lremAsync('key7', 1, 'value');
  expect(r).toEqual(0);

  r = await client.watchAsync(['key7']);
  expect(r).toEqual('OK');

  r = await client.unwatchAsync();
  expect(r).toEqual('OK');

  r = await client.getInfoAsync();
  expect(typeof r).toBe('string');
}

export async function scriptRunning(config: TRedisConfig) {
  const client = await getRedisInstance(config);
  RedisClient.addScript('test_script', 'return 1');
  await client.loadScriptsAsync();
  const r = await client.runScriptAsync('test_script', [], []);
  expect(r).toBe(1);
}

export async function pubSub(config: TRedisConfig) {
  const subscribeClient = await getRedisInstance(config);
  const publishClient = await getRedisInstance(config);

  let received: { pattern: string; channel: string; message: string } | null =
    null;
  subscribeClient.psubscribe('chan*');
  subscribeClient.on(
    'pmessage',
    (pattern: string, channel: string, message: string) => {
      received = { pattern, channel, message };
    },
  );
  const r = await publishClient.publishAsync('chan1', 'msg1');
  expect(r).toBe(1);

  await delay(5000);
  expect(received).toEqual({
    pattern: 'chan*',
    channel: 'chan1',
    message: 'msg1',
  });
  await subscribeClient.punsubscribe('chan*');
}

export async function transactionRunning(config: TRedisConfig) {
  const client = await getRedisInstance(config);
  const multi = client.multi();
  // todo
}
