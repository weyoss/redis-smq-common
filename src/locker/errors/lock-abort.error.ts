/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { LockError } from './lock.error';

export class LockAbortError extends LockError {
  constructor(message = `releaseLock() may have been called. Abandoning.`) {
    super(message);
  }
}