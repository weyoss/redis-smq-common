[RedisSMQ Common Library](../../../README.md) / [Docs](README.md) / [API](docs/api/README.md) / RedisClient

# Class: RedisClient

## Hierarchy

- `EventEmitter`

  ↳ **`RedisClient`**

## Implements

- [`IRedisClient`](docs/api/interfaces/IRedisClient.md)

## Table of contents

### Constructors

- [constructor](docs/api/classes/RedisClient.md#constructor)

### Methods

- [brpoplpush](docs/api/classes/RedisClient.md#brpoplpush)
- [del](docs/api/classes/RedisClient.md#del)
- [end](docs/api/classes/RedisClient.md#end)
- [evalsha](docs/api/classes/RedisClient.md#evalsha)
- [flushall](docs/api/classes/RedisClient.md#flushall)
- [get](docs/api/classes/RedisClient.md#get)
- [getInfo](docs/api/classes/RedisClient.md#getinfo)
- [halt](docs/api/classes/RedisClient.md#halt)
- [hdel](docs/api/classes/RedisClient.md#hdel)
- [hget](docs/api/classes/RedisClient.md#hget)
- [hgetall](docs/api/classes/RedisClient.md#hgetall)
- [hkeys](docs/api/classes/RedisClient.md#hkeys)
- [hlen](docs/api/classes/RedisClient.md#hlen)
- [hmget](docs/api/classes/RedisClient.md#hmget)
- [hscan](docs/api/classes/RedisClient.md#hscan)
- [hscanAll](docs/api/classes/RedisClient.md#hscanall)
- [hset](docs/api/classes/RedisClient.md#hset)
- [llen](docs/api/classes/RedisClient.md#llen)
- [lmove](docs/api/classes/RedisClient.md#lmove)
- [loadScript](docs/api/classes/RedisClient.md#loadscript)
- [loadScripts](docs/api/classes/RedisClient.md#loadscripts)
- [lpoprpush](docs/api/classes/RedisClient.md#lpoprpush)
- [lrange](docs/api/classes/RedisClient.md#lrange)
- [lrem](docs/api/classes/RedisClient.md#lrem)
- [multi](docs/api/classes/RedisClient.md#multi)
- [psubscribe](docs/api/classes/RedisClient.md#psubscribe)
- [publish](docs/api/classes/RedisClient.md#publish)
- [punsubscribe](docs/api/classes/RedisClient.md#punsubscribe)
- [quit](docs/api/classes/RedisClient.md#quit)
- [rpop](docs/api/classes/RedisClient.md#rpop)
- [rpoplpush](docs/api/classes/RedisClient.md#rpoplpush)
- [runScript](docs/api/classes/RedisClient.md#runscript)
- [sadd](docs/api/classes/RedisClient.md#sadd)
- [set](docs/api/classes/RedisClient.md#set)
- [sismember](docs/api/classes/RedisClient.md#sismember)
- [smembers](docs/api/classes/RedisClient.md#smembers)
- [srem](docs/api/classes/RedisClient.md#srem)
- [sscan](docs/api/classes/RedisClient.md#sscan)
- [sscanAll](docs/api/classes/RedisClient.md#sscanall)
- [subscribe](docs/api/classes/RedisClient.md#subscribe)
- [unsubscribe](docs/api/classes/RedisClient.md#unsubscribe)
- [unwatch](docs/api/classes/RedisClient.md#unwatch)
- [updateServerVersion](docs/api/classes/RedisClient.md#updateserverversion)
- [validateRedisServerSupport](docs/api/classes/RedisClient.md#validateredisserversupport)
- [validateRedisVersion](docs/api/classes/RedisClient.md#validateredisversion)
- [watch](docs/api/classes/RedisClient.md#watch)
- [zadd](docs/api/classes/RedisClient.md#zadd)
- [zcard](docs/api/classes/RedisClient.md#zcard)
- [zpoprpush](docs/api/classes/RedisClient.md#zpoprpush)
- [zrange](docs/api/classes/RedisClient.md#zrange)
- [zrangebyscore](docs/api/classes/RedisClient.md#zrangebyscore)
- [zrangebyscorewithscores](docs/api/classes/RedisClient.md#zrangebyscorewithscores)
- [zrem](docs/api/classes/RedisClient.md#zrem)
- [zremrangebyscore](docs/api/classes/RedisClient.md#zremrangebyscore)
- [zrevrange](docs/api/classes/RedisClient.md#zrevrange)
- [zscan](docs/api/classes/RedisClient.md#zscan)
- [addScript](docs/api/classes/RedisClient.md#addscript)

## Constructors

### constructor

• **new RedisClient**(`options?`): [`RedisClient`](docs/api/classes/RedisClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `EventEmitterOptions` |

#### Returns

[`RedisClient`](docs/api/classes/RedisClient.md)

#### Inherited from

EventEmitter.constructor

## Methods

### brpoplpush

▸ **brpoplpush**(`source`, `destination`, `timeout`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |
| `timeout` | `number` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<``null`` \| `string`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[brpoplpush](docs/api/interfaces/IRedisClient.md#brpoplpush)

___

### del

▸ **del**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `string`[] |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`number`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[del](docs/api/interfaces/IRedisClient.md#del)

___

### end

▸ **end**(`flush`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flush` | `boolean` |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[end](docs/api/interfaces/IRedisClient.md#end)

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

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[evalsha](docs/api/interfaces/IRedisClient.md#evalsha)

___

### flushall

▸ **flushall**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`string`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[flushall](docs/api/interfaces/IRedisClient.md#flushall)

___

### get

▸ **get**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<``null`` \| `string`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[get](docs/api/interfaces/IRedisClient.md#get)

___

### getInfo

▸ **getInfo**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`string`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[getInfo](docs/api/interfaces/IRedisClient.md#getinfo)

___

### halt

▸ **halt**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[halt](docs/api/interfaces/IRedisClient.md#halt)

___

### hdel

▸ **hdel**(`key`, `fields`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `fields` | `string` \| `string`[] |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`number`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[hdel](docs/api/interfaces/IRedisClient.md#hdel)

___

### hget

▸ **hget**(`key`, `field`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `field` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<``null`` \| `string`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[hget](docs/api/interfaces/IRedisClient.md#hget)

___

### hgetall

▸ **hgetall**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`Record`\<`string`, `string`\>\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[hgetall](docs/api/interfaces/IRedisClient.md#hgetall)

___

### hkeys

▸ **hkeys**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`string`[]\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[hkeys](docs/api/interfaces/IRedisClient.md#hkeys)

___

### hlen

▸ **hlen**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`number`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[hlen](docs/api/interfaces/IRedisClient.md#hlen)

___

### hmget

▸ **hmget**(`source`, `keys`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `keys` | `string`[] |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<(``null`` \| `string`)[]\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[hmget](docs/api/interfaces/IRedisClient.md#hmget)

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
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<\{ `cursor`: `string` ; `result`: `Record`\<`string`, `string`\>  }\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[hscan](docs/api/interfaces/IRedisClient.md#hscan)

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
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`Record`\<`string`, `string`\>\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[hscanAll](docs/api/interfaces/IRedisClient.md#hscanall)

___

### hset

▸ **hset**(`key`, `field`, `value`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `field` | `string` |
| `value` | `string` \| `number` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`number`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[hset](docs/api/interfaces/IRedisClient.md#hset)

___

### llen

▸ **llen**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`number`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[llen](docs/api/interfaces/IRedisClient.md#llen)

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
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<``null`` \| `string`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[lmove](docs/api/interfaces/IRedisClient.md#lmove)

___

### loadScript

▸ **loadScript**(`script`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `script` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`string`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[loadScript](docs/api/interfaces/IRedisClient.md#loadscript)

___

### loadScripts

▸ **loadScripts**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[loadScripts](docs/api/interfaces/IRedisClient.md#loadscripts)

___

### lpoprpush

▸ **lpoprpush**(`source`, `destination`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<``null`` \| `string`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[lpoprpush](docs/api/interfaces/IRedisClient.md#lpoprpush)

___

### lrange

▸ **lrange**(`key`, `start`, `stop`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `start` | `number` |
| `stop` | `number` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`string`[]\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[lrange](docs/api/interfaces/IRedisClient.md#lrange)

___

### lrem

▸ **lrem**(`key`, `count`, `element`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `count` | `number` |
| `element` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`number`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[lrem](docs/api/interfaces/IRedisClient.md#lrem)

___

### multi

▸ **multi**(): [`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

#### Returns

[`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[multi](docs/api/interfaces/IRedisClient.md#multi)

___

### psubscribe

▸ **psubscribe**(`pattern`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[psubscribe](docs/api/interfaces/IRedisClient.md#psubscribe)

___

### publish

▸ **publish**(`channel`, `message`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `string` |
| `message` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`number`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[publish](docs/api/interfaces/IRedisClient.md#publish)

___

### punsubscribe

▸ **punsubscribe**(`channel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `string` |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[punsubscribe](docs/api/interfaces/IRedisClient.md#punsubscribe)

___

### quit

▸ **quit**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[quit](docs/api/interfaces/IRedisClient.md#quit)

___

### rpop

▸ **rpop**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<``null`` \| `string`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[rpop](docs/api/interfaces/IRedisClient.md#rpop)

___

### rpoplpush

▸ **rpoplpush**(`source`, `destination`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<``null`` \| `string`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[rpoplpush](docs/api/interfaces/IRedisClient.md#rpoplpush)

___

### runScript

▸ **runScript**(`scriptName`, `keys`, `args`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scriptName` | `string` |
| `keys` | (`string` \| `number`)[] |
| `args` | (`string` \| `number`)[] |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`unknown`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[runScript](docs/api/interfaces/IRedisClient.md#runscript)

___

### sadd

▸ **sadd**(`key`, `member`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `member` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`number`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[sadd](docs/api/interfaces/IRedisClient.md#sadd)

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
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<``null`` \| `string`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[set](docs/api/interfaces/IRedisClient.md#set)

___

### sismember

▸ **sismember**(`key`, `member`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `member` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`number`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[sismember](docs/api/interfaces/IRedisClient.md#sismember)

___

### smembers

▸ **smembers**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`string`[]\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[smembers](docs/api/interfaces/IRedisClient.md#smembers)

___

### srem

▸ **srem**(`key`, `member`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `member` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`number`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[srem](docs/api/interfaces/IRedisClient.md#srem)

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
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<\{ `cursor`: `string` ; `items`: `string`[]  }\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[sscan](docs/api/interfaces/IRedisClient.md#sscan)

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
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`string`[]\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[sscanAll](docs/api/interfaces/IRedisClient.md#sscanall)

___

### subscribe

▸ **subscribe**(`channel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `string` |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[subscribe](docs/api/interfaces/IRedisClient.md#subscribe)

___

### unsubscribe

▸ **unsubscribe**(`channel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `string` |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[unsubscribe](docs/api/interfaces/IRedisClient.md#unsubscribe)

___

### unwatch

▸ **unwatch**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`string`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[unwatch](docs/api/interfaces/IRedisClient.md#unwatch)

___

### updateServerVersion

▸ **updateServerVersion**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[updateServerVersion](docs/api/interfaces/IRedisClient.md#updateserverversion)

___

### validateRedisServerSupport

▸ **validateRedisServerSupport**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[validateRedisServerSupport](docs/api/interfaces/IRedisClient.md#validateredisserversupport)

___

### validateRedisVersion

▸ **validateRedisVersion**(`major`, `feature?`, `minor?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `major` | `number` | `undefined` |
| `feature` | `number` | `0` |
| `minor` | `number` | `0` |

#### Returns

`boolean`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[validateRedisVersion](docs/api/interfaces/IRedisClient.md#validateredisversion)

___

### watch

▸ **watch**(`args`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `string`[] |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`string`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[watch](docs/api/interfaces/IRedisClient.md#watch)

___

### zadd

▸ **zadd**(`key`, `score`, `member`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `score` | `number` |
| `member` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`string` \| `number`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[zadd](docs/api/interfaces/IRedisClient.md#zadd)

___

### zcard

▸ **zcard**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`number`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[zcard](docs/api/interfaces/IRedisClient.md#zcard)

___

### zpoprpush

▸ **zpoprpush**(`source`, `destination`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<``null`` \| `string`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[zpoprpush](docs/api/interfaces/IRedisClient.md#zpoprpush)

___

### zrange

▸ **zrange**(`key`, `min`, `max`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `min` | `number` |
| `max` | `number` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`string`[]\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[zrange](docs/api/interfaces/IRedisClient.md#zrange)

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
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`string`[]\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[zrangebyscore](docs/api/interfaces/IRedisClient.md#zrangebyscore)

___

### zrangebyscorewithscores

▸ **zrangebyscorewithscores**(`source`, `min`, `max`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `min` | `number` |
| `max` | `number` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`Record`\<`string`, `string`\>\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[zrangebyscorewithscores](docs/api/interfaces/IRedisClient.md#zrangebyscorewithscores)

___

### zrem

▸ **zrem**(`source`, `id`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `id` | `string` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`number`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[zrem](docs/api/interfaces/IRedisClient.md#zrem)

___

### zremrangebyscore

▸ **zremrangebyscore**(`source`, `min`, `max`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `min` | `string` \| `number` |
| `max` | `string` \| `number` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`number`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[zremrangebyscore](docs/api/interfaces/IRedisClient.md#zremrangebyscore)

___

### zrevrange

▸ **zrevrange**(`key`, `min`, `max`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `min` | `number` |
| `max` | `number` |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`string`[]\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[zrevrange](docs/api/interfaces/IRedisClient.md#zrevrange)

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
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<\{ `cursor`: `string` ; `items`: `string`[]  }\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](docs/api/interfaces/IRedisClient.md).[zscan](docs/api/interfaces/IRedisClient.md#zscan)

___

### addScript

▸ **addScript**(`name`, `content`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `content` | `string` |

#### Returns

`void`
