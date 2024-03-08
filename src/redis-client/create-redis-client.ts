/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { async } from '../async/index.js';
import { ICallback } from '../common/index.js';
import { IoredisClient, NodeRedisClient } from './clients/index.js';
import {
  ERedisConfigClient,
  IRedisClient,
  IRedisConfig,
} from './types/index.js';

function getClient(config: IRedisConfig) {
  if (config.client === ERedisConfigClient.REDIS) {
    return new NodeRedisClient(config.options);
  }
  return new IoredisClient(config.options);
}

export function createRedisClient(
  config: IRedisConfig,
  cb: ICallback<IRedisClient>,
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
