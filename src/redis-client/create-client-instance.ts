import { ICallback, RedisClientName, TRedisConfig } from '../../types';
import { async } from '../async/async';
import { RedisClient } from './redis-client';
import { NodeRedisV3Client } from './clients/node-redis-v3-client';
import { IoredisClient } from './clients/ioredis-client';
import { NodeRedisV4Client } from './clients/node-redis-v4-client';

function getClient(config: TRedisConfig) {
  if (config.client === RedisClientName.REDIS) {
    return new NodeRedisV3Client(config.options);
  }
  if (config.client === RedisClientName.REDIS_V4) {
    return new NodeRedisV4Client(config.options);
  }
  return new IoredisClient(config.options);
}

export function createClientInstance(
  config: TRedisConfig,
  cb: ICallback<RedisClient>,
): void {
  const client = getClient(config);
  client.once('ready', () => {
    async.waterfall(
      [
        (cb: ICallback<void>) => client.updateServerVersion(cb),
        (cb: ICallback<void>) => client.loadScripts(cb),
      ],
      (err) => {
        if (err) throw err;
        else cb(null, client);
      },
    );
  });
}
