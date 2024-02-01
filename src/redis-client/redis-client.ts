/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { EventEmitter } from 'events';
import { ELuaScriptName, LuaScript } from './lua-script';
import { ICallback, IRedisClient, IRedisTransaction } from '../../types';
import { RedisClientError } from './errors';
import { CallbackEmptyReplyError } from '../errors';
import { getEventBusInstance } from '../event';

const minimalSupportedVersion: [number, number, number] = [4, 0, 0];

export abstract class RedisClient extends EventEmitter implements IRedisClient {
  protected static redisServerVersion: number[] | null = null;
  protected connectionClosed = true;

  validateRedisVersion(major: number, feature = 0, minor = 0): boolean {
    if (!RedisClient.redisServerVersion) {
      getEventBusInstance().emit(
        'error',
        new RedisClientError('UNKNOWN_REDIS_SERVER_VERSION'),
      );
      return false;
    }
    return (
      RedisClient.redisServerVersion[0] > major ||
      (RedisClient.redisServerVersion[0] === major &&
        RedisClient.redisServerVersion[1] >= feature &&
        RedisClient.redisServerVersion[2] >= minor)
    );
  }

  validateRedisServerSupport(cb: ICallback<void>): void {
    const validate = (cb: ICallback<void>) => {
      const [major, feature, minor] = minimalSupportedVersion;
      if (!this.validateRedisVersion(major, feature, minor))
        cb(new RedisClientError('UNSUPPORTED_REDIS_SERVER_VERSION'));
      else cb();
    };
    if (!RedisClient.redisServerVersion) {
      this.updateServerVersion((err) => {
        if (err) cb(err);
        else validate(cb);
      });
    } else validate(cb);
  }

  abstract set(
    key: string,
    value: string,
    options: {
      expire?: { mode: 'EX' | 'PX'; value: number };
      exists?: 'NX' | 'XX';
    },
    cb: ICallback<string | null>,
  ): void;

  abstract zadd(
    key: string,
    score: number,
    member: string,
    cb: ICallback<number | string>,
  ): void;

  abstract multi(): IRedisTransaction;

  abstract watch(args: string[], cb: ICallback<string>): void;

  abstract unwatch(cb: ICallback<string>): void;

  abstract sismember(key: string, member: string, cb: ICallback<number>): void;

  abstract zcard(key: string, cb: ICallback<number>): void;

  abstract zrange(
    key: string,
    min: number,
    max: number,
    cb: ICallback<string[]>,
  ): void;

  abstract zrevrange(
    key: string,
    min: number,
    max: number,
    cb: ICallback<string[]>,
  ): void;

  abstract psubscribe(pattern: string): void;

  abstract punsubscribe(channel: string): void;

  abstract subscribe(channel: string): void;

  abstract unsubscribe(channel: string): void;

  abstract zrangebyscore(
    key: string,
    min: number | string,
    max: number | string,
    offset: number,
    count: number,
    cb: ICallback<string[]>,
  ): void;

  abstract smembers(key: string, cb: ICallback<string[]>): void;

  abstract sscan(
    key: string,
    cursor: string,
    options: { MATCH?: string; COUNT?: number },
    cb: ICallback<{ cursor: string; items: string[] }>,
  ): void;

  sscanAll(
    key: string,
    options: { MATCH?: string; COUNT?: number },
    cb: ICallback<string[]>,
  ): void {
    const result = new Set<string>();
    const iterate = (cursor: string) => {
      this.sscan(key, cursor, options, (err, reply) => {
        if (err) cb(err);
        else if (!reply) cb(new CallbackEmptyReplyError());
        else {
          reply.items.forEach((i) => result.add(i));
          if (reply.cursor === '0') cb(null, [...result]);
          else iterate(reply.cursor);
        }
      });
    };
    iterate('0');
  }

  abstract sadd(key: string, member: string, cb: ICallback<number>): void;

  abstract srem(key: string, member: string, cb: ICallback<number>): void;

  abstract hgetall(key: string, cb: ICallback<Record<string, string>>): void;

  abstract hscan(
    key: string,
    cursor: string,
    options: { MATCH?: string; COUNT?: number },
    cb: ICallback<{ cursor: string; result: Record<string, string> }>,
  ): void;

  hscanAll(
    key: string,
    options: { MATCH?: string; COUNT?: number },
    cb: ICallback<Record<string, string>>,
  ): void {
    const result: Record<string, string> = {};
    const iterate = (cursor: string) => {
      this.hscan(key, cursor, options, (err, reply) => {
        if (err) cb(err);
        else if (!reply) cb(new CallbackEmptyReplyError());
        else {
          Object.assign(result, reply.result);
          if (reply.cursor === '0') cb(null, result);
          else iterate(reply.cursor);
        }
      });
    };
    iterate('0');
  }

