/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { EventEmitter } from './event-emitter';
import { TEvent } from '../../types';

let instance: EventEmitter<TEvent> | null = null;

export function getEventBusInstance<T extends TEvent>(): EventEmitter<T> {
  if (!instance) {
    instance = new EventEmitter<T>();
  }
  return instance;
}
