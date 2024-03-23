[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / RedisClientAbstract

# Class: RedisClientAbstract

## Hierarchy

- [`EventEmitter`](EventEmitter.md)\<[`TRedisClientEvent`](../README.md#tredisclientevent)\>

  ↳ **`RedisClientAbstract`**

  ↳↳ [`IoredisClient`](IoredisClient.md)

  ↳↳ [`NodeRedisClient`](NodeRedisClient.md)

## Implements

- [`IRedisClient`](../interfaces/IRedisClient.md)

## Table of contents

### Constructors

- [constructor](RedisClientAbstract.md#constructor)

### Methods

- [brpoplpush](RedisClientAbstract.md#brpoplpush)
- [del](RedisClientAbstract.md#del)
- [emit](RedisClientAbstract.md#emit)
- [end](RedisClientAbstract.md#end)
- [evalsha](RedisClientAbstract.md#evalsha)
- [flushall](RedisClientAbstract.md#flushall)
- [get](RedisClientAbstract.md#get)
- [getInfo](RedisClientAbstract.md#getinfo)
- [halt](RedisClientAbstract.md#halt)
- [hdel](RedisClientAbstract.md#hdel)
- [hget](RedisClientAbstract.md#hget)
- [hgetall](RedisClientAbstract.md#hgetall)
- [hkeys](RedisClientAbstract.md#hkeys)
- [hlen](RedisClientAbstract.md#hlen)
- [hmget](RedisClientAbstract.md#hmget)
- [hscan](RedisClientAbstract.md#hscan)
- [hscanAll](RedisClientAbstract.md#hscanall)
- [hset](RedisClientAbstract.md#hset)
- [llen](RedisClientAbstract.md#llen)
- [lmove](RedisClientAbstract.md#lmove)
- [loadScript](RedisClientAbstract.md#loadscript)
- [loadScripts](RedisClientAbstract.md#loadscripts)
- [lpoprpush](RedisClientAbstract.md#lpoprpush)
- [lrange](RedisClientAbstract.md#lrange)
- [lrem](RedisClientAbstract.md#lrem)
- [multi](RedisClientAbstract.md#multi)
- [on](RedisClientAbstract.md#on)
- [once](RedisClientAbstract.md#once)
- [psubscribe](RedisClientAbstract.md#psubscribe)
- [publish](RedisClientAbstract.md#publish)
- [punsubscribe](RedisClientAbstract.md#punsubscribe)
- [removeAllListeners](RedisClientAbstract.md#removealllisteners)
- [removeListener](RedisClientAbstract.md#removelistener)
- [rpop](RedisClientAbstract.md#rpop)
- [rpoplpush](RedisClientAbstract.md#rpoplpush)
- [runScript](RedisClientAbstract.md#runscript)
- [sadd](RedisClientAbstract.md#sadd)
- [set](RedisClientAbstract.md#set)
- [shutdown](RedisClientAbstract.md#shutdown)
- [sismember](RedisClientAbstract.md#sismember)
- [smembers](RedisClientAbstract.md#smembers)
- [srem](RedisClientAbstract.md#srem)
- [sscan](RedisClientAbstract.md#sscan)
- [sscanAll](RedisClientAbstract.md#sscanall)
- [subscribe](RedisClientAbstract.md#subscribe)
- [unsubscribe](RedisClientAbstract.md#unsubscribe)
- [unwatch](RedisClientAbstract.md#unwatch)
- [updateServerVersion](RedisClientAbstract.md#updateserverversion)
- [validateRedisServerSupport](RedisClientAbstract.md#validateredisserversupport)
- [validateRedisVersion](RedisClientAbstract.md#validateredisversion)
- [watch](RedisClientAbstract.md#watch)
- [zadd](RedisClientAbstract.md#zadd)
- [zcard](RedisClientAbstract.md#zcard)
- [zpoprpush](RedisClientAbstract.md#zpoprpush)
- [zrange](RedisClientAbstract.md#zrange)
- [zrangebyscore](RedisClientAbstract.md#zrangebyscore)
- [zrangebyscorewithscores](RedisClientAbstract.md#zrangebyscorewithscores)
- [zrem](RedisClientAbstract.md#zrem)
- [zremrangebyscore](RedisClientAbstract.md#zremrangebyscore)
- [zrevrange](RedisClientAbstract.md#zrevrange)
- [zscan](RedisClientAbstract.md#zscan)
- [addScript](RedisClientAbstract.md#addscript)

## Constructors

### constructor

• **new RedisClientAbstract**(): [`RedisClientAbstract`](RedisClientAbstract.md)

#### Returns

[`RedisClientAbstract`](RedisClientAbstract.md)

#### Inherited from

[EventEmitter](EventEmitter.md).[constructor](EventEmitter.md#constructor)

## Methods

### brpoplpush

▸ **brpoplpush**(`source`, `destination`, `timeout`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |
| `timeout` | `number` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<``null`` \| `string`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[brpoplpush](../interfaces/IRedisClient.md#brpoplpush)

___

### del

▸ **del**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `string`[] |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`number`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[del](../interfaces/IRedisClient.md#del)

___

### emit

▸ **emit**\<`E`\>(`event`, `...args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`TRedisClientEvent`](../README.md#tredisclientevent) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `...args` | `Parameters`\<[`TRedisClientEvent`](../README.md#tredisclientevent)[`E`]\> |

#### Returns

`boolean`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[emit](../interfaces/IRedisClient.md#emit)

#### Inherited from

[EventEmitter](EventEmitter.md).[emit](EventEmitter.md#emit)

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

[IRedisClient](../interfaces/IRedisClient.md).[end](../interfaces/IRedisClient.md#end)

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

[IRedisClient](../interfaces/IRedisClient.md).[evalsha](../interfaces/IRedisClient.md#evalsha)

___

### flushall

▸ **flushall**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`string`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[flushall](../interfaces/IRedisClient.md#flushall)

___

### get

▸ **get**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<``null`` \| `string`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[get](../interfaces/IRedisClient.md#get)

___

### getInfo

▸ **getInfo**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`string`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[getInfo](../interfaces/IRedisClient.md#getinfo)

___

### halt

▸ **halt**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[halt](../interfaces/IRedisClient.md#halt)

___

### hdel

▸ **hdel**(`key`, `fields`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `fields` | `string` \| `string`[] |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`number`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[hdel](../interfaces/IRedisClient.md#hdel)

___

### hget

▸ **hget**(`key`, `field`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `field` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<``null`` \| `string`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[hget](../interfaces/IRedisClient.md#hget)

___

### hgetall

▸ **hgetall**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`Record`\<`string`, `string`\>\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[hgetall](../interfaces/IRedisClient.md#hgetall)

___

### hkeys

▸ **hkeys**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`string`[]\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[hkeys](../interfaces/IRedisClient.md#hkeys)

___

### hlen

▸ **hlen**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`number`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[hlen](../interfaces/IRedisClient.md#hlen)

___

### hmget

▸ **hmget**(`source`, `keys`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `keys` | `string`[] |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<(``null`` \| `string`)[]\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[hmget](../interfaces/IRedisClient.md#hmget)

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<\{ `cursor`: `string` ; `result`: `Record`\<`string`, `string`\>  }\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[hscan](../interfaces/IRedisClient.md#hscan)

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`Record`\<`string`, `string`\>\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[hscanAll](../interfaces/IRedisClient.md#hscanall)

___

### hset

▸ **hset**(`key`, `field`, `value`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `field` | `string` |
| `value` | `string` \| `number` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`number`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[hset](../interfaces/IRedisClient.md#hset)

___

### llen

▸ **llen**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`number`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[llen](../interfaces/IRedisClient.md#llen)

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<``null`` \| `string`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[lmove](../interfaces/IRedisClient.md#lmove)

___

### loadScript

▸ **loadScript**(`script`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `script` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`string`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[loadScript](../interfaces/IRedisClient.md#loadscript)

___

### loadScripts

▸ **loadScripts**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[loadScripts](../interfaces/IRedisClient.md#loadscripts)

___

### lpoprpush

▸ **lpoprpush**(`source`, `destination`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<``null`` \| `string`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[lpoprpush](../interfaces/IRedisClient.md#lpoprpush)

___

### lrange

▸ **lrange**(`key`, `start`, `stop`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `start` | `number` |
| `stop` | `number` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`string`[]\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[lrange](../interfaces/IRedisClient.md#lrange)

___

### lrem

▸ **lrem**(`key`, `count`, `element`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `count` | `number` |
| `element` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`number`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[lrem](../interfaces/IRedisClient.md#lrem)

___

### multi

▸ **multi**(): [`IRedisTransaction`](../interfaces/IRedisTransaction.md)

#### Returns

[`IRedisTransaction`](../interfaces/IRedisTransaction.md)

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[multi](../interfaces/IRedisClient.md#multi)

___

### on

▸ **on**\<`E`\>(`event`, `listener`): [`RedisClientAbstract`](RedisClientAbstract.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`TRedisClientEvent`](../README.md#tredisclientevent) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | [`TRedisClientEvent`](../README.md#tredisclientevent)[`E`] |

#### Returns

[`RedisClientAbstract`](RedisClientAbstract.md)

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[on](../interfaces/IRedisClient.md#on)

#### Inherited from

[EventEmitter](EventEmitter.md).[on](EventEmitter.md#on)

___

### once

▸ **once**\<`E`\>(`event`, `listener`): [`RedisClientAbstract`](RedisClientAbstract.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`TRedisClientEvent`](../README.md#tredisclientevent) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | [`TRedisClientEvent`](../README.md#tredisclientevent)[`E`] |

#### Returns

[`RedisClientAbstract`](RedisClientAbstract.md)

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[once](../interfaces/IRedisClient.md#once)

#### Inherited from

[EventEmitter](EventEmitter.md).[once](EventEmitter.md#once)

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

[IRedisClient](../interfaces/IRedisClient.md).[psubscribe](../interfaces/IRedisClient.md#psubscribe)

___

### publish

▸ **publish**(`channel`, `message`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `string` |
| `message` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`number`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[publish](../interfaces/IRedisClient.md#publish)

___

### punsubscribe

▸ **punsubscribe**(`channel?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel?` | `string` |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[punsubscribe](../interfaces/IRedisClient.md#punsubscribe)

___

### removeAllListeners

▸ **removeAllListeners**\<`E`\>(`event?`): [`RedisClientAbstract`](RedisClientAbstract.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`TRedisClientEvent`](../README.md#tredisclientevent) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `Extract`\<`E`, `string`\> |

#### Returns

[`RedisClientAbstract`](RedisClientAbstract.md)

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[removeAllListeners](../interfaces/IRedisClient.md#removealllisteners)

#### Inherited from

[EventEmitter](EventEmitter.md).[removeAllListeners](EventEmitter.md#removealllisteners)

___

### removeListener

▸ **removeListener**\<`E`\>(`event`, `listener`): [`RedisClientAbstract`](RedisClientAbstract.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`TRedisClientEvent`](../README.md#tredisclientevent) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | [`TRedisClientEvent`](../README.md#tredisclientevent)[`E`] |

#### Returns

[`RedisClientAbstract`](RedisClientAbstract.md)

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[removeListener](../interfaces/IRedisClient.md#removelistener)

#### Inherited from

[EventEmitter](EventEmitter.md).[removeListener](EventEmitter.md#removelistener)

___

### rpop

▸ **rpop**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<``null`` \| `string`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[rpop](../interfaces/IRedisClient.md#rpop)

___

### rpoplpush

▸ **rpoplpush**(`source`, `destination`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<``null`` \| `string`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[rpoplpush](../interfaces/IRedisClient.md#rpoplpush)

___

### runScript

▸ **runScript**(`scriptName`, `keys`, `args`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scriptName` | `string` |
| `keys` | (`string` \| `number`)[] |
| `args` | (`string` \| `number`)[] |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`unknown`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[runScript](../interfaces/IRedisClient.md#runscript)

___

### sadd

▸ **sadd**(`key`, `member`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `member` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`number`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[sadd](../interfaces/IRedisClient.md#sadd)

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<``null`` \| `string`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[set](../interfaces/IRedisClient.md#set)

___

### shutdown

▸ **shutdown**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[shutdown](../interfaces/IRedisClient.md#shutdown)

___

### sismember

▸ **sismember**(`key`, `member`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `member` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`number`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[sismember](../interfaces/IRedisClient.md#sismember)

___

### smembers

▸ **smembers**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`string`[]\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[smembers](../interfaces/IRedisClient.md#smembers)

___

### srem

▸ **srem**(`key`, `member`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `member` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`number`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[srem](../interfaces/IRedisClient.md#srem)

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<\{ `cursor`: `string` ; `items`: `string`[]  }\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[sscan](../interfaces/IRedisClient.md#sscan)

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`string`[]\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[sscanAll](../interfaces/IRedisClient.md#sscanall)

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

[IRedisClient](../interfaces/IRedisClient.md).[subscribe](../interfaces/IRedisClient.md#subscribe)

___

### unsubscribe

▸ **unsubscribe**(`channel?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel?` | `string` |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[unsubscribe](../interfaces/IRedisClient.md#unsubscribe)

___

### unwatch

▸ **unwatch**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`string`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[unwatch](../interfaces/IRedisClient.md#unwatch)

___

### updateServerVersion

▸ **updateServerVersion**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[updateServerVersion](../interfaces/IRedisClient.md#updateserverversion)

___

### validateRedisServerSupport

▸ **validateRedisServerSupport**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[validateRedisServerSupport](../interfaces/IRedisClient.md#validateredisserversupport)

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

[IRedisClient](../interfaces/IRedisClient.md).[validateRedisVersion](../interfaces/IRedisClient.md#validateredisversion)

___

### watch

▸ **watch**(`args`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `string`[] |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`string`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[watch](../interfaces/IRedisClient.md#watch)

___

### zadd

▸ **zadd**(`key`, `score`, `member`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `score` | `number` |
| `member` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`string` \| `number`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[zadd](../interfaces/IRedisClient.md#zadd)

___

### zcard

▸ **zcard**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`number`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[zcard](../interfaces/IRedisClient.md#zcard)

___

### zpoprpush

▸ **zpoprpush**(`source`, `destination`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<``null`` \| `string`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[zpoprpush](../interfaces/IRedisClient.md#zpoprpush)

___

### zrange

▸ **zrange**(`key`, `min`, `max`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `min` | `number` |
| `max` | `number` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`string`[]\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[zrange](../interfaces/IRedisClient.md#zrange)

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`string`[]\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[zrangebyscore](../interfaces/IRedisClient.md#zrangebyscore)

___

### zrangebyscorewithscores

▸ **zrangebyscorewithscores**(`source`, `min`, `max`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `min` | `number` |
| `max` | `number` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`Record`\<`string`, `string`\>\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[zrangebyscorewithscores](../interfaces/IRedisClient.md#zrangebyscorewithscores)

___

### zrem

▸ **zrem**(`source`, `id`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `id` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`number`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[zrem](../interfaces/IRedisClient.md#zrem)

___

### zremrangebyscore

▸ **zremrangebyscore**(`source`, `min`, `max`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `min` | `string` \| `number` |
| `max` | `string` \| `number` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`number`\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[zremrangebyscore](../interfaces/IRedisClient.md#zremrangebyscore)

___

### zrevrange

▸ **zrevrange**(`key`, `min`, `max`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `min` | `number` |
| `max` | `number` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`string`[]\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[zrevrange](../interfaces/IRedisClient.md#zrevrange)

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<\{ `cursor`: `string` ; `items`: `string`[]  }\> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[zscan](../interfaces/IRedisClient.md#zscan)

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
