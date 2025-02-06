[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API Reference](../README.md) / NodeRedisClient

# Class: NodeRedisClient

## Hierarchy

- [`RedisClientAbstract`](RedisClientAbstract.md)

  ↳ **`NodeRedisClient`**

## Table of contents

### Constructors

- [constructor](NodeRedisClient.md#constructor)

### Methods

- [brpoplpush](NodeRedisClient.md#brpoplpush)
- [del](NodeRedisClient.md#del)
- [emit](NodeRedisClient.md#emit)
- [end](NodeRedisClient.md#end)
- [evalsha](NodeRedisClient.md#evalsha)
- [flushall](NodeRedisClient.md#flushall)
- [get](NodeRedisClient.md#get)
- [getInfo](NodeRedisClient.md#getinfo)
- [halt](NodeRedisClient.md#halt)
- [hdel](NodeRedisClient.md#hdel)
- [hget](NodeRedisClient.md#hget)
- [hgetall](NodeRedisClient.md#hgetall)
- [hkeys](NodeRedisClient.md#hkeys)
- [hlen](NodeRedisClient.md#hlen)
- [hmget](NodeRedisClient.md#hmget)
- [hscan](NodeRedisClient.md#hscan)
- [hscanAll](NodeRedisClient.md#hscanall)
- [hset](NodeRedisClient.md#hset)
- [llen](NodeRedisClient.md#llen)
- [lmove](NodeRedisClient.md#lmove)
- [loadScript](NodeRedisClient.md#loadscript)
- [loadScripts](NodeRedisClient.md#loadscripts)
- [lpoprpush](NodeRedisClient.md#lpoprpush)
- [lrange](NodeRedisClient.md#lrange)
- [lrem](NodeRedisClient.md#lrem)
- [multi](NodeRedisClient.md#multi)
- [on](NodeRedisClient.md#on)
- [once](NodeRedisClient.md#once)
- [psubscribe](NodeRedisClient.md#psubscribe)
- [publish](NodeRedisClient.md#publish)
- [punsubscribe](NodeRedisClient.md#punsubscribe)
- [removeAllListeners](NodeRedisClient.md#removealllisteners)
- [removeListener](NodeRedisClient.md#removelistener)
- [rpop](NodeRedisClient.md#rpop)
- [rpoplpush](NodeRedisClient.md#rpoplpush)
- [runScript](NodeRedisClient.md#runscript)
- [sadd](NodeRedisClient.md#sadd)
- [set](NodeRedisClient.md#set)
- [shutdown](NodeRedisClient.md#shutdown)
- [sismember](NodeRedisClient.md#sismember)
- [smembers](NodeRedisClient.md#smembers)
- [srem](NodeRedisClient.md#srem)
- [sscan](NodeRedisClient.md#sscan)
- [sscanAll](NodeRedisClient.md#sscanall)
- [subscribe](NodeRedisClient.md#subscribe)
- [unsubscribe](NodeRedisClient.md#unsubscribe)
- [unwatch](NodeRedisClient.md#unwatch)
- [updateServerVersion](NodeRedisClient.md#updateserverversion)
- [validateRedisServerSupport](NodeRedisClient.md#validateredisserversupport)
- [validateRedisVersion](NodeRedisClient.md#validateredisversion)
- [watch](NodeRedisClient.md#watch)
- [zadd](NodeRedisClient.md#zadd)
- [zcard](NodeRedisClient.md#zcard)
- [zpoprpush](NodeRedisClient.md#zpoprpush)
- [zrange](NodeRedisClient.md#zrange)
- [zrangebyscore](NodeRedisClient.md#zrangebyscore)
- [zrangebyscorewithscores](NodeRedisClient.md#zrangebyscorewithscores)
- [zrem](NodeRedisClient.md#zrem)
- [zremrangebyscore](NodeRedisClient.md#zremrangebyscore)
- [zrevrange](NodeRedisClient.md#zrevrange)
- [zscan](NodeRedisClient.md#zscan)
- [addScript](NodeRedisClient.md#addscript)

## Constructors

### constructor

• **new NodeRedisClient**(`config?`): [`NodeRedisClient`](NodeRedisClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `RedisClientOptions`\<`RedisModules`, `RedisFunctions`, `RedisScripts`\> |

#### Returns

[`NodeRedisClient`](NodeRedisClient.md)

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[constructor](RedisClientAbstract.md#constructor)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[brpoplpush](RedisClientAbstract.md#brpoplpush)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[del](RedisClientAbstract.md#del)

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

#### Inherited from

[RedisClientAbstract](RedisClientAbstract.md).[emit](RedisClientAbstract.md#emit)

___

### end

▸ **end**(): `void`

#### Returns

`void`

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[end](RedisClientAbstract.md#end)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[evalsha](RedisClientAbstract.md#evalsha)

___

### flushall

▸ **flushall**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`string`\> |

#### Returns

`void`

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[flushall](RedisClientAbstract.md#flushall)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[get](RedisClientAbstract.md#get)

___

### getInfo

▸ **getInfo**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`string`\> |

#### Returns

`void`

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[getInfo](RedisClientAbstract.md#getinfo)

___

### halt

▸ **halt**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[halt](RedisClientAbstract.md#halt)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[hdel](RedisClientAbstract.md#hdel)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[hget](RedisClientAbstract.md#hget)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[hgetall](RedisClientAbstract.md#hgetall)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[hkeys](RedisClientAbstract.md#hkeys)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[hlen](RedisClientAbstract.md#hlen)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[hmget](RedisClientAbstract.md#hmget)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[hscan](RedisClientAbstract.md#hscan)

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

#### Inherited from

[RedisClientAbstract](RedisClientAbstract.md).[hscanAll](RedisClientAbstract.md#hscanall)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[hset](RedisClientAbstract.md#hset)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[llen](RedisClientAbstract.md#llen)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[lmove](RedisClientAbstract.md#lmove)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[loadScript](RedisClientAbstract.md#loadscript)

___

### loadScripts

▸ **loadScripts**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`

#### Inherited from

[RedisClientAbstract](RedisClientAbstract.md).[loadScripts](RedisClientAbstract.md#loadscripts)

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

#### Inherited from

[RedisClientAbstract](RedisClientAbstract.md).[lpoprpush](RedisClientAbstract.md#lpoprpush)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[lrange](RedisClientAbstract.md#lrange)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[lrem](RedisClientAbstract.md#lrem)

___

### multi

▸ **multi**(): [`NodeRedisClientMulti`](NodeRedisClientMulti.md)

#### Returns

[`NodeRedisClientMulti`](NodeRedisClientMulti.md)

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[multi](RedisClientAbstract.md#multi)

___

### on

▸ **on**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `unknown`[]) => `unknown` |

#### Returns

`this`

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[on](RedisClientAbstract.md#on)

___

### once

▸ **once**\<`E`\>(`event`, `listener`): `this`

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

`this`

#### Inherited from

[RedisClientAbstract](RedisClientAbstract.md).[once](RedisClientAbstract.md#once)

___

### psubscribe

▸ **psubscribe**(`pattern`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` |

#### Returns

`void`

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[psubscribe](RedisClientAbstract.md#psubscribe)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[publish](RedisClientAbstract.md#publish)

___

### punsubscribe

▸ **punsubscribe**(`channel?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel?` | `string` |

#### Returns

`void`

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[punsubscribe](RedisClientAbstract.md#punsubscribe)

___

### removeAllListeners

▸ **removeAllListeners**\<`E`\>(`event?`): `this`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`TRedisClientEvent`](../README.md#tredisclientevent) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `Extract`\<`E`, `string`\> |

#### Returns

`this`

#### Inherited from

[RedisClientAbstract](RedisClientAbstract.md).[removeAllListeners](RedisClientAbstract.md#removealllisteners)

___

### removeListener

▸ **removeListener**\<`E`\>(`event`, `listener`): `this`

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

`this`

#### Inherited from

[RedisClientAbstract](RedisClientAbstract.md).[removeListener](RedisClientAbstract.md#removelistener)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[rpop](RedisClientAbstract.md#rpop)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[rpoplpush](RedisClientAbstract.md#rpoplpush)

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

#### Inherited from

[RedisClientAbstract](RedisClientAbstract.md).[runScript](RedisClientAbstract.md#runscript)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[sadd](RedisClientAbstract.md#sadd)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[set](RedisClientAbstract.md#set)

___

### shutdown

▸ **shutdown**(`cb?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[shutdown](RedisClientAbstract.md#shutdown)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[sismember](RedisClientAbstract.md#sismember)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[smembers](RedisClientAbstract.md#smembers)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[srem](RedisClientAbstract.md#srem)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[sscan](RedisClientAbstract.md#sscan)

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

#### Inherited from

[RedisClientAbstract](RedisClientAbstract.md).[sscanAll](RedisClientAbstract.md#sscanall)

___

### subscribe

▸ **subscribe**(`channel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `string` |

#### Returns

`void`

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[subscribe](RedisClientAbstract.md#subscribe)

___

### unsubscribe

▸ **unsubscribe**(`channel?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel?` | `string` |

#### Returns

`void`

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[unsubscribe](RedisClientAbstract.md#unsubscribe)

___

### unwatch

▸ **unwatch**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`string`\> |

#### Returns

`void`

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[unwatch](RedisClientAbstract.md#unwatch)

___

### updateServerVersion

▸ **updateServerVersion**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`

#### Inherited from

[RedisClientAbstract](RedisClientAbstract.md).[updateServerVersion](RedisClientAbstract.md#updateserverversion)

___

### validateRedisServerSupport

▸ **validateRedisServerSupport**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`

#### Inherited from

[RedisClientAbstract](RedisClientAbstract.md).[validateRedisServerSupport](RedisClientAbstract.md#validateredisserversupport)

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

#### Inherited from

[RedisClientAbstract](RedisClientAbstract.md).[validateRedisVersion](RedisClientAbstract.md#validateredisversion)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[watch](RedisClientAbstract.md#watch)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[zadd](RedisClientAbstract.md#zadd)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[zcard](RedisClientAbstract.md#zcard)

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

#### Inherited from

[RedisClientAbstract](RedisClientAbstract.md).[zpoprpush](RedisClientAbstract.md#zpoprpush)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[zrange](RedisClientAbstract.md#zrange)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[zrangebyscore](RedisClientAbstract.md#zrangebyscore)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[zrangebyscorewithscores](RedisClientAbstract.md#zrangebyscorewithscores)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[zrem](RedisClientAbstract.md#zrem)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[zremrangebyscore](RedisClientAbstract.md#zremrangebyscore)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[zrevrange](RedisClientAbstract.md#zrevrange)

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

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[zscan](RedisClientAbstract.md#zscan)

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

#### Inherited from

[RedisClientAbstract](RedisClientAbstract.md).[addScript](RedisClientAbstract.md#addscript)
