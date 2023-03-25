import { EventEmitter } from 'events';
import { LuaScripts } from './lua-scripts';
import { ICallback, IRedisClientMulti } from '../../types';
import { RedisClientError } from './errors/redis-client.error';
import { EmptyCallbackReplyError } from '../errors/empty-callback-reply.error';
import * as fs from 'fs';
import { resolve } from 'path';

export enum ELuaScriptName {
  LPOPRPUSH = 'LPOPRPUSH',
  ZPOPHGETRPUSH = 'ZPOPHGETRPUSH',
  LPOPRPUSHEXTRA = 'LPOPRPUSHEXTRA',
}

export abstract class RedisClient extends EventEmitter {
  protected static redisServerVersion: number[] | null = null;
  protected static scriptsLoaded = false;
  protected static luaScripts = new LuaScripts();
  protected connectionClosed = true;

  validateRedisVersion(major: number, feature = 0, minor = 0): boolean {
    if (!RedisClient.redisServerVersion)
      throw new RedisClientError('Unknown Redis server version.');
    return (
      RedisClient.redisServerVersion[0] > major ||
      (RedisClient.redisServerVersion[0] === major &&
        RedisClient.redisServerVersion[1] >= feature &&
        RedisClient.redisServerVersion[2] >= minor)
    );
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

  abstract multi(): IRedisClientMulti;

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
    options: { MATCH?: string; COUNT?: number },
    cb: ICallback<string[]>,
  ): void;

  sscanFallback(key: string, cb: ICallback<string[]>): void {
    if (this.validateRedisVersion(2, 8)) this.sscan(key, {}, cb);
    else this.smembers(key, cb);
  }

  abstract sadd(key: string, member: string, cb: ICallback<number>): void;

  abstract srem(key: string, member: string, cb: ICallback<number>): void;

  abstract hgetall(key: string, cb: ICallback<Record<string, string>>): void;

  abstract hget(key: string, field: string, cb: ICallback<string | null>): void;

  abstract hset(
    key: string,
    field: string,
    value: string,
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

  zpophgetrpush(
    source: string,
    sourceHash: string,
    destination: string,
    cb: ICallback<string | null>,
  ): void {
    this.runScript(
      ELuaScriptName.ZPOPHGETRPUSH,
      [source, sourceHash, destination],
      [],
      (err, res?: unknown) => {
        if (err) cb(err);
        else cb(null, typeof res === 'string' ? res : null);
      },
    );
  }

  lpoprpushextra(
    source: string,
    destination: string,
    listSize: number,
    expire: number,
    cb: ICallback<string | null>,
  ): void {
    this.runScript(
      ELuaScriptName.LPOPRPUSHEXTRA,
      [source, destination],
      [listSize, expire],
      (err, res?: unknown) => {
        if (err) cb(err);
        else cb(null, typeof res === 'string' ? res : null);
      },
    );
  }

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
        else if (!res) cb(new EmptyCallbackReplyError());
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
    RedisClient.luaScripts.loadScripts(this, cb);
  }

  runScript(
    scriptName: string,
    keys: string[],
    args: (string | number)[],
    cb: ICallback<unknown>,
  ): void {
    const sha = RedisClient.luaScripts.getScriptId(scriptName);
    this.evalsha(sha, [keys.length, ...keys, ...args], (err, res?: unknown) => {
      if (err) cb(err);
      else cb(null, res);
    });
  }

  static addScript(name: string, content: string): void {
    if (this.luaScripts.hasScript(name)) {
      throw new RedisClientError(`A script with name [${name}] already exists`);
    }
    this.luaScripts.addScript(name, content);
  }
}

RedisClient.addScript(
  ELuaScriptName.ZPOPHGETRPUSH,
  fs.readFileSync(resolve(__dirname, './lua/zpophgetrpush.lua')).toString(),
);
RedisClient.addScript(
  ELuaScriptName.LPOPRPUSH,
  fs.readFileSync(resolve(__dirname, './lua/lpoprpush.lua')).toString(),
);
RedisClient.addScript(
  ELuaScriptName.LPOPRPUSHEXTRA,
  fs.readFileSync(resolve(__dirname, './lua/lpoprpushextra.lua')).toString(),
);
