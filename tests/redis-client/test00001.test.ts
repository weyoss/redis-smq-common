import { RedisClientName } from '../../types';
import {
  pubSubChannel,
  pubSubPattern,
  scriptRunning,
  standardCommands,
  transactionRunning,
} from './common';

test('NodeRedisV4Client', async () => {
  await standardCommands({ client: RedisClientName.REDIS_V4 });
  await scriptRunning({ client: RedisClientName.REDIS_V4 });
  await pubSubChannel({ client: RedisClientName.REDIS_V4 });
  await pubSubPattern({ client: RedisClientName.REDIS_V4 });
  await transactionRunning({ client: RedisClientName.REDIS_V4 });
});
