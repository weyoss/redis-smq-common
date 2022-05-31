import { RedisClientName } from '../../types';
import {
  pubSubChannel,
  pubSubPattern,
  scriptRunning,
  standardCommands,
  transactionRunning,
} from './common';

test('IORedisClient', async () => {
  await standardCommands({ client: RedisClientName.IOREDIS });
  await scriptRunning({ client: RedisClientName.IOREDIS });
  await pubSubChannel({ client: RedisClientName.IOREDIS });
  await pubSubPattern({ client: RedisClientName.IOREDIS });
  await transactionRunning({ client: RedisClientName.IOREDIS });
});
