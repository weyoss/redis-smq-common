[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / IoredisClient

# Class: IoredisClient

## Hierarchy

- [`RedisClientAbstract`](RedisClientAbstract.md)

  ↳ **`IoredisClient`**

## Table of contents

### Constructors

- [constructor](IoredisClient.md#constructor)

### Methods

- [brpoplpush](IoredisClient.md#brpoplpush)
- [del](IoredisClient.md#del)
- [emit](IoredisClient.md#emit)
- [end](IoredisClient.md#end)
- [evalsha](IoredisClient.md#evalsha)
- [flushall](IoredisClient.md#flushall)
- [get](IoredisClient.md#get)
- [getInfo](IoredisClient.md#getinfo)
- [halt](IoredisClient.md#halt)
- [hdel](IoredisClient.md#hdel)
- [hget](IoredisClient.md#hget)
- [hgetall](IoredisClient.md#hgetall)
- [hkeys](IoredisClient.md#hkeys)
- [hlen](IoredisClient.md#hlen)
- [hmget](IoredisClient.md#hmget)
- [hscan](IoredisClient.md#hscan)
- [hscanAll](IoredisClient.md#hscanall)
- [hset](IoredisClient.md#hset)
- [llen](IoredisClient.md#llen)
- [lmove](IoredisClient.md#lmove)
- [loadScript](IoredisClient.md#loadscript)
- [loadScripts](IoredisClient.md#loadscripts)
- [lpoprpush](IoredisClient.md#lpoprpush)
- [lrange](IoredisClient.md#lrange)
- [lrem](IoredisClient.md#lrem)
- [multi](IoredisClient.md#multi)
- [on](IoredisClient.md#on)
- [once](IoredisClient.md#once)
- [psubscribe](IoredisClient.md#psubscribe)
- [publish](IoredisClient.md#publish)
- [punsubscribe](IoredisClient.md#punsubscribe)
- [removeAllListeners](IoredisClient.md#removealllisteners)
- [removeListener](IoredisClient.md#removelistener)
- [rpop](IoredisClient.md#rpop)
- [rpoplpush](IoredisClient.md#rpoplpush)
- [runScript](IoredisClient.md#runscript)
- [sadd](IoredisClient.md#sadd)
- [set](IoredisClient.md#set)
- [shutdown](IoredisClient.md#shutdown)
- [sismember](IoredisClient.md#sismember)
- [smembers](IoredisClient.md#smembers)
- [srem](IoredisClient.md#srem)
- [sscan](IoredisClient.md#sscan)
- [sscanAll](IoredisClient.md#sscanall)
- [subscribe](IoredisClient.md#subscribe)
- [unsubscribe](IoredisClient.md#unsubscribe)
- [unwatch](IoredisClient.md#unwatch)
- [updateServerVersion](IoredisClient.md#updateserverversion)
- [validateRedisServerSupport](IoredisClient.md#validateredisserversupport)
- [validateRedisVersion](IoredisClient.md#validateredisversion)
- [watch](IoredisClient.md#watch)
- [zadd](IoredisClient.md#zadd)
- [zcard](IoredisClient.md#zcard)
- [zpoprpush](IoredisClient.md#zpoprpush)
- [zrange](IoredisClient.md#zrange)
- [zrangebyscore](IoredisClient.md#zrangebyscore)
- [zrangebyscorewithscores](IoredisClient.md#zrangebyscorewithscores)
- [zrem](IoredisClient.md#zrem)
- [zremrangebyscore](IoredisClient.md#zremrangebyscore)
- [zrevrange](IoredisClient.md#zrevrange)
- [zscan](IoredisClient.md#zscan)
- [addScript](IoredisClient.md#addscript)

## Constructors

### constructor

• **new IoredisClient**(`config?`): [`IoredisClient`](IoredisClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `RedisOptions` |

#### Returns

[`IoredisClient`](IoredisClient.md)

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

▸ **multi**(): [`IoredisClientMulti`](IoredisClientMulti.md)

#### Returns

[`IoredisClientMulti`](IoredisClientMulti.md)

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[multi](RedisClientAbstract.md#multi)

___

### on

▸ **on**(`event`, `listener`): [`IoredisClient`](IoredisClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `unknown`[]) => `unknown` |

#### Returns

[`IoredisClient`](IoredisClient.md)

#### Overrides

[RedisClientAbstract](RedisClientAbstract.md).[on](RedisClientAbstract.md#on)

___

### once

▸ **once**\<`E`\>(`event`, `listener`): [`IoredisClient`](IoredisClient.md)

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

[`IoredisClient`](IoredisClient.md)

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

▸ **removeAllListeners**\<`E`\>(`event?`): [`IoredisClient`](IoredisClient.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`TRedisClientEvent`](../README.md#tredisclientevent) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `Extract`\<`E`, `string`\> |

#### Returns

[`IoredisClient`](IoredisClient.md)

#### Inherited from

[RedisClientAbstract](RedisClientAbstract.md).[removeAllListeners](RedisClientAbstract.md#removealllisteners)

___

### removeListener

▸ **removeListener**\<`E`\>(`event`, `listener`): [`IoredisClient`](IoredisClient.md)

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

[`IoredisClient`](IoredisClient.md)

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
