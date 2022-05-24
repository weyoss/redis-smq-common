import { createLogger } from 'bunyan';
import { ICompatibleLogger, TLoggerConfig } from '../../types';
import { LoggerError } from './logger.error';

const noop = () => void 0;
const dummyLogger = {
  debug: noop,
  warn: noop,
  info: noop,
  error: noop,
};

let loggerInstance: ICompatibleLogger | null = null;

function createDefaultLogger(cfg: TLoggerConfig): ICompatibleLogger {
  return createLogger({ ...(cfg.options ?? {}), name: 'redis-smq' });
}

function reset(): void {
  loggerInstance = null;
}

function setLogger<T extends ICompatibleLogger>(logger: T): void {
  if (loggerInstance) {
    throw new LoggerError('Logger has been already initialized.');
  }
  loggerInstance = logger;
}

function getLogger(cfg: TLoggerConfig): ICompatibleLogger {
  if (!cfg.enabled) {
    return dummyLogger;
  }
  if (!loggerInstance) {
    loggerInstance = createDefaultLogger(cfg);
  }
  return loggerInstance;
}

function getNamespacedLogger(
  cfg: TLoggerConfig,
  namespace: string,
): ICompatibleLogger {
  const instance = getLogger(cfg);
  if (!cfg.enabled) {
    return instance;
  }
  const wrap =
    (key: keyof ICompatibleLogger) =>
    (message: unknown, ...params: unknown[]): void => {
      const msg =
        typeof message === 'string' ? `[${namespace}] ${message}` : message;
      return instance[key](msg, ...params);
    };
  return {
    info: wrap('info'),
    warn: wrap('warn'),
    debug: wrap('debug'),
    error: wrap('error'),
  };
}

export const logger = {
  getLogger,
  getNamespacedLogger,
  setLogger,
  reset,
};
