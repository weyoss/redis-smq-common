import { RedisClient } from '../redis-client';
import { ICallback } from '../../../types';
import { RedisClientError } from '../errors/redis-client.error';
import { createClient, RedisClientOptions } from '@redis/client';
import { NodeRedisV4ClientMulti } from './node-redis-v4-client-multi';

export class NodeRedisV4Client extends RedisClient {
  protected client;

  constructor(config: RedisClientOptions = {}) {
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
    this.client.connect();
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
    this.client
      .set(key, value, {
        ...(options.expire
          ? { [options.expire.mode]: options.expire.value }
          : {}),
        ...(options.exists ? { [options.exists]: true } : {}),
      })
      .then((reply) => cb(null, reply))
      .catch(cb);
  }

  zadd(
    key: string,
    score: number,
    member: string,
    cb: ICallback<number | string>,
  ): void {
    this.client
      .zAdd(key, { score, value: member })
      .then((reply) => cb(null, reply))
      .catch(cb);
  }

  multi(): NodeRedisV4ClientMulti {
    return new NodeRedisV4ClientMulti(this.client);
  }

  watch(args: string[], cb: ICallback<string>): void {
    this.client
      .watch(args)
      .then((reply) => cb(null, reply))
      .catch(cb);
  }

  unwatch(cb: ICallback<string>): void {
    this.client
      .unwatch()
      .then((reply) => cb(null, reply))
      .catch(cb);
  }

  sismember(key: string, member: string, cb: ICallback<number>): void {
    this.client
      .sIsMember(key, member)
      .then((reply) => cb(null, Number(reply)))
      .catch(cb);
  }

  zcard(key: string, cb: ICallback<number>): void {
    this.client
      .zCard(key)
      .then((reply) => cb(null, reply))
      .catch(cb);
  }

  zrange(key: string, min: number, max: number, cb: ICallback<string[]>): void {
    this.client
      .zRange(key, min, max)
      .then((reply) =>
        cb(
          null,
          (Array.isArray(reply) ? reply : []).map((i) => String(i)),
        ),
      )
      .catch(cb);
  }

  psubscribe(pattern: string): void {
    this.client.pSubscribe(pattern, (message, channel) => {
      this.client.emit('pmessage', pattern, channel, message);
    });
  }

  punsubscribe(channel: string): void {
    this.client.pUnsubscribe(channel).catch(() => void 0);
  }

  subscribe(channel: string): void {
    this.client.subscribe(channel, (message, channel) => {
      this.client.emit('message', channel, message);
    });
  }

  unsubscribe(channel: string): void {
    this.client.unsubscribe(channel).catch(() => void 0);
  }

  zrangebyscore(
    key: string,
    min: number | string,
    max: number | string,
    offset: number,
    count: number,
    cb: ICallback<string[]>,
  ): void {
    this.client
      .zRangeByScore(key, min, max, {
        LIMIT: {
          offset,
          count,
        },
      })
      .then((reply) => cb(null, reply))
      .catch(cb);
  }

  smembers(key: string, cb: ICallback<string[]>): void {
    this.client
      .sMembers(key)
      .then((reply) => cb(null, reply))
      .catch(cb);
  }

  sscan(
    key: string,
    options: { MATCH?: string; COUNT?: number },
    cb: ICallback<string[]>,
  ): void {
    const result = new Set<string>();
    const iterate = (position: number) => {
      const args: [string, number, { MATCH?: string; COUNT?: number }] = [
        key,
        position,
        options,
      ];
      this.client
        .sScan(...args)
        .then(({ cursor, members }) => {
          members.forEach((i) => result.add(i));
          if (cursor === 0) cb(null, [...result]);
          else iterate(cursor);
        })
        .catch(cb);
    };
    iterate(0);
  }

  sadd(key: string, member: string, cb: ICallback<number>): void {
    this.client
      .sAdd(key, member)
      .then((reply) => cb(null, reply))
      .catch(cb);
  }

  srem(key: string, member: string, cb: ICallback<number>): void {
    this.client
      .sRem(key, member)
      .then((reply) => cb(null, reply))
      .catch(cb);
  }

  hgetall(key: string, cb: ICallback<Record<string, string>>): void {
    this.client
      .hGetAll(key)
      .then((reply) => cb(null, reply))
      .catch(cb);
  }

  hget(key: string, field: string, cb: ICallback<string | null>): void {
    this.client
      .hGet(key, field)
      .then((reply) => cb(null, reply ?? null))
      .catch(cb);
  }

  hset(key: string, field: string, value: string, cb: ICallback<number>): void {
    this.client
      .hSet(key, field, value)
      .then((reply) => cb(null, reply))
      .catch(cb);
  }

  hdel(key: string, fields: string | string[], cb: ICallback<number>): void {
    this.client
      .hDel(key, fields)
      .then((reply) => cb(null, Number(reply)))
      .catch(cb);
  }

  lrange(
    key: string,
    start: number,
    stop: number,
    cb: ICallback<string[]>,
  ): void {
    this.client
      .lRange(key, start, stop)
      .then((reply) => cb(null, reply))
      .catch(cb);
  }

