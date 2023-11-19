/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { RedisClient } from '../redis-client';
import { EventEmitter } from 'events';
import { ICallback } from '../../../types';
import { ClientOpts, createClient, RedisClient as NodeRedis } from 'redis';
import { RedisClientError } from '../errors';
import { NodeRedisV3ClientMulti } from './node-redis-v3-client-multi';
import { CallbackEmptyReplyError } from '../../errors';

/**
 * client.end() does unregister all event listeners which causes the 'end' event not being emitted.
 * This is a known bug. See https://github.com/redis/node-redis/issues/1565
 *
 * Monkey patching the "end" method to fix the issue. The only small change is:
 *
 * this.stream.once('close', () => {
 *  this.emit('end');
 *  this.emitted_end = true;
 * });
 *
 * which has been added after this.stream.removeAllListeners().
 * That's all.
 */
const patchedEnd = function (
  this: EventEmitter & {
    stream: EventEmitter & { destroySoon: () => void };
    flush_and_error: (...args: unknown[]) => void;
    warn: (...args: unknown[]) => void;
    connected: boolean;
    emitted_end: boolean;
    ready: boolean;
    closing: boolean;
    retry_timer: NodeJS.Timeout | null;
  },
  flush: boolean,
) {
  // Flush queue if wanted
  if (flush) {
    this.flush_and_error({
      message: 'Connection forcefully ended and command aborted.',
      code: 'NR_CLOSED',
    });
  } else if (arguments.length === 0) {
    this.warn(
      'Using .end() without the flush parameter is deprecated and throws from v.3.0.0 on.\n' +
        'Please check the doku (https://github.com/NodeRedis/node_redis) and explictly use flush.',
    );
  }
  // Clear retry_timer
  if (this.retry_timer) {
    clearTimeout(this.retry_timer);
    this.retry_timer = null;
  }
  this.stream.removeAllListeners();
  this.stream.once('close', () => {
    this.emit('end');
    this.emitted_end = true;
  });
  this.stream.on('error', () => void 0);
  this.connected = false;
  this.ready = false;
  this.closing = true;
  return this.stream.destroySoon();
};

export class NodeRedisV3Client extends RedisClient {
  protected client: NodeRedis;

  constructor(config: ClientOpts = {}) {
    super();
    this.client = createClient(config);
    this.client.once('ready', () => {
      this.connectionClosed = false;
      this.emit('ready');
    });
    this.client.once('end', () => {
      this.connectionClosed = true;
      this.emit('end');
    });
    this.client.end = patchedEnd;
  }

  set(
    key: string,
    value: string,
    options: {
      expire?: { mode: 'EX' | 'PX'; value: number };
      exists?: 'NX' | 'XX';
    },
    cb: ICallback<string | null>,
  ): void {
    if (options.exists && options.expire) {
      this.client.set(
        key,
        value,
        options.expire.mode,
        options.expire.value,
        options.exists,
        cb,
      );
    } else if (options.expire) {
      this.client.set(
        key,
        value,
        options.expire.mode,
        options.expire.value,
        cb,
      );
    } else if (options.exists) {
      this.client.set(key, value, options.exists, cb);
    } else {
      this.client.set(key, value, cb);
    }
  }

  zadd(
    key: string,
    score: number,
    member: string,
    cb: ICallback<number | string>,
  ): void {
    this.client.zadd(key, score, member, cb);
  }

  multi(): NodeRedisV3ClientMulti {
    return new NodeRedisV3ClientMulti(this.client);
  }

  watch(args: string[], cb: ICallback<string>): void {
    this.client.watch(args, cb);
  }

  unwatch(cb: ICallback<string>): void {
    this.client.unwatch(cb);
  }

  sismember(key: string, member: string, cb: ICallback<number>): void {
    this.client.sismember(key, member, cb);
  }

  override sscan(
    key: string,
    cursor: string,
    options: { MATCH?: string; COUNT?: number },
    cb: ICallback<{ cursor: string; items: string[] }>,
  ): void {
    const args: string[] = [key, cursor];
    if (options.MATCH) args.push('MATCH', options.MATCH);
    if (options.COUNT) args.push('COUNT', String(options.COUNT));
    this.client.sscan(...args, (err, [cursor, items]) => {
      if (err) cb(err);
      else cb(null, { cursor, items });
    });
  }

