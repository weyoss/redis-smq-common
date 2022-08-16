import { TRedisConfig } from '../../types';
import { RedisClient } from '../../src/redis-client/redis-client';
import { delay, promisifyAll } from 'bluebird';
import { getRedisInstance } from '../common';

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

  r = await client.sismemberAsync('key5', 'value');
  expect(r).toEqual(1);

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

  r = await client.lpoprpushAsync('key7', 'key8');
  expect(r).toEqual(null);

  r = await client.lremAsync('key7', 1, 'value');
  expect(r).toEqual(0);

  r = await client.watchAsync(['key7']);
  expect(r).toEqual('OK');

  r = await client.zpophgetrpushAsync('key9', 'key10', 'key11');
  expect(r).toEqual(null);

  r = await client.lpoprpushextraAsync('key12', 'key13', 100, 10000);
  expect(r).toEqual(null);

  r = await client.unwatchAsync();
  expect(r).toEqual('OK');

  r = await client.getInfoAsync();
  expect(typeof r).toBe('string');

  r = await client.flushallAsync();
  expect(typeof r).toBe('string');

  const members: number[] = [];
  for (let i = 0; i < 1000; i += 1) {
    await client.saddAsync('key14', `${i}`);
    members.push(i);
  }
  const m = await client.sscanFallbackAsync('key14');
  expect(m.map((i) => Number(i)).sort((a, b) => a - b)).toEqual(members);

  if (client.validateRedisVersion(2, 8)) {
    const m2 = await client.sscanAsync('key14', { MATCH: '9*', COUNT: 10 });
    expect(m2.map((i) => Number(i)).sort((a, b) => a - b)).toEqual(
      members.filter((i) => String(i).indexOf('9') === 0).sort((a, b) => a - b),
    );
  }

  await client.quitAsync(); // does exec quit command
  await client.quitAsync(); // does not exec quit
}

export async function scriptRunning(config: TRedisConfig) {
  const client = await getRedisInstance(config);
  RedisClient.addScript('test_script', 'return 1');
  await client.loadScriptsAsync();
  const r = await client.runScriptAsync('test_script', [], []);
  expect(r).toBe(1);
}

export async function pubSubPattern(config: TRedisConfig) {
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
  await delay(5000);
  const r = await publishClient.publishAsync('chan1', 'msg1');
  expect(r).toBe(1);

  for (; true; ) {
    if (received) break;
    await delay(1000);
  }
  expect(received).toEqual({
    pattern: 'chan*',
    channel: 'chan1',
    message: 'msg1',
  });
  subscribeClient.punsubscribe('chan*');
}

export async function pubSubChannel(config: TRedisConfig) {
  const subscribeClient = await getRedisInstance(config);
  const publishClient = await getRedisInstance(config);

  let received: { channel: string; message: string } | null = null;
  subscribeClient.subscribe('chan1');
  subscribeClient.on('message', (channel: string, message: string) => {
    received = { channel, message };
  });
  await delay(5000);
  const r = await publishClient.publishAsync('chan1', 'msg1');
  expect(r).toBe(1);

  for (; true; ) {
    if (received) break;
    await delay(1000);
  }
  expect(received).toEqual({
    channel: 'chan1',
    message: 'msg1',
  });
  subscribeClient.unsubscribe('chan1');
}

export async function transactionRunning(config: TRedisConfig) {
  const client = await getRedisInstance(config);
  const multi = promisifyAll(client.multi());
  multi.del('k1');
  multi.hdel('k2', 'f1');
  multi.hset('k3', 'f1', 'v1');
  multi.sadd('k4', 'v1');
  multi.hset('k5', 'f1', 'v1');
  multi.rpoplpush('k6', 'k7');
  multi.pexpire('k8', 5000);
  multi.srem('k9', 'v1');
  multi.zrem('k10', 'v1');
  multi.zadd('k11', 1, 'v1');
  multi.rpush('k12', 'v1');
  multi.rpop('k13');
  multi.lpush('k14', 'v1');
  multi.lpop('k15');
  multi.lrem('k16', 1, 'v1');
  multi.ltrim('k17', 0, 10);
  multi.expire('k18', 3);
  multi.hincrby('k19', 'f1', 10);
  const r = await multi.execAsync();
  expect(Array.isArray(r)).toBe(true);
  expect((r ?? []).length).toEqual(18);
}
