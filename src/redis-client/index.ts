/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import {
  ERedisConfigClient,
  ICallback,
  IRedisConfig,
} from '../../types/index.js';
import { async } from '../async/async.js';
import { IoredisClient } from './clients/ioredis-client.js';
import { NodeRedisClient } from './clients/node-redis-client.js';
import { RedisClient } from './redis-client.js';

function getClient(config: IRedisConfig) {
  if (config.client === ERedisConfigClient.REDIS) {
    return new NodeRedisClient(config.options);
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
        if (err) cb(err);
        else cb(null, client);
      },
    );
  });
}

export const redis = {
  createInstance,
};
