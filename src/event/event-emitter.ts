/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { EventEmitter as Base } from 'events';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TEventEmitterEvent = Record<string | symbol, (...args: any) => any>; // type-coverage:ignore-line

export declare interface EventEmitter<Events extends TEventEmitterEvent>
  extends Base {
  on<E extends keyof Events>(event: E, listener: Events[E]): this;
  once<E extends keyof Events>(event: E, listener: Events[E]): this;
  emit<E extends keyof Events>(
    event: E,
    ...args: Parameters<Events[E]>
  ): boolean;
  removeAllListeners<E extends keyof Events>(event?: E): this;
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class EventEmitter<
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Events extends TEventEmitterEvent,
> extends Base {}
