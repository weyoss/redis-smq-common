/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

export interface IRedisConfigIORedis {
  /**
   * Specifies that this configuration is for the ioredis client.
   */
  client: ERedisConfigClient.IOREDIS;

  /**
   * Optional property to provide configuration options specific to the ioredis
   * client. Refer to the ioredis documentation for detailed options.
   *
   * @see https://github.com/luin/ioredis/blob/master/API.md#new_Redis
   */
  options?: Record<string, unknown>;
}

export enum ERedisConfigClient {
  // Represents the ioredis client.
  IOREDIS = 'ioredis',

  // Represents the @redis/client.
  REDIS = 'redis',
}

export interface IRedisConfigNodeRedis {
  /**
   * Specifies that this configuration is for the @redis/client.
   */
  client: ERedisConfigClient.REDIS;

  /**
   * Optional property to provide configuration options specific to the
   * @redis/client. Refer to the @redis/client
   * documentation for detailed options.
   *
   * @see https://github.com/redis/node-redis/blob/master/docs/client-configuration.md
   */
  options?: Record<string, unknown>;
}

export type IRedisConfig = IRedisConfigIORedis | IRedisConfigNodeRedis;