  override zscan(
    key: string,
    cursor: string,
    options: { MATCH?: string; COUNT?: number },
    cb: ICallback<{ cursor: string; items: string[] }>,
  ): void {
    const args: [string, string] = [key, cursor];
    if (options.MATCH) args.push('MATCH', options.MATCH);
    if (options.COUNT) args.push('COUNT', String(options.COUNT));
    this.client.zscan(...args, (err, reply) => {
      if (err) cb(err);
      else if (!reply) cb(new CallbackEmptyReplyError());
      else {
        const result = new Set<string>();
        const [cursor, items] = reply;
        while (items.length) {
          const item = String(items.shift());
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const score = String(items.shift());
          result.add(item);
        }
        cb(null, { cursor, items: [...result] });
      }
    });
  }

  zcard(key: string, cb: ICallback<number>): void {
    this.client.zcard(key, cb);
  }

  zrange(key: string, min: number, max: number, cb: ICallback<string[]>): void {
    this.client.zrange(key, min, max, cb);
  }

  zrevrange(
    key: string,
    min: number,
    max: number,
    cb: ICallback<string[]>,
  ): void {
    this.client.zrevrange(key, min, max, cb);
  }

  psubscribe(pattern: string): void {
    this.client.psubscribe(pattern);
  }

  punsubscribe(channel: string): void {
    this.client.punsubscribe(channel);
  }

  subscribe(channel: string): void {
    this.client.subscribe(channel);
  }

  unsubscribe(channel: string): void {
    this.client.unsubscribe(channel);
  }

  zrangebyscore(
    key: string,
    min: number | string,
    max: number | string,
    offset: number,
    count: number,
    cb: ICallback<string[]>,
  ): void {
    this.client.zrangebyscore(key, min, max, 'LIMIT', offset, count, cb);
  }

  zrem(source: string, id: string, cb: ICallback<number>): void {
    this.client.zrem(source, id, cb);
  }

  smembers(key: string, cb: ICallback<string[]>): void {
    this.client.smembers(key, cb);
  }

  sadd(key: string, member: string, cb: ICallback<number>): void {
    this.client.sadd(key, member, cb);
  }

  srem(key: string, member: string, cb: ICallback<number>): void {
    this.client.srem(key, member, cb);
  }

  hgetall(key: string, cb: ICallback<Record<string, string>>): void {
    this.client.hgetall(key, (err, reply) => {
      if (err) cb(err);
      else cb(null, reply ?? {});
    });
  }

  override hscan(
    key: string,
    cursor: string,
    options: { MATCH?: string; COUNT?: number },
    cb: ICallback<{ cursor: string; result: Record<string, string> }>,
  ): void {
    const args: [string, string] = [key, cursor];
    if (options.MATCH) args.push('MATCH', options.MATCH);
    if (options.COUNT) args.push('COUNT', String(options.COUNT));
    this.client.hscan(...args, (err, [cursor, items]) => {
      if (err) cb(err);
      else {
        const result: Record<string, string> = {};
        while (items.length) {
          const key = String(items.shift());
          result[key] = String(items.shift());
        }
        cb(null, { cursor, result });
      }
    });
  }

  hget(key: string, field: string, cb: ICallback<string | null>): void {
    this.client.hget(key, field, cb);
  }

  hset(
    key: string,
    field: string,
    value: string | number,
    cb: ICallback<number>,
  ): void {
    this.client.hset(key, field, String(value), cb);
  }

  hdel(key: string, fields: string | string[], cb: ICallback<number>): void {
    this.client.hdel(
      key,
      ...(typeof fields === 'string' ? [fields] : fields),
      cb,
    );
  }

  lrange(
    key: string,
    start: number,
    stop: number,
    cb: ICallback<string[]>,
  ): void {
    this.client.lrange(key, start, stop, cb);
  }

