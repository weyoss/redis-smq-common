[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / IRedisTransaction

# Interface: IRedisTransaction

## Implemented by

- [`IoredisClientMulti`](../classes/IoredisClientMulti.md)
- [`NodeRedisClientMulti`](../classes/NodeRedisClientMulti.md)

## Table of contents

### Methods

- [del](IRedisTransaction.md#del)
- [exec](IRedisTransaction.md#exec)
- [expire](IRedisTransaction.md#expire)
- [hdel](IRedisTransaction.md#hdel)
- [hincrby](IRedisTransaction.md#hincrby)
- [hset](IRedisTransaction.md#hset)
- [lpop](IRedisTransaction.md#lpop)
- [lpush](IRedisTransaction.md#lpush)
- [lrem](IRedisTransaction.md#lrem)
- [ltrim](IRedisTransaction.md#ltrim)
- [pexpire](IRedisTransaction.md#pexpire)
- [rpop](IRedisTransaction.md#rpop)
- [rpoplpush](IRedisTransaction.md#rpoplpush)
- [rpush](IRedisTransaction.md#rpush)
- [sadd](IRedisTransaction.md#sadd)
- [srem](IRedisTransaction.md#srem)
- [zadd](IRedisTransaction.md#zadd)
- [zrem](IRedisTransaction.md#zrem)

## Methods

### del

▸ **del**(`key`): [`IRedisTransaction`](IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `string`[] |

#### Returns

[`IRedisTransaction`](IRedisTransaction.md)

___

### exec

▸ **exec**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](ICallback.md)\<`unknown`[]\> |

#### Returns

`void`

___

### expire

▸ **expire**(`key`, `secs`): [`IRedisTransaction`](IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `secs` | `number` |

#### Returns

[`IRedisTransaction`](IRedisTransaction.md)

___

### hdel

▸ **hdel**(`key`, `field`): [`IRedisTransaction`](IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `field` | `string` \| `string`[] |

#### Returns

[`IRedisTransaction`](IRedisTransaction.md)

___

### hincrby

▸ **hincrby**(`key`, `field`, `by`): [`IRedisTransaction`](IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `field` | `string` |
| `by` | `number` |

#### Returns

[`IRedisTransaction`](IRedisTransaction.md)

___

### hset

▸ **hset**(`key`, `field`, `value`): [`IRedisTransaction`](IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `field` | `string` |
| `value` | `string` \| `number` |

#### Returns

[`IRedisTransaction`](IRedisTransaction.md)

___

### lpop

▸ **lpop**(`key`): [`IRedisTransaction`](IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`IRedisTransaction`](IRedisTransaction.md)

___

### lpush

▸ **lpush**(`key`, `element`): [`IRedisTransaction`](IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `element` | `string` |

#### Returns

[`IRedisTransaction`](IRedisTransaction.md)

___

### lrem

▸ **lrem**(`key`, `count`, `element`): [`IRedisTransaction`](IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `count` | `number` |
| `element` | `string` |

#### Returns

[`IRedisTransaction`](IRedisTransaction.md)

___

### ltrim

▸ **ltrim**(`key`, `start`, `stop`): [`IRedisTransaction`](IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `start` | `number` |
| `stop` | `number` |

#### Returns

[`IRedisTransaction`](IRedisTransaction.md)

___

### pexpire

▸ **pexpire**(`key`, `millis`): [`IRedisTransaction`](IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `millis` | `number` |

#### Returns

[`IRedisTransaction`](IRedisTransaction.md)

___

### rpop

▸ **rpop**(`key`): [`IRedisTransaction`](IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`IRedisTransaction`](IRedisTransaction.md)

___

### rpoplpush

▸ **rpoplpush**(`source`, `destination`): [`IRedisTransaction`](IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |

#### Returns

[`IRedisTransaction`](IRedisTransaction.md)

___

### rpush

▸ **rpush**(`key`, `element`): [`IRedisTransaction`](IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `element` | `string` |

#### Returns

[`IRedisTransaction`](IRedisTransaction.md)

___

### sadd

▸ **sadd**(`key`, `element`): [`IRedisTransaction`](IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `element` | `string` |

#### Returns

[`IRedisTransaction`](IRedisTransaction.md)

___

### srem

▸ **srem**(`key`, `element`): [`IRedisTransaction`](IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `element` | `string` \| `string`[] |

#### Returns

[`IRedisTransaction`](IRedisTransaction.md)

___

### zadd

▸ **zadd**(`key`, `score`, `element`): [`IRedisTransaction`](IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `score` | `number` |
| `element` | `string` |

#### Returns

[`IRedisTransaction`](IRedisTransaction.md)

___

### zrem

▸ **zrem**(`key`, `element`): [`IRedisTransaction`](IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `element` | `string` \| `string`[] |

#### Returns

[`IRedisTransaction`](IRedisTransaction.md)
