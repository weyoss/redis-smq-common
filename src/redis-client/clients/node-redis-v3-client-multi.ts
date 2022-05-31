import { ICallback, IRedisClientMulti } from '../../../types';
import { Multi, RedisClient } from 'redis';
import { WatchedKeysChangedError } from '../errors/watched-keys-changed.error';

export class NodeRedisV3ClientMulti implements IRedisClientMulti {
  protected multi: Multi;

  constructor(client: RedisClient) {
    this.multi = client.multi();
  }

  lrem(key: string, count: number, element: string): this {
    this.multi.lrem(key, count, element);
    return this;
  }

  lpop(key: string): this {
    this.multi.lpop(key);
    return this;
  }

  lpush(key: string, element: string): this {
    this.multi.lpush(key, element);
    return this;
  }

  ltrim(key: string, start: number, stop: number): this {
    this.multi.ltrim(key, start, stop);
    return this;
  }

  rpop(key: string): this {
    this.multi.rpop(key);
    return this;
  }

  rpush(key: string, element: string): this {
    this.multi.rpush(key, element);
    return this;
  }

  zadd(key: string, score: number, element: string): this {
    this.multi.zadd(key, score, element);
    return this;
  }

  zrem(key: string, element: string | string[]): this {
    this.multi.zrem(key, element);
    return this;
  }

  sadd(key: string, element: string): this {
    this.multi.sadd(key, element);
    return this;
  }

  srem(key: string, element: string | string[]): this {
    this.multi.srem(key, element);
    return this;
  }

  hset(key: string, field: string, value: string): this {
    this.multi.hset(key, field, value);
    return this;
  }

  hdel(key: string, field: string | string[]): this {
    this.multi.hdel(key, field);
    return this;
  }

  hincrby(key: string, field: string, by: number): this {
    this.multi.hincrby(key, field, by);
    return this;
  }

  pexpire(key: string, millis: number): this {
    this.multi.pexpire(key, millis);
    return this;
  }

  expire(key: string, secs: number): this {
    this.multi.expire(key, secs);
    return this;
  }

  rpoplpush(source: string, destination: string): this {
    this.multi.rpoplpush(source, destination);
    return this;
  }

  del(key: string | string[]): this {
    this.multi.del(key);
    return this;
  }

  exec(cb: ICallback<unknown[]>): void {
    this.multi.exec((err, reply: unknown[]) => {
      if (err) cb(err);
      else if (!reply) cb(new WatchedKeysChangedError());
      else cb(null, reply);
    });
  }
}
