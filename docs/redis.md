> [RedisSMQ Common Library](../README.md) / [Docs](./README.md) / Redis Configuration

# Redis Configuration

## Configuration Parameters

See [IRedisConfig](api/README.md#iredisconfig) for more details.

### Configuration Example

```javascript
'use strict';
const { ERedisConfigClient } = require('redis-smq-common');

module.exports = {
    redis: {
        client: ERedisConfigClient.IOREDIS,
        options: {
            host: '127.0.0.1',
            port: 6379,
            connect_timeout: 3600000,
        },
    },
};
```

#### Parameters

- `redis` *(object): Optional.* Redis client parameters. If not provided the `redis` client would be used by default.
- `redis.client` *(string): Optional.* Redis client name. Can be either `ERedisConfigClient.IOREDIS`,`ERedisConfigClient.REDIS`, or `ERedisConfigClient.REDIS_V4`.
- `redis.options` *(object): Optional.* Redis client options.

  - See https://github.com/luin/ioredis/blob/v4/API.md#new-redisport-host-options for `ioredis` options.
  - See https://github.com/redis/node-redis/tree/v3.1.2#options-object-properties for `redis` options.
  - See https://github.com/redis/node-redis/blob/master/docs/client-configuration.md for `redis_v4` options.
