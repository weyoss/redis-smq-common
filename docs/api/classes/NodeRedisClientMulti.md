[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API Reference](../README.md) / NodeRedisClientMulti

# Class: NodeRedisClientMulti

## Implements

- [`IRedisTransaction`](../interfaces/IRedisTransaction.md)

## Table of contents

### Constructors

- [constructor](NodeRedisClientMulti.md#constructor)

### Methods

- [del](NodeRedisClientMulti.md#del)
- [exec](NodeRedisClientMulti.md#exec)
- [expire](NodeRedisClientMulti.md#expire)
- [hdel](NodeRedisClientMulti.md#hdel)
- [hincrby](NodeRedisClientMulti.md#hincrby)
- [hset](NodeRedisClientMulti.md#hset)
- [lpop](NodeRedisClientMulti.md#lpop)
- [lpush](NodeRedisClientMulti.md#lpush)
- [lrem](NodeRedisClientMulti.md#lrem)
- [ltrim](NodeRedisClientMulti.md#ltrim)
- [pexpire](NodeRedisClientMulti.md#pexpire)
- [rpop](NodeRedisClientMulti.md#rpop)
- [rpoplpush](NodeRedisClientMulti.md#rpoplpush)
- [rpush](NodeRedisClientMulti.md#rpush)
- [sadd](NodeRedisClientMulti.md#sadd)
- [srem](NodeRedisClientMulti.md#srem)
- [zadd](NodeRedisClientMulti.md#zadd)
- [zrem](NodeRedisClientMulti.md#zrem)

## Constructors

### constructor

• **new NodeRedisClientMulti**(`client`): [`NodeRedisClientMulti`](NodeRedisClientMulti.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`TRedisClientNodeRedis`](../README.md#tredisclientnoderedis) |

#### Returns

[`NodeRedisClientMulti`](NodeRedisClientMulti.md)

## Methods

### del

▸ **del**(`key`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `string`[] |

#### Returns

`this`

#### Implementation of

[IRedisTransaction](../interfaces/IRedisTransaction.md).[del](../interfaces/IRedisTransaction.md#del)

___

### exec

▸ **exec**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`unknown`[]\> |

#### Returns

`void`

#### Implementation of

[IRedisTransaction](../interfaces/IRedisTransaction.md).[exec](../interfaces/IRedisTransaction.md#exec)

___

### expire

▸ **expire**(`key`, `secs`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `secs` | `number` |

#### Returns

`this`

#### Implementation of

[IRedisTransaction](../interfaces/IRedisTransaction.md).[expire](../interfaces/IRedisTransaction.md#expire)

___

### hdel

▸ **hdel**(`key`, `field`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `field` | `string` \| `string`[] |

#### Returns

`this`

#### Implementation of

[IRedisTransaction](../interfaces/IRedisTransaction.md).[hdel](../interfaces/IRedisTransaction.md#hdel)

___

### hincrby

▸ **hincrby**(`key`, `field`, `by`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `field` | `string` |
| `by` | `number` |

#### Returns

`this`

#### Implementation of

[IRedisTransaction](../interfaces/IRedisTransaction.md).[hincrby](../interfaces/IRedisTransaction.md#hincrby)

___

### hset

▸ **hset**(`key`, `field`, `value`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `field` | `string` |
| `value` | `string` \| `number` |

#### Returns

`this`

#### Implementation of

[IRedisTransaction](../interfaces/IRedisTransaction.md).[hset](../interfaces/IRedisTransaction.md#hset)

___

### lpop

▸ **lpop**(`key`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`this`

#### Implementation of

[IRedisTransaction](../interfaces/IRedisTransaction.md).[lpop](../interfaces/IRedisTransaction.md#lpop)

___

### lpush

▸ **lpush**(`key`, `element`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `element` | `string` |

#### Returns

`this`

#### Implementation of

[IRedisTransaction](../interfaces/IRedisTransaction.md).[lpush](../interfaces/IRedisTransaction.md#lpush)

___

### lrem

▸ **lrem**(`key`, `count`, `element`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `count` | `number` |
| `element` | `string` |

#### Returns

`this`

#### Implementation of

[IRedisTransaction](../interfaces/IRedisTransaction.md).[lrem](../interfaces/IRedisTransaction.md#lrem)

___

### ltrim

▸ **ltrim**(`key`, `start`, `stop`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `start` | `number` |
| `stop` | `number` |

#### Returns

`this`

#### Implementation of

[IRedisTransaction](../interfaces/IRedisTransaction.md).[ltrim](../interfaces/IRedisTransaction.md#ltrim)

___

### pexpire

▸ **pexpire**(`key`, `millis`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `millis` | `number` |

#### Returns

`this`

#### Implementation of

[IRedisTransaction](../interfaces/IRedisTransaction.md).[pexpire](../interfaces/IRedisTransaction.md#pexpire)

___

### rpop

▸ **rpop**(`key`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`this`

#### Implementation of

[IRedisTransaction](../interfaces/IRedisTransaction.md).[rpop](../interfaces/IRedisTransaction.md#rpop)

___

### rpoplpush

▸ **rpoplpush**(`source`, `destination`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |

#### Returns

`this`

#### Implementation of

[IRedisTransaction](../interfaces/IRedisTransaction.md).[rpoplpush](../interfaces/IRedisTransaction.md#rpoplpush)

___

### rpush

▸ **rpush**(`key`, `element`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `element` | `string` |

#### Returns

`this`

#### Implementation of

[IRedisTransaction](../interfaces/IRedisTransaction.md).[rpush](../interfaces/IRedisTransaction.md#rpush)

___

### sadd

▸ **sadd**(`key`, `element`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `element` | `string` |

#### Returns

`this`

#### Implementation of

[IRedisTransaction](../interfaces/IRedisTransaction.md).[sadd](../interfaces/IRedisTransaction.md#sadd)

___

### srem

▸ **srem**(`key`, `element`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `element` | `string` \| `string`[] |

#### Returns

`this`

#### Implementation of

[IRedisTransaction](../interfaces/IRedisTransaction.md).[srem](../interfaces/IRedisTransaction.md#srem)

___

### zadd

▸ **zadd**(`key`, `score`, `element`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `score` | `number` |
| `element` | `string` |

#### Returns

`this`

#### Implementation of

[IRedisTransaction](../interfaces/IRedisTransaction.md).[zadd](../interfaces/IRedisTransaction.md#zadd)

___

### zrem

▸ **zrem**(`key`, `element`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `element` | `string` \| `string`[] |

#### Returns

`this`

#### Implementation of

[IRedisTransaction](../interfaces/IRedisTransaction.md).[zrem](../interfaces/IRedisTransaction.md#zrem)
