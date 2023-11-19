/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { RedisSMQError } from './redis-smq.error';

export class CallbackInvalidReplyError extends RedisSMQError {
  constructor() {
    super(`Invalid reply type`);
  }
}
