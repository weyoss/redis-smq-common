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
  TEventEmitterEvent,
} from '../../../types/index.js';
import { EventBusConnectionError } from '../errors/index.js';
import { EventEmitter } from '../event-emitter.js';

export class EventBus<Events extends TEventEmitterEvent>
  extends EventEmitter<Events>
  implements IEventBus<Events>
{
  protected static instance: IEventBus<TEventEmitterEvent> | null = null;
  protected connected = false;

  protected constructor() {
    super();
    this.connected = true;
  }

  override emit<E extends keyof Events>(
    event: E,
    ...args: Parameters<Events[E]>
  ): boolean {
    if (!this.connected) {
      throw new EventBusConnectionError();
    }
    return super.emit(event, ...args);
  }

  override on<E extends keyof Events>(event: E, listener: Events[E]): this {
    if (!this.connected) {
      throw new EventBusConnectionError();
    }
    super.on(event, listener);
    return this;
  }

  override once<E extends keyof Events>(event: E, listener: Events[E]): this {
    if (!this.connected) {
      throw new EventBusConnectionError();
    }
    super.once(event, listener);
    return this;
  }

  override removeAllListeners<E extends keyof Events>(
    event?: Extract<E, string>,
  ): this {
    if (!this.connected) {
      throw new EventBusConnectionError();
    }
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
      this.connected = false;
      if (this === EventBus.instance) EventBus.instance = null;
    }
    cb();
  }

  static getInstance<T extends TEventEmitterEvent>(
    cb: ICallback<IEventBus<T>>,
  ): void {
    if (!EventBus.instance) {
      EventBus.instance = new EventBus<T>();
    }
    cb(null, EventBus.instance);
  }
}
