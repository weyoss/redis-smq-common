/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { LockError } from './lock.error';

export class LockNotReleasedError extends LockError {
  constructor(
    message = `A lock has been already obtained but not yet released or maybe a pending operation is in progress.`,
  ) {
    super(message);
  }
}
