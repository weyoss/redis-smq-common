import { Pipeline, RedisOptions } from 'ioredis';
import { Callback, ClientOpts, Multi } from 'redis';
import * as Logger from 'bunyan';
import { RedisClientMultiCommandType } from '@redis/client/dist/lib/client/multi-command';
import {
  RedisClientOptions,
  RedisFunctions,
  RedisModules,
  RedisScripts,
} from '@redis/client';

export interface IORedisConfig {
  client: RedisClientName.IOREDIS;
  options?: RedisOptions;
}

export enum RedisClientName {
  REDIS = 'redis',
  IOREDIS = 'ioredis',
  REDIS_V4 = 'redis_v4',
}

export interface INodeRedisConfig {
  client: RedisClientName.REDIS;
  options?: ClientOpts;
}

export interface INodeRedisV4Config {
  client: RedisClientName.REDIS_V4;
  options?: RedisClientOptions;
}

export type TRedisConfig =
  | IORedisConfig
  | INodeRedisConfig
  | INodeRedisV4Config;

export type TNodeRedisV4Multi = RedisClientMultiCommandType<
  RedisModules,
  RedisFunctions,
  RedisScripts
>;

export type TRedisClientMulti = Multi | Pipeline | TNodeRedisV4Multi;

declare module 'redis' {
  export interface Commands<R> {
    // Overwrite bad declaration from @types/redis
    info(cb?: Callback<string>): R;
    info(section?: string | string[], cb?: Callback<string>): R;
    INFO(cb?: Callback<string>): R;
    INFO(section?: string | string[], cb?: Callback<string>): R;

    // Add missing method
    lmove(
      source: string,
      destination: string,
      from: 'LEFT' | 'RIGHT',
      to: 'LEFT' | 'RIGHT',
      cb: ICallback<string>,
    ): void;
  }
}

declare module 'ioredis' {
  export interface Commands {
    // Add missing method
    lmove(
      source: string,
      destination: string,
      from: 'LEFT' | 'RIGHT',
      to: 'LEFT' | 'RIGHT',
      cb: ICallback<string>,
    ): void;
  }
}

export interface ICallback<T> {
  (err?: Error | null, reply?: T | null): void;
  (err: null | undefined, reply: T): void;
}

export type TFunction<TReturn = void, TArgs = any> = (
  ...args: TArgs[]
) => TReturn;

export type TUnaryFunction<T, E = void> = (reply: T) => E;

export interface ICompatibleLogger {
  info(message: unknown, ...params: unknown[]): void;
  warn(message: unknown, ...params: unknown[]): void;
  error(message: unknown, ...params: unknown[]): void;
  debug(message: unknown, ...params: unknown[]): void;
}

export type TLoggerConfig = {
  enabled: boolean;
  options?: Partial<Logger.LoggerOptions>;
};
