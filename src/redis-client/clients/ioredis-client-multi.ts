import { ICallback, IRedisClientMulti } from '../../../types';
import { RedisClientError } from '../errors/redis-client.error';
import { Pipeline, Redis } from 'ioredis';

export class IoredisClientMulti implements IRedisClientMulti {
  protected multi: Pipeline;

  constructor(client: Redis) {
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

  zrem(key: string, element: string): this {
    this.multi.zrem(key, element);
    return this;
  }

  sadd(key: string, element: string): this {
    this.multi.sadd(key, element);
    return this;
  }

  srem(key: string, element: string): this {
    this.multi.srem(key, element);
    return this;
  }

  hset(key: string, field: string, value: string): this {
    this.multi.hset(key, field, value);
    return this;
  }

  hdel(key: string, field: string): this {
    this.multi.hdel(key, field);
    return this;
  }

  pexpire(key: string, millis: number): this {
    this.multi.pexpire(key, millis);
    return this;
  }

  rpoplpush(source: string, destination: string): this {
    this.multi.rpoplpush(source, destination);
    return this;
  }

  del(key: string): this {
    this.multi.del(key);
    return this;
  }

  exec(cb: ICallback<unknown[]>): void {
    this.multi.exec((err, reply: [Error | null, unknown][]) => {
      if (err) cb(err);
      else if (!reply)
        cb(
          new RedisClientError(
            `Redis transaction has been abandoned. Try again.`,
          ),
        );
      else {
        const lengths: unknown[] = [];
        let err: Error | null = null;
        for (const i of reply) {
          if (!Array.isArray(i)) {
            err = new RedisClientError(
              'Expected an array reply from multi.exec()',
            );
            break;
          }
          const [error, result] = i;
          if (error instanceof Error) {
            err = error;
            break;
          }
          lengths.push(result);
        }
        if (err) cb(err);
        else cb(null, lengths);
      }
    });
  }
}