  hkeys(key: string, cb: ICallback<string[]>): void {
    this.client.hkeys(key, cb);
  }

  hlen(key: string, cb: ICallback<number>): void {
    this.client.hlen(key, cb);
  }

  brpoplpush(
    source: string,
    destination: string,
    timeout: number,
    cb: ICallback<string | null>,
  ): void {
    this.client.brpoplpush(source, destination, timeout, cb);
  }

  rpoplpush(
    source: string,
    destination: string,
    cb: ICallback<string | null>,
  ): void {
    this.client.rpoplpush(source, destination, cb);
  }

  zrangebyscorewithscores(
    source: string,
    min: number,
    max: number,
    cb: ICallback<Record<string, string>>,
  ): void {
    this.client.zrangebyscore(source, min, max, 'WITHSCORES', (err, reply) => {
      if (err) cb(err);
      else {
        const replyRange = reply ?? [];
        const range: Record<string, string> = {};
        for (
          let slice = replyRange.splice(0, 2);
          slice.length > 0;
          slice = replyRange.splice(0, 2)
        ) {
          const [member, score] = slice;
          range[score] = member;
        }
        cb(null, range);
      }
    });
  }

  rpop(key: string, cb: ICallback<string | null>): void {
    this.client.rpop(key, cb);
  }

  lrem(
    key: string,
    count: number,
    element: string,
    cb: ICallback<number>,
  ): void {
    this.client.lrem(key, count, element, cb);
  }

  publish(channel: string, message: string, cb: ICallback<number>): void {
    this.client.publish(channel, message, cb);
  }

  flushall(cb: ICallback<string>): void {
    this.client.flushall(cb);
  }

  loadScript(script: string, cb: ICallback<string>): void {
    // type-coverage:ignore-next-line
    this.client.script('load', script, cb);
  }

  evalsha(
    hash: string,
    args: (string | number)[] | string | number,
    cb: (err?: Error | null, res?: unknown) => void,
  ): void {
    const arrHash: (string | number)[] = [hash];
    const arrArgs = Array.isArray(args) ? args : [args];
    // type-coverage:ignore-next-line
    this.client.evalsha(arrHash.concat(arrArgs), (err, reply) =>
      cb(err, reply),
    );
  }

  get(key: string, cb: ICallback<string | null>): void {
    this.client.get(key, cb);
  }

  del(key: string | string[], cb: ICallback<number>): void {
    this.client.del(...(typeof key === 'string' ? [key] : key), cb);
  }

  llen(key: string, cb: ICallback<number>): void {
    this.client.llen(key, cb);
  }

  lmove(
    source: string,
    destination: string,
    from: 'LEFT' | 'RIGHT',
    to: 'LEFT' | 'RIGHT',
    cb: ICallback<string | null>,
  ): void {
    if (!this.validateRedisVersion(6, 2)) {
      cb(
        new RedisClientError(
          'Command not supported by your Redis server. Minimal required Redis server version is 6.2.0.',
        ),
      );
    } else {
      this.client.lmove(source, destination, from, to, cb);
    }
  }

  zremrangebyscore(
    source: string,
    min: number | string,
    max: number | string,
    cb: ICallback<number>,
  ): void {
    this.client.zremrangebyscore(source, min, max, cb);
  }

  hmget(
    source: string,
    keys: string[],
    cb: ICallback<(string | null)[]>,
  ): void {
    this.client.hmget(source, keys, cb);
  }

  halt(cb: ICallback<void>): void {
    if (!this.connectionClosed) {
      this.client.once('end', cb);
      this.end(true);
    } else cb();
  }

  end(flush: boolean): void {
    if (!this.connectionClosed) {
      this.client.end(flush);
    }
  }

  quit(cb: ICallback<void> = () => void 0): void {
    if (!this.connectionClosed) {
      this.client.once('end', cb);
      this.client.quit();
    } else cb();
  }

  getInfo(cb: ICallback<string>): void {
    this.client.info(cb);
  }

  override on(event: string, listener: (...args: unknown[]) => unknown): this {
    this.client.on(event, listener);
    return this;
  }
}
