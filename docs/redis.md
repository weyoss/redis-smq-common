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

- `redis.client` *(string): Optional.* Redis client name. Can be either `redis` or `ioredis`.

- `redis.options` *(object): Optional.* Redis client options.
    - See https://github.com/NodeRedis/node_redis#options-object-properties for all valid parameters for `redis` client.
    - See https://github.com/luin/ioredis/blob/master/API.md#new_Redis for all valid `ioredis` parameters.