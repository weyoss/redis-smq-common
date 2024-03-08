/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { ICallback } from '../../../../src/common/index.js';

export default function myWorkerRunnable(msg: string, cb: ICallback<void>) {
  setInterval(() => void 0, 1000);
  cb();
}
