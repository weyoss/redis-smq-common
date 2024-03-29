/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { ILoggerConfig } from '../src/logger/index.js';
import { ERedisConfigClient, IRedisConfig } from '../src/redis-client/index.js';

const redisHost = process.env.REDIS_HOST || '127.0.0.1';
const redisPort = Number(process.env.REDIS_PORT) || 6379;

export const redisConfig: IRedisConfig = {
  client: ERedisConfigClient.IOREDIS,
  options: {
    host: redisHost,
    port: redisPort,
    showFriendlyErrorStack: true,
  },
};

export const loggerConfig: ILoggerConfig = {
  enabled: true,
};
