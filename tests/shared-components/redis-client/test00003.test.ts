import { RedisClientName } from '../../../types';
import {
  pubSub,
  scriptRunning,
  standardCommands,
  transactionRunning,
} from '../../common';

test('IORedisClient', async () => {
  await standardCommands({ client: RedisClientName.IOREDIS });
  await scriptRunning({ client: RedisClientName.IOREDIS });
  await pubSub({ client: RedisClientName.IOREDIS });
  await transactionRunning({ client: RedisClientName.IOREDIS });
});