  hkeys(key: string, cb: ICallback<string[]>): void {
    this.client
      .hKeys(key)
      .then((reply) => cb(null, reply))
      .catch(cb);
  }

  hlen(key: string, cb: ICallback<number>): void {
    this.client
      .hLen(key)
      .then((reply) => cb(null, reply))
      .catch(cb);
  }

  brpoplpush(
    source: string,
    destination: string,
    timeout: number,
    cb: ICallback<string | null>,
  ): void {
    this.client
      .brPopLPush(source, destination, timeout)
      .then((reply) => cb(null, reply))
      .catch(cb);
  }

  rpoplpush(
    source: string,
    destination: string,
    cb: ICallback<string | null>,
  ): void {
    this.client
      .rPopLPush(source, destination)
      .then((reply) => cb(null, reply))
      .catch(cb);
  }

  zrangebyscorewithscores(
    source: string,
    min: number,
    max: number,
    cb: ICallback<Record<string, string>>,
  ): void {
    this.client
      .zRangeByScoreWithScores(source, min, max)
      .then((reply) => {
        const range: Record<string, string> = {};
        for (const { score, value } of reply) {
          range[score] = value;
        }
        cb(null, range);
      })
      .catch(cb);
  }

  rpop(key: string, cb: ICallback<string | null>): void {
    this.client
      .rPop(key)
      .then((reply) => cb(null, reply))
      .catch(cb);
  }

  lrem(
    key: string,
    count: number,
    element: string,
    cb: ICallback<number>,
  ): void {
    this.client
      .lRem(key, count, element)
      .then((reply) => cb(null, reply))
      .catch(cb);
  }

  publish(channel: string, message: string, cb: ICallback<number>): void {
    this.client
      .publish(channel, message)
      .then((reply) => cb(null, reply))
      .catch(cb);
  }

  flushall(cb: ICallback<string>): void {
    this.client
      .flushAll()
      .then((reply) => cb(null, reply))
      .catch(cb);
  }

  loadScript(script: string, cb: ICallback<string>): void {
    this.client
      .sendCommand(['SCRIPT', 'LOAD', script])
      .then((reply) =>
        cb(null, typeof reply === 'string' ? reply : String(reply)),
      )
      .catch(cb);
  }

  evalsha(
    hash: string,
    args: (string | number)[] | string | number,
    cb: (err?: Error | null, res?: unknown) => void,
  ): void {
    const arrHash: (string | number)[] = [hash];
    const arrArgs = Array.isArray(args) ? args : [args];
    this.client
      .sendCommand([
        'evalsha',
        ...arrHash.concat(arrArgs).map((i) => String(i)),
      ])
      .then((reply) => {
        if (Array.isArray(reply)) {
          cb(
            null,
            reply.map((i) => (i instanceof Buffer ? i.toString() : i)),
          );
        } else if (reply instanceof Buffer) cb(null, reply.toString());
        else cb(null, reply);
      })
      .catch(cb);
  }

  get(key: string, cb: ICallback<string | null>): void {
    this.client
      .sendCommand(['get', key])
      .then((reply) => cb(null, typeof reply === 'string' ? reply : null))
      .catch(cb);
  }

  del(key: string | string[], cb: ICallback<number>): void {
    this.client
      .del(key)
      .then((reply) => cb(null, reply))
      .catch(cb);
  }

  llen(key: string, cb: ICallback<number>): void {
    this.client
      .sendCommand(['llen', key])
      .then((reply) => cb(null, Number(reply)))
      .catch(cb);
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
      this.client
        .lMove(source, destination, from, to)
        .then((reply) => cb(null, reply))
        .catch(cb);
    }
  }

  zremrangebyscore(
    source: string,
    min: number | string,
    max: number | string,
    cb: ICallback<number>,
  ): void {
    this.client
      .sendCommand(['zremrangebyscore', source, `${min}`, `${max}`])
      .then((reply) => cb(null, Number(reply)))
      .catch(cb);
  }

  hmget(
    source: string,
    keys: string[],
    cb: ICallback<(string | null)[]>,
  ): void {
    this.client
      .hmGet(source, keys)
      .then((reply) => cb(null, reply))
      .catch(cb);
  }

  halt(cb: ICallback<void>): void {
    if (!this.connectionClosed) {
      this.client.once('end', cb);
      this.end(true);
    } else cb();
  }

  end(flush: boolean): void {
    if (!this.connectionClosed) {
      this.client.disconnect().catch(() => void 0);
    }
  }

  quit(cb: ICallback<void> = () => void 0): void {
    if (!this.connectionClosed) {
      this.client.once('end', cb);
      this.client.quit();
    } else cb();
  }

  getInfo(cb: ICallback<string>): void {
    this.client
      .info()
      .then((reply) => cb(null, reply))
      .catch(cb);
  }

  override on(event: string, listener: (...args: unknown[]) => any): this {
    this.client.on(event, listener);
    return this;
  }
}
