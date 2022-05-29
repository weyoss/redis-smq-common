import { RedisClientName } from '../../../types';
import { pubSub, scriptRunning, standardCommands } from '../../common';

test('IORedisClient', async () => {
  await standardCommands({ client: RedisClientName.IOREDIS });
  await scriptRunning({ client: RedisClientName.IOREDIS });
  await pubSub({ client: RedisClientName.IOREDIS });
});
