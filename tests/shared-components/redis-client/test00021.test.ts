import { delay } from 'bluebird';
import { getRedisInstance } from '../../common';

test("RedisClient: create/terminate an instance that uses 'redis' client", async () => {
  const client = await getRedisInstance();
  await client.quitAsync();

  // should not return an error
  await client.quitAsync();

  const client2 = await getRedisInstance();
  await client2.end(true);
  await delay(3000);

  // should not return an error
  await client2.end(true);
});
