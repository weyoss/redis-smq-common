/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { createLogger } from 'bunyan';
import { ILogger, ILoggerConfig } from '../../types/index.js';
import { LoggerError } from './errors/index.js';

const noop = () => void 0;
const dummyLogger = {
  debug: noop,
  warn: noop,
  info: noop,
  error: noop,
};

let instance: ILogger | null = null;

function destroy(): void {
  instance = null;
}

function setLogger<T extends ILogger>(logger: T): void {
  if (instance) {
    throw new LoggerError('Logger has been already initialized.');
  }
  instance = logger;
}

function getLogger(cfg: ILoggerConfig, ns?: string): ILogger {
  if (!cfg.enabled) {
    return dummyLogger;
  }
  if (!instance) {
    instance = createLogger({ ...(cfg.options ?? {}), name: 'redis-smq' });
  }
  if (ns) {
    const wrap =
      (key: keyof ILogger, logger: ILogger) =>
      (message: unknown, ...params: unknown[]): void => {
        const msg =
          typeof message === 'string' ? `${ns} | ${message}` : message;
        return logger[key](msg, ...params);
      };
    return {
      info: wrap('info', instance),
      warn: wrap('warn', instance),
      debug: wrap('debug', instance),
      error: wrap('error', instance),
    };
  }
  return instance;
}

export const logger = {
  getLogger,
  setLogger,
  destroy,
};
