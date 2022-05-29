import { RedisClientName } from '../../../types';
import { pubSub, scriptRunning, standardCommands } from '../../common';

test('NodeRedisClient', async () => {
  await standardCommands({ client: RedisClientName.REDIS });
  await scriptRunning({ client: RedisClientName.REDIS });
  await pubSub({ client: RedisClientName.REDIS });
});
