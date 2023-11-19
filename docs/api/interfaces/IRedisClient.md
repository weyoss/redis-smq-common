>[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / IRedisClient

# Interface: IRedisClient

## Implemented by

- [`RedisClient`](docs/api/classes/RedisClient.md)

## Table of contents

### Methods

- [brpoplpush](docs/api/interfaces/IRedisClient.md#brpoplpush)
- [del](docs/api/interfaces/IRedisClient.md#del)
- [end](docs/api/interfaces/IRedisClient.md#end)
- [evalsha](docs/api/interfaces/IRedisClient.md#evalsha)
- [flushall](docs/api/interfaces/IRedisClient.md#flushall)
- [get](docs/api/interfaces/IRedisClient.md#get)
- [getInfo](docs/api/interfaces/IRedisClient.md#getinfo)
- [halt](docs/api/interfaces/IRedisClient.md#halt)
- [hdel](docs/api/interfaces/IRedisClient.md#hdel)
- [hget](docs/api/interfaces/IRedisClient.md#hget)
- [hgetall](docs/api/interfaces/IRedisClient.md#hgetall)
- [hkeys](docs/api/interfaces/IRedisClient.md#hkeys)
- [hlen](docs/api/interfaces/IRedisClient.md#hlen)
- [hmget](docs/api/interfaces/IRedisClient.md#hmget)
- [hscan](docs/api/interfaces/IRedisClient.md#hscan)
- [hscanAll](docs/api/interfaces/IRedisClient.md#hscanall)
- [hset](docs/api/interfaces/IRedisClient.md#hset)
- [llen](docs/api/interfaces/IRedisClient.md#llen)
- [lmove](docs/api/interfaces/IRedisClient.md#lmove)
- [loadScript](docs/api/interfaces/IRedisClient.md#loadscript)
- [loadScripts](docs/api/interfaces/IRedisClient.md#loadscripts)
- [lpoprpush](docs/api/interfaces/IRedisClient.md#lpoprpush)
- [lrange](docs/api/interfaces/IRedisClient.md#lrange)
- [lrem](docs/api/interfaces/IRedisClient.md#lrem)
- [multi](docs/api/interfaces/IRedisClient.md#multi)
- [psubscribe](docs/api/interfaces/IRedisClient.md#psubscribe)
- [publish](docs/api/interfaces/IRedisClient.md#publish)
- [punsubscribe](docs/api/interfaces/IRedisClient.md#punsubscribe)
- [quit](docs/api/interfaces/IRedisClient.md#quit)
- [rpop](docs/api/interfaces/IRedisClient.md#rpop)
- [rpoplpush](docs/api/interfaces/IRedisClient.md#rpoplpush)
- [runScript](docs/api/interfaces/IRedisClient.md#runscript)
- [sadd](docs/api/interfaces/IRedisClient.md#sadd)
- [set](docs/api/interfaces/IRedisClient.md#set)
- [sismember](docs/api/interfaces/IRedisClient.md#sismember)
- [smembers](docs/api/interfaces/IRedisClient.md#smembers)
- [srem](docs/api/interfaces/IRedisClient.md#srem)
- [sscan](docs/api/interfaces/IRedisClient.md#sscan)
- [sscanAll](docs/api/interfaces/IRedisClient.md#sscanall)
- [subscribe](docs/api/interfaces/IRedisClient.md#subscribe)
- [unsubscribe](docs/api/interfaces/IRedisClient.md#unsubscribe)
- [unwatch](docs/api/interfaces/IRedisClient.md#unwatch)
- [updateServerVersion](docs/api/interfaces/IRedisClient.md#updateserverversion)
- [validateRedisServerSupport](docs/api/interfaces/IRedisClient.md#validateredisserversupport)
- [validateRedisVersion](docs/api/interfaces/IRedisClient.md#validateredisversion)
- [watch](docs/api/interfaces/IRedisClient.md#watch)
- [zadd](docs/api/interfaces/IRedisClient.md#zadd)
- [zcard](docs/api/interfaces/IRedisClient.md#zcard)
- [zpoprpush](docs/api/interfaces/IRedisClient.md#zpoprpush)
- [zrange](docs/api/interfaces/IRedisClient.md#zrange)
- [zrangebyscore](docs/api/interfaces/IRedisClient.md#zrangebyscore)
- [zrangebyscorewithscores](docs/api/interfaces/IRedisClient.md#zrangebyscorewithscores)
- [zrem](docs/api/interfaces/IRedisClient.md#zrem)
- [zremrangebyscore](docs/api/interfaces/IRedisClient.md#zremrangebyscore)
- [zrevrange](docs/api/interfaces/IRedisClient.md#zrevrange)
- [zscan](docs/api/interfaces/IRedisClient.md#zscan)

## Methods

### brpoplpush

▸ **brpoplpush**(`source`, `destination`, `timeout`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |
| `timeout` | `number` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<``null`` \| `string`> |

#### Returns

`void`

___

### del

▸ **del**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `string`[] |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`number`> |

#### Returns

`void`

___

### end

▸ **end**(`flush`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flush` | `boolean` |

#### Returns

`void`

___

### evalsha

▸ **evalsha**(`hash`, `args`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |
| `args` | `string` \| `number` \| (`string` \| `number`)[] |
| `cb` | (`err?`: ``null`` \| `Error`, `res?`: `unknown`) => `void` |

#### Returns

`void`

___

### flushall

▸ **flushall**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`string`> |

#### Returns

`void`

___

### get

▸ **get**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<``null`` \| `string`> |

#### Returns

`void`

___

### getInfo

▸ **getInfo**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`string`> |

#### Returns

`void`

___

### halt

▸ **halt**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`void`> |

#### Returns

`void`

___

### hdel

▸ **hdel**(`key`, `fields`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `fields` | `string` \| `string`[] |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`number`> |

#### Returns

`void`

___

### hget

▸ **hget**(`key`, `field`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `field` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<``null`` \| `string`> |

#### Returns

`void`

___

### hgetall

▸ **hgetall**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`Record`<`string`, `string`>> |

#### Returns

`void`

___

### hkeys

▸ **hkeys**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`string`[]> |

#### Returns

`void`

___

### hlen

▸ **hlen**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`number`> |

#### Returns

`void`

___

### hmget

▸ **hmget**(`source`, `keys`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `keys` | `string`[] |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<(``null`` \| `string`)[]> |

#### Returns

`void`

___

### hscan

▸ **hscan**(`key`, `cursor`, `options`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cursor` | `string` |
| `options` | `Object` |
| `options.COUNT?` | `number` |
| `options.MATCH?` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<\{ `cursor`: `string` ; `result`: `Record`<`string`, `string`>  }> |

#### Returns

`void`

___

### hscanAll

▸ **hscanAll**(`key`, `options`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `options` | `Object` |
| `options.COUNT?` | `number` |
| `options.MATCH?` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`Record`<`string`, `string`>> |

#### Returns

`void`

___

### hset

▸ **hset**(`key`, `field`, `value`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `field` | `string` |
| `value` | `string` \| `number` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`number`> |

#### Returns

`void`

___

### llen

▸ **llen**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`number`> |

#### Returns

`void`

___

### lmove

▸ **lmove**(`source`, `destination`, `from`, `to`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |
| `from` | ``"LEFT"`` \| ``"RIGHT"`` |
| `to` | ``"LEFT"`` \| ``"RIGHT"`` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<``null`` \| `string`> |

#### Returns

`void`

___

### loadScript

▸ **loadScript**(`script`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `script` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`string`> |

#### Returns

`void`

___

### loadScripts

▸ **loadScripts**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`void`> |

#### Returns

`void`

___

### lpoprpush

▸ **lpoprpush**(`source`, `destination`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<``null`` \| `string`> |

#### Returns

`void`

___

### lrange

▸ **lrange**(`key`, `start`, `stop`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `start` | `number` |
| `stop` | `number` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`string`[]> |

#### Returns

`void`

___

### lrem

▸ **lrem**(`key`, `count`, `element`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `count` | `number` |
| `element` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`number`> |

#### Returns

`void`

___

### multi

▸ **multi**(): [`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

#### Returns

[`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

___

### psubscribe

▸ **psubscribe**(`pattern`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` |

#### Returns

`void`

___

### publish

▸ **publish**(`channel`, `message`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `string` |
| `message` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`number`> |

#### Returns

`void`

___

### punsubscribe

▸ **punsubscribe**(`channel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `string` |

#### Returns

`void`

___

### quit

▸ **quit**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`void`> |

#### Returns

`void`

___

### rpop

▸ **rpop**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<``null`` \| `string`> |

#### Returns

`void`

___

### rpoplpush

▸ **rpoplpush**(`source`, `destination`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<``null`` \| `string`> |

#### Returns

`void`

___

### runScript

▸ **runScript**(`scriptName`, `keys`, `args`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scriptName` | `string` |
| `keys` | (`string` \| `number`)[] |
| `args` | (`string` \| `number`)[] |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`unknown`> |

#### Returns

`void`

___

### sadd

▸ **sadd**(`key`, `member`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `member` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`number`> |

#### Returns

`void`

___

### set

▸ **set**(`key`, `value`, `options`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string` |
| `options` | `Object` |
| `options.exists?` | ``"NX"`` \| ``"XX"`` |
| `options.expire?` | `Object` |
| `options.expire.mode` | ``"EX"`` \| ``"PX"`` |
| `options.expire.value` | `number` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<``null`` \| `string`> |

#### Returns

`void`

___

### sismember

▸ **sismember**(`key`, `member`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `member` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`number`> |

#### Returns

`void`

___

### smembers

▸ **smembers**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`string`[]> |

#### Returns

`void`

___

### srem

▸ **srem**(`key`, `member`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `member` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`number`> |

#### Returns

`void`

___

### sscan

▸ **sscan**(`key`, `cursor`, `options`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cursor` | `string` |
| `options` | `Object` |
| `options.COUNT?` | `number` |
| `options.MATCH?` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<\{ `cursor`: `string` ; `items`: `string`[]  }> |

#### Returns

`void`

___

### sscanAll

▸ **sscanAll**(`key`, `options`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `options` | `Object` |
| `options.COUNT?` | `number` |
| `options.MATCH?` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`string`[]> |

#### Returns

`void`

___

### subscribe

▸ **subscribe**(`channel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `string` |

#### Returns

`void`

___

### unsubscribe

▸ **unsubscribe**(`channel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `string` |

#### Returns

`void`

___

### unwatch

▸ **unwatch**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`string`> |

#### Returns

`void`

___

### updateServerVersion

▸ **updateServerVersion**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`void`> |

#### Returns

`void`

___

### validateRedisServerSupport

▸ **validateRedisServerSupport**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`void`> |

#### Returns

`void`

___

### validateRedisVersion

▸ **validateRedisVersion**(`major`, `feature?`, `minor?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `major` | `number` |
| `feature?` | `number` |
| `minor?` | `number` |

#### Returns

`boolean`

___

### watch

▸ **watch**(`args`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `string`[] |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`string`> |

#### Returns

`void`

___

### zadd

▸ **zadd**(`key`, `score`, `member`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `score` | `number` |
| `member` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`string` \| `number`> |

#### Returns

`void`

___

### zcard

▸ **zcard**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`number`> |

#### Returns

`void`

___

### zpoprpush

▸ **zpoprpush**(`source`, `destination`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<``null`` \| `string`> |

#### Returns

`void`

___

### zrange

▸ **zrange**(`key`, `min`, `max`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `min` | `number` |
| `max` | `number` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`string`[]> |

#### Returns

`void`

___

### zrangebyscore

▸ **zrangebyscore**(`key`, `min`, `max`, `offset`, `count`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `min` | `string` \| `number` |
| `max` | `string` \| `number` |
| `offset` | `number` |
| `count` | `number` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`string`[]> |

#### Returns

`void`

___

### zrangebyscorewithscores

▸ **zrangebyscorewithscores**(`source`, `min`, `max`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `min` | `number` |
| `max` | `number` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`Record`<`string`, `string`>> |

#### Returns

`void`

___

### zrem

▸ **zrem**(`source`, `id`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `id` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`number`> |

#### Returns

`void`

___

### zremrangebyscore

▸ **zremrangebyscore**(`source`, `min`, `max`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `min` | `string` \| `number` |
| `max` | `string` \| `number` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`number`> |

#### Returns

`void`

___

### zrevrange

▸ **zrevrange**(`key`, `min`, `max`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `min` | `number` |
| `max` | `number` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<`string`[]> |

#### Returns

`void`

___

### zscan

▸ **zscan**(`key`, `cursor`, `options`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cursor` | `string` |
| `options` | `Object` |
| `options.COUNT?` | `number` |
| `options.MATCH?` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)<\{ `cursor`: `string` ; `items`: `string`[]  }> |

#### Returns

`void`