  abstract hget(key: string, field: string, cb: ICallback<string | null>): void;

  abstract hset(
    key: string,
    field: string,
    value: string | number,
    cb: ICallback<number>,
  ): void;

  abstract hdel(
    key: string,
    fields: string | string[],
    cb: ICallback<number>,
  ): void;

  abstract lrange(
    key: string,
    start: number,
    stop: number,
    cb: ICallback<string[]>,
  ): void;

  abstract hkeys(key: string, cb: ICallback<string[]>): void;

  abstract hlen(key: string, cb: ICallback<number>): void;

  abstract brpoplpush(
    source: string,
    destination: string,
    timeout: number,
    cb: ICallback<string | null>,
  ): void;

  abstract rpoplpush(
    source: string,
    destination: string,
    cb: ICallback<string | null>,
  ): void;

  zpoprpush(
    source: string,
    destination: string,
    cb: ICallback<string | null>,
  ): void {
    this.runScript(
      ELuaScriptName.ZPOPRPUSH,
      [source, destination],
      [],
      (err, res?: unknown) => {
        if (err) cb(err);
        else cb(null, typeof res === 'string' ? res : null);
      },
    );
  }

  abstract zscan(
    key: string,
    cursor: string,
    options: { MATCH?: string; COUNT?: number },
    cb: ICallback<{ cursor: string; items: string[] }>,
  ): void;

  lpoprpush(
    source: string,
    destination: string,
    cb: ICallback<string | null>,
  ): void {
    if (this.validateRedisVersion(6, 2)) {
      this.lmove(source, destination, 'LEFT', 'RIGHT', cb);
    } else {
      this.runScript(
        ELuaScriptName.LPOPRPUSH,
        [source, destination],
        [],
        (err, res?: unknown) => {
          if (err) cb(err);
          else cb(null, typeof res === 'string' ? res : null);
        },
      );
    }
  }

  abstract zrangebyscorewithscores(
    source: string,
    min: number,
    max: number,
    cb: ICallback<Record<string, string>>,
  ): void;

  abstract zrem(source: string, id: string, cb: ICallback<number>): void;

  abstract rpop(key: string, cb: ICallback<string | null>): void;

  abstract lrem(
    key: string,
    count: number,
    element: string,
    cb: ICallback<number>,
  ): void;

  abstract publish(
    channel: string,
    message: string,
    cb: ICallback<number>,
  ): void;

  abstract flushall(cb: ICallback<string>): void;

  abstract loadScript(script: string, cb: ICallback<string>): void;

  abstract evalsha(
    hash: string,
    args: (string | number)[] | string | number,
    cb: (err?: Error | null, res?: unknown) => void,
  ): void;

  abstract get(key: string, cb: ICallback<string | null>): void;

  abstract del(key: string | string[], cb: ICallback<number>): void;

  abstract llen(key: string, cb: ICallback<number>): void;

  abstract lmove(
    source: string,
    destination: string,
    from: 'LEFT' | 'RIGHT',
    to: 'LEFT' | 'RIGHT',
    cb: ICallback<string | null>,
  ): void;

  abstract zremrangebyscore(
    source: string,
    min: number | string,
    max: number | string,
    cb: ICallback<number>,
  ): void;

  abstract hmget(
    source: string,
    keys: string[],
    cb: ICallback<(string | null)[]>,
  ): void;

  abstract halt(cb: ICallback<void>): void;

  abstract end(flush: boolean): void;

  abstract quit(cb: ICallback<void>): void;

  abstract getInfo(cb: ICallback<string>): void;

  updateServerVersion(cb: ICallback<void>): void {
    if (!RedisClient.redisServerVersion) {
      this.getInfo((err, res) => {
        if (err) cb(err);
        else if (!res) cb(new CallbackEmptyReplyError());
        else {
          RedisClient.redisServerVersion = res
            .split('\r\n')[1]
            .split(':')[1]
            .split('.')
            .map((i) => Number(i));
          cb();
        }
      });
    } else cb();
  }

  loadScripts(cb: ICallback<void>): void {
    LuaScript.getInstance().loadScripts(this, cb);
  }

  runScript(
    scriptName: string,
    keys: (string | number)[],
    args: (string | number)[],
    cb: ICallback<unknown>,
  ): void {
    const sha = LuaScript.getInstance().getScriptId(scriptName);
    if (sha instanceof Error) cb(sha);
    else {
      this.evalsha(
        sha,
        [keys.length, ...keys, ...args],
        (err, res?: unknown) => {
          if (err) cb(err);
          else cb(null, res);
        },
      );
    }
  }

  static addScript(name: string, content: string): void {
    if (!LuaScript.getInstance().addScript(name, content)) {
      throw new RedisClientError(`A script with name [${name}] already exists`);
    }
  }
}
