>[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / IRedisClient

# Interface: IRedisClient

## Implemented by

- [`RedisClient`](../classes/RedisClient.md)

## Table of contents

### Methods

- [brpoplpush](../interfaces/IRedisClient.md#brpoplpush)
- [del](../interfaces/IRedisClient.md#del)
- [end](../interfaces/IRedisClient.md#end)
- [evalsha](../interfaces/IRedisClient.md#evalsha)
- [flushall](../interfaces/IRedisClient.md#flushall)
- [get](../interfaces/IRedisClient.md#get)
- [getInfo](../interfaces/IRedisClient.md#getinfo)
- [halt](../interfaces/IRedisClient.md#halt)
- [hdel](../interfaces/IRedisClient.md#hdel)
- [hget](../interfaces/IRedisClient.md#hget)
- [hgetall](../interfaces/IRedisClient.md#hgetall)
- [hkeys](../interfaces/IRedisClient.md#hkeys)
- [hlen](../interfaces/IRedisClient.md#hlen)
- [hmget](../interfaces/IRedisClient.md#hmget)
- [hscan](../interfaces/IRedisClient.md#hscan)
- [hscanAll](../interfaces/IRedisClient.md#hscanall)
- [hset](../interfaces/IRedisClient.md#hset)
- [llen](../interfaces/IRedisClient.md#llen)
- [lmove](../interfaces/IRedisClient.md#lmove)
- [loadScript](../interfaces/IRedisClient.md#loadscript)
- [loadScripts](../interfaces/IRedisClient.md#loadscripts)
- [lpoprpush](../interfaces/IRedisClient.md#lpoprpush)
- [lrange](../interfaces/IRedisClient.md#lrange)
- [lrem](../interfaces/IRedisClient.md#lrem)
- [multi](../interfaces/IRedisClient.md#multi)
- [psubscribe](../interfaces/IRedisClient.md#psubscribe)
- [publish](../interfaces/IRedisClient.md#publish)
- [punsubscribe](../interfaces/IRedisClient.md#punsubscribe)
- [quit](../interfaces/IRedisClient.md#quit)
- [rpop](../interfaces/IRedisClient.md#rpop)
- [rpoplpush](../interfaces/IRedisClient.md#rpoplpush)
- [runScript](../interfaces/IRedisClient.md#runscript)
- [sadd](../interfaces/IRedisClient.md#sadd)
- [set](../interfaces/IRedisClient.md#set)
- [sismember](../interfaces/IRedisClient.md#sismember)
- [smembers](../interfaces/IRedisClient.md#smembers)
- [srem](../interfaces/IRedisClient.md#srem)
- [sscan](../interfaces/IRedisClient.md#sscan)
- [sscanAll](../interfaces/IRedisClient.md#sscanall)
- [subscribe](../interfaces/IRedisClient.md#subscribe)
- [unsubscribe](../interfaces/IRedisClient.md#unsubscribe)
- [unwatch](../interfaces/IRedisClient.md#unwatch)
- [updateServerVersion](../interfaces/IRedisClient.md#updateserverversion)
- [validateRedisServerSupport](../interfaces/IRedisClient.md#validateredisserversupport)
- [validateRedisVersion](../interfaces/IRedisClient.md#validateredisversion)
- [watch](../interfaces/IRedisClient.md#watch)
- [zadd](../interfaces/IRedisClient.md#zadd)
- [zcard](../interfaces/IRedisClient.md#zcard)
- [zpoprpush](../interfaces/IRedisClient.md#zpoprpush)
- [zrange](../interfaces/IRedisClient.md#zrange)
- [zrangebyscore](../interfaces/IRedisClient.md#zrangebyscore)
- [zrangebyscorewithscores](../interfaces/IRedisClient.md#zrangebyscorewithscores)
- [zrem](../interfaces/IRedisClient.md#zrem)
- [zremrangebyscore](../interfaces/IRedisClient.md#zremrangebyscore)
- [zrevrange](../interfaces/IRedisClient.md#zrevrange)
- [zscan](../interfaces/IRedisClient.md#zscan)

## Methods

### brpoplpush

▸ **brpoplpush**(`source`, `destination`, `timeout`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |
| `timeout` | `number` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<``null`` \| `string`> |

#### Returns

`void`

___

### del

▸ **del**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `string`[] |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`number`> |

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`string`> |

#### Returns

`void`

___

### get

▸ **get**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<``null`` \| `string`> |

#### Returns

`void`

___

### getInfo

▸ **getInfo**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`string`> |

#### Returns

`void`

___

### halt

▸ **halt**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`void`> |

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`number`> |

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)<``null`` \| `string`> |

#### Returns

`void`

___

### hgetall

▸ **hgetall**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`Record`<`string`, `string`>> |

#### Returns

`void`

___

### hkeys

▸ **hkeys**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`string`[]> |

#### Returns

`void`

___

### hlen

▸ **hlen**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`number`> |

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)<(``null`` \| `string`)[]> |

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)<\{ `cursor`: `string` ; `result`: `Record`<`string`, `string`>  }> |

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`Record`<`string`, `string`>> |

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`number`> |

#### Returns

`void`

___

### llen

▸ **llen**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`number`> |

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)<``null`` \| `string`> |

#### Returns

`void`

___

### loadScript

▸ **loadScript**(`script`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `script` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`string`> |

#### Returns

`void`

___

### loadScripts

▸ **loadScripts**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`void`> |

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)<``null`` \| `string`> |

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`string`[]> |

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`number`> |

#### Returns

`void`

___

### multi

▸ **multi**(): [`IRedisTransaction`](../interfaces/IRedisTransaction.md)

#### Returns

[`IRedisTransaction`](../interfaces/IRedisTransaction.md)

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`number`> |

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`void`> |

#### Returns

`void`

___

### rpop

▸ **rpop**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<``null`` \| `string`> |

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)<``null`` \| `string`> |

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`unknown`> |

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`number`> |

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)<``null`` \| `string`> |

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`number`> |

#### Returns

`void`

___

### smembers

▸ **smembers**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`string`[]> |

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`number`> |

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)<\{ `cursor`: `string` ; `items`: `string`[]  }> |

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`string`[]> |

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`string`> |

#### Returns

`void`

___

### updateServerVersion

▸ **updateServerVersion**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`void`> |

#### Returns

`void`

___

### validateRedisServerSupport

▸ **validateRedisServerSupport**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`void`> |

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`string`> |

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`string` \| `number`> |

#### Returns

`void`

___

### zcard

▸ **zcard**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`number`> |

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)<``null`` \| `string`> |

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`string`[]> |

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`string`[]> |

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`Record`<`string`, `string`>> |

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`number`> |

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`number`> |

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`string`[]> |

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)<\{ `cursor`: `string` ; `items`: `string`[]  }> |

#### Returns

`void`
