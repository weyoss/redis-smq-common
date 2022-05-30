import { RedisClientError } from './redis-client.error';

export class WatchedKeysChangedError extends RedisClientError {
  constructor(msg = 'One (or more) of the watched keys has been changed') {
    super(msg);
  }
}
