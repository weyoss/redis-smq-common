/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { ERedisConfigClient, ICallback, IRedisConfig } from '../../types';
import { NodeRedisV3Client } from './clients/node-redis-v3-client';
import { NodeRedisV4Client } from './clients/node-redis-v4-client';
import { IoredisClient } from './clients/ioredis-client';
import { RedisClient } from './redis-client';
import { async } from '../async/async';

function getClient(config: IRedisConfig) {
  if (config.client === ERedisConfigClient.REDIS) {
    return new NodeRedisV3Client(config.options);
  }
  if (config.client === ERedisConfigClient.REDIS_V4) {
    return new NodeRedisV4Client(config.options);
  }
  return new IoredisClient(config.options);
}

function createInstance(
  config: IRedisConfig,
  cb: ICallback<RedisClient>,
): void {
  const client = getClient(config);
  client.once('ready', () => {
    async.waterfall(
      [
        (cb: ICallback<void>) => client.validateRedisServerSupport(cb),
        (cb: ICallback<void>) => client.loadScripts(cb),
      ],
      (err) => {
        if (err) throw err;
        else cb(null, client);
      },
    );
  });
}

export const redis = {
  createInstance,
};
