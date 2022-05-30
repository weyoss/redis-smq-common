import { RedisClientName } from '../../../types';
import {
  pubSub,
  scriptRunning,
  standardCommands,
  transactionRunning,
} from '../../common';

test('NodeRedisV4Client', async () => {
  await standardCommands({ client: RedisClientName.REDIS_V4 });
  await scriptRunning({ client: RedisClientName.REDIS_V4 });
  await pubSub({ client: RedisClientName.REDIS_V4 });
  await transactionRunning({ client: RedisClientName.REDIS_V4 });
});
