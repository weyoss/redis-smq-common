/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import * as Logger from 'bunyan';

export interface ILoggerConfig {
  enabled: boolean;
  options?: Partial<Logger.LoggerOptions>;
}
