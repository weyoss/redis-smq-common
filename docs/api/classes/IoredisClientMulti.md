[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / IoredisClientMulti

# Class: IoredisClientMulti

## Implements

- [`IRedisTransaction`](../interfaces/IRedisTransaction.md)

## Table of contents

### Constructors

- [constructor](IoredisClientMulti.md#constructor)

### Methods

- [del](IoredisClientMulti.md#del)
- [exec](IoredisClientMulti.md#exec)
- [expire](IoredisClientMulti.md#expire)
- [hdel](IoredisClientMulti.md#hdel)
- [hincrby](IoredisClientMulti.md#hincrby)
- [hset](IoredisClientMulti.md#hset)
- [lpop](IoredisClientMulti.md#lpop)
- [lpush](IoredisClientMulti.md#lpush)
- [lrem](IoredisClientMulti.md#lrem)
- [ltrim](IoredisClientMulti.md#ltrim)
- [pexpire](IoredisClientMulti.md#pexpire)
- [rpop](IoredisClientMulti.md#rpop)
- [rpoplpush](IoredisClientMulti.md#rpoplpush)
- [rpush](IoredisClientMulti.md#rpush)
- [sadd](IoredisClientMulti.md#sadd)
- [srem](IoredisClientMulti.md#srem)
- [zadd](IoredisClientMulti.md#zadd)
- [zrem](IoredisClientMulti.md#zrem)

## Constructors

### constructor

• **new IoredisClientMulti**(`client`): [`IoredisClientMulti`](IoredisClientMulti.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `Redis` |

#### Returns

[`IoredisClientMulti`](IoredisClientMulti.md)

## Methods

### del

▸ **del**(`key`): [`IoredisClientMulti`](IoredisClientMulti.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `string`[] |

#### Returns

[`IoredisClientMulti`](IoredisClientMulti.md)

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

▸ **expire**(`key`, `secs`): [`IoredisClientMulti`](IoredisClientMulti.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `secs` | `number` |

#### Returns

[`IoredisClientMulti`](IoredisClientMulti.md)

#### Implementation of

[IRedisTransaction](../interfaces/IRedisTransaction.md).[expire](../interfaces/IRedisTransaction.md#expire)

___

### hdel

▸ **hdel**(`key`, `field`): [`IoredisClientMulti`](IoredisClientMulti.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `field` | `string` \| `string`[] |

#### Returns

[`IoredisClientMulti`](IoredisClientMulti.md)

#### Implementation of

[IRedisTransaction](../interfaces/IRedisTransaction.md).[hdel](../interfaces/IRedisTransaction.md#hdel)

___

### hincrby

▸ **hincrby**(`key`, `field`, `by`): [`IoredisClientMulti`](IoredisClientMulti.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `field` | `string` |
| `by` | `number` |

#### Returns

[`IoredisClientMulti`](IoredisClientMulti.md)

#### Implementation of

[IRedisTransaction](../interfaces/IRedisTransaction.md).[hincrby](../interfaces/IRedisTransaction.md#hincrby)

___

### hset

▸ **hset**(`key`, `field`, `value`): [`IoredisClientMulti`](IoredisClientMulti.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `field` | `string` |
| `value` | `string` \| `number` |

#### Returns

[`IoredisClientMulti`](IoredisClientMulti.md)

#### Implementation of

[IRedisTransaction](../interfaces/IRedisTransaction.md).[hset](../interfaces/IRedisTransaction.md#hset)

___

### lpop

▸ **lpop**(`key`): [`IoredisClientMulti`](IoredisClientMulti.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`IoredisClientMulti`](IoredisClientMulti.md)

#### Implementation of

[IRedisTransaction](../interfaces/IRedisTransaction.md).[lpop](../interfaces/IRedisTransaction.md#lpop)

___

### lpush

▸ **lpush**(`key`, `element`): [`IoredisClientMulti`](IoredisClientMulti.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `element` | `string` |

#### Returns

[`IoredisClientMulti`](IoredisClientMulti.md)

#### Implementation of

[IRedisTransaction](../interfaces/IRedisTransaction.md).[lpush](../interfaces/IRedisTransaction.md#lpush)

___

### lrem

▸ **lrem**(`key`, `count`, `element`): [`IoredisClientMulti`](IoredisClientMulti.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `count` | `number` |
| `element` | `string` |

#### Returns

[`IoredisClientMulti`](IoredisClientMulti.md)

#### Implementation of

[IRedisTransaction](../interfaces/IRedisTransaction.md).[lrem](../interfaces/IRedisTransaction.md#lrem)

___

### ltrim

▸ **ltrim**(`key`, `start`, `stop`): [`IoredisClientMulti`](IoredisClientMulti.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `start` | `number` |
| `stop` | `number` |

#### Returns

[`IoredisClientMulti`](IoredisClientMulti.md)

#### Implementation of

[IRedisTransaction](../interfaces/IRedisTransaction.md).[ltrim](../interfaces/IRedisTransaction.md#ltrim)

___

### pexpire

▸ **pexpire**(`key`, `millis`): [`IoredisClientMulti`](IoredisClientMulti.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `millis` | `number` |

#### Returns

[`IoredisClientMulti`](IoredisClientMulti.md)

#### Implementation of

[IRedisTransaction](../interfaces/IRedisTransaction.md).[pexpire](../interfaces/IRedisTransaction.md#pexpire)

___

### rpop

▸ **rpop**(`key`): [`IoredisClientMulti`](IoredisClientMulti.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`IoredisClientMulti`](IoredisClientMulti.md)

#### Implementation of

[IRedisTransaction](../interfaces/IRedisTransaction.md).[rpop](../interfaces/IRedisTransaction.md#rpop)

___

### rpoplpush

▸ **rpoplpush**(`source`, `destination`): [`IoredisClientMulti`](IoredisClientMulti.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |

#### Returns

[`IoredisClientMulti`](IoredisClientMulti.md)

#### Implementation of

[IRedisTransaction](../interfaces/IRedisTransaction.md).[rpoplpush](../interfaces/IRedisTransaction.md#rpoplpush)

___

### rpush

▸ **rpush**(`key`, `element`): [`IoredisClientMulti`](IoredisClientMulti.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `element` | `string` |

#### Returns

[`IoredisClientMulti`](IoredisClientMulti.md)

#### Implementation of

[IRedisTransaction](../interfaces/IRedisTransaction.md).[rpush](../interfaces/IRedisTransaction.md#rpush)

___

### sadd

▸ **sadd**(`key`, `element`): [`IoredisClientMulti`](IoredisClientMulti.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `element` | `string` |

#### Returns

[`IoredisClientMulti`](IoredisClientMulti.md)

#### Implementation of

[IRedisTransaction](../interfaces/IRedisTransaction.md).[sadd](../interfaces/IRedisTransaction.md#sadd)

___

### srem

▸ **srem**(`key`, `element`): [`IoredisClientMulti`](IoredisClientMulti.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `element` | `string` \| `string`[] |

#### Returns

[`IoredisClientMulti`](IoredisClientMulti.md)

#### Implementation of

[IRedisTransaction](../interfaces/IRedisTransaction.md).[srem](../interfaces/IRedisTransaction.md#srem)

___

### zadd

▸ **zadd**(`key`, `score`, `element`): [`IoredisClientMulti`](IoredisClientMulti.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `score` | `number` |
| `element` | `string` |

#### Returns

[`IoredisClientMulti`](IoredisClientMulti.md)

#### Implementation of

[IRedisTransaction](../interfaces/IRedisTransaction.md).[zadd](../interfaces/IRedisTransaction.md#zadd)

___

### zrem

▸ **zrem**(`key`, `element`): [`IoredisClientMulti`](IoredisClientMulti.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `element` | `string` \| `string`[] |

#### Returns

[`IoredisClientMulti`](IoredisClientMulti.md)

#### Implementation of

[IRedisTransaction](../interfaces/IRedisTransaction.md).[zrem](../interfaces/IRedisTransaction.md#zrem)
