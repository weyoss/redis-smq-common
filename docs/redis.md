# Redis configuration

## Configuration parameters

**Configuration Example**

```javascript
'use strict';

module.exports = {
    redis: {
        client: 'redis',
        options: {
            host: '127.0.0.1',
            port: 6379,
            connect_timeout: 3600000,
        },
    },
};
```

**Parameters**

- `redis` *(object): Optional.* Redis client parameters. If not provided the `redis` client would be used by default.

- `redis.client` *(string): Optional.* Redis client name. Can be either `ioredis`,`redis`, or `redis_v4`.

- `redis.options` *(object): Optional.* Redis client options.
    - See https://github.com/luin/ioredis/blob/v4/API.md#new-redisport-host-options for `ioredis` options.
    - See https://github.com/redis/node-redis/tree/v3.1.2#options-object-properties for `redis` options.
    - See https://github.com/redis/node-redis/blob/master/docs/client-configuration.md for `redis_v4` options.