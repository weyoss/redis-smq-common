import { KeyType, Pipeline, Redis, RedisOptions } from 'ioredis';
import { Callback, ClientOpts, Multi, RedisClient as NodeRedis } from 'redis';
import { Worker } from '../src/worker/worker';
import { RedisClient } from '../src/redis-client/redis-client';
import * as Logger from 'bunyan';

export interface IORedisConfig {
  client: RedisClientName.IOREDIS;
  options?: RedisOptions;
}

export enum RedisClientName {
  REDIS = 'redis',
  IOREDIS = 'ioredis',
}

export interface INodeRedisConfig {
  client: RedisClientName.REDIS;
  options?: ClientOpts;
}

export type TRedisConfig = IORedisConfig | INodeRedisConfig;

///////////

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

export type TCompatibleRedisClient = (NodeRedis | Redis) & {
  zadd(
    key: string,
    score: number,
    member: string,
    cb: ICallback<number | string>,
  ): void;
  zrange(key: string, min: number, max: number, cb: ICallback<string[]>): void;
  zrevrange(
    key: string,
    min: number,
    max: number,
    cb: ICallback<string[]>,
  ): void;
  subscribe(channel: string): void;
  zrangebyscore(
    key: string,
    min: number | string,
    max: number | string,
    cb: ICallback<string[]>,
  ): void;
  zrangebyscore(
    key: KeyType,
    min: number | string,
    max: number | string,
    withScores: 'WITHSCORES',
    cb: ICallback<string[]>,
  ): void;
  smembers(key: string, cb: ICallback<string[]>): void;
  sadd(key: string, member: string, cb: ICallback<number>): void;
  hset(key: string, field: string, value: string, cb: ICallback<number>): void;
  hdel(key: string, fields: string | string[], cb: ICallback<number>): void;
  hmset(key: string, args: (string | number)[], cb: ICallback<string>): void;
  lpush(key: string, element: string, cb: ICallback<number>): void;
  rpush(key: string, element: string, cb: ICallback<number>): void;
  script(arg1: string, arg2: string, cb: ICallback<string>): void;
  eval: TFunction;
  evalsha: TFunction;
  watch(args: string[], cb: ICallback<string>): void;
  set(key: string, value: string, cb: ICallback<string>): void;
  set(key: string, value: string, flag: string, cb: ICallback<string>): void;
  set(
    key: string,
    value: string,
    mode: string,
    duration: number,
    cb: ICallback<string>,
  ): void;
  set(
    key: string,
    value: string,
    mode: string,
    duration: number,
    flag: string,
    cb: ICallback<string>,
  ): void;
  del(key: string | string[], cb: ICallback<number>): void;
  zrem(key: string, value: string | string[], cb: ICallback<number>): void;
  hmget(source: string, keys: string[], cb: ICallback<(string | null)[]>): void;
  exists(key: string, cb: ICallback<number>): void;
};

export type TRedisClientMulti = (Multi | Pipeline) & {
  hmset(key: string, args: (string | number)[]): void;
};

export type TWorkerParameters = {
  timeout?: number;
};

export type TWorkerClassConstructor<T extends TWorkerParameters> = {
  new (redisClient: RedisClient, params: T, managed: boolean): Worker<T>;
};

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
