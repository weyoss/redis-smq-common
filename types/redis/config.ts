/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { RedisOptions } from 'ioredis';
import { ClientOpts } from 'redis';
import { RedisClientOptions } from '@redis/client';

export interface IRedisConfigIORedis {
  client: ERedisConfigClient.IOREDIS;
  options?: RedisOptions;
}

export enum ERedisConfigClient {
  REDIS = 'redis',
  IOREDIS = 'ioredis',
  REDIS_V4 = 'redis_v4',
}

export interface IRedisConfigNodeRedis {
  client: ERedisConfigClient.REDIS;
  options?: ClientOpts;
}

export interface IRedisConfigNodeRedisV4 {
  client: ERedisConfigClient.REDIS_V4;
  options?: RedisClientOptions;
}

export type IRedisConfig =
  | IRedisConfigIORedis
  | IRedisConfigNodeRedis
  | IRedisConfigNodeRedisV4;
