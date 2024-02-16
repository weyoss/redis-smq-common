/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { ICallback } from '../common';
import { IEventEmitter, TEventEmitterEvent } from './event-emitter';

export interface IEventBus<Events extends TEventEmitterEvent>
  extends IEventEmitter<Events> {
  disconnect(cb: ICallback<void>): void;
}
