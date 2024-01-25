/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { RedisOptions } from 'ioredis';
import { RedisClientOptions } from '@redis/client';

export interface IRedisConfigIORedis {
  client: ERedisConfigClient.IOREDIS;
  options?: RedisOptions;
}

export enum ERedisConfigClient {
  IOREDIS = 'ioredis',
  REDIS = 'redis',
}

export interface IRedisConfigNodeRedis {
  client: ERedisConfigClient.REDIS;
  options?: RedisClientOptions;
}

export type IRedisConfig = IRedisConfigIORedis | IRedisConfigNodeRedis;
