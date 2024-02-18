/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import {
  ICallback,
  IEventBus,
  IRedisConfig,
  TEventEmitterEvent,
} from '../../../types/index.js';
import { async } from '../../async/async.js';
import { redis } from '../../redis-client/index.js';
import { RedisClient } from '../../redis-client/redis-client.js';
import { EventBusConnectionError } from '../errors/index.js';
import { EventEmitter } from '../event-emitter.js';

export class EventBusRedis<Events extends TEventEmitterEvent>
  extends EventEmitter<Events>
  implements IEventBus<Events>
{
  protected static instance: IEventBus<TEventEmitterEvent> | null = null;
  protected connected = false;
  protected pubClient;
  protected subClient;

  protected constructor(pubClient: RedisClient, subClient: RedisClient) {
    super();
    this.pubClient = pubClient;
    this.subClient = subClient;
    this.subClient.on('message', (channel: keyof Events, message: string) => {
      this.eventEmitter.emit(String(channel), ...JSON.parse(message));
    });
    this.connected = true;
  }

  override emit<E extends keyof Events>(
    event: E,
    ...args: Parameters<Events[E]>
  ): boolean {
    if (!this.connected) {
      throw new EventBusConnectionError();
    }
    this.pubClient.publish(String(event), JSON.stringify(args), () => void 0);
    return true;
  }

  override on<E extends keyof Events>(event: E, listener: Events[E]): this {
    if (!this.connected) {
      throw new EventBusConnectionError();
    }
    this.subClient.subscribe(String(event));
    super.on(event, listener);
    return this;
  }

  override once<E extends keyof Events>(event: E, listener: Events[E]): this {
    if (!this.connected) {
      throw new EventBusConnectionError();
    }
    this.subClient.subscribe(String(event));
    super.once(event, listener);
    return this;
  }

  override removeAllListeners<E extends keyof Events>(
    event?: Extract<E, string>,
  ): this {
    if (!this.connected) {
      throw new EventBusConnectionError();
    }
    if (event) this.subClient.unsubscribe(String(event));
    else this.subClient.unsubscribe();
    super.removeAllListeners(event);
    return this;
  }

  override removeListener<E extends keyof Events>(
    event: E,
    listener: Events[E],
  ): this {
    if (!this.connected) {
      throw new EventBusConnectionError();
    }
    super.removeListener(event, listener);
    return this;
  }

  disconnect(cb: ICallback<void>) {
    if (this.connected) {
      async.waterfall(
        [
          (cb: ICallback<void>) => this.subClient.halt(() => cb()),
          (cb: ICallback<void>) => this.pubClient.halt(() => cb()),
        ],
        () => {
          this.connected = false;
          if (this === EventBusRedis.instance) EventBusRedis.instance = null;
          cb();
        },
      );
    } else cb();
  }

  static getInstance<T extends TEventEmitterEvent>(
    config: IRedisConfig,
    cb: ICallback<IEventBus<T>>,
  ): void {
    if (!EventBusRedis.instance) {
      let pubClient: RedisClient | null | undefined = null;
      let subClient: RedisClient | null | undefined = null;
      async.waterfall(
        [
          (cb: ICallback<void>) =>
            redis.createInstance(config, (err, client) => {
              if (err) cb(err);
              else {
                pubClient = client;
                cb();
              }
            }),
          (cb: ICallback<void>) =>
            redis.createInstance(config, (err, client) => {
              if (err) cb(err);
              else {
                subClient = client;
                cb();
              }
            }),
        ],
        (err) => {
          if (err) {
            if (pubClient) pubClient.halt(() => void 0);
            if (subClient) subClient.halt(() => void 0);
            cb(err);
          } else if (!pubClient || !subClient) cb(new Error());
          else {
            EventBusRedis.instance = new EventBusRedis<T>(pubClient, subClient);
            cb(null, EventBusRedis.instance);
          }
        },
      );
    } else cb(null, EventBusRedis.instance);
  }
}
