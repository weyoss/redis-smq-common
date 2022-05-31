import { RedisClientName } from '../../types';
import {
  pubSubChannel,
  pubSubPattern,
  scriptRunning,
  standardCommands,
  transactionRunning,
} from './common';

test('NodeRedisClient', async () => {
  await standardCommands({ client: RedisClientName.REDIS });
  await scriptRunning({ client: RedisClientName.REDIS });
  await pubSubChannel({ client: RedisClientName.REDIS });
  await pubSubPattern({ client: RedisClientName.REDIS });
  await transactionRunning({ client: RedisClientName.REDIS });
});
