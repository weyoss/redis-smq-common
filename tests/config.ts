import { RedisClientName, TLoggerConfig, TRedisConfig } from '../types';

const redisHost = process.env.REDIS_HOST || '127.0.0.1';
const redisPort = Number(process.env.REDIS_PORT) || 6379;

export const redisConfig: TRedisConfig = {
  client: RedisClientName.IOREDIS,
  options: {
    host: redisHost,
    port: redisPort,
    showFriendlyErrorStack: true,
  },
};

export const loggerConfig: TLoggerConfig = {
  enabled: true,
};
