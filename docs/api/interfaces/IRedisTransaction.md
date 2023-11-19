>[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / IRedisTransaction

# Interface: IRedisTransaction

## Table of contents

### Methods

- [del](../interfaces/IRedisTransaction.md#del)
- [exec](../interfaces/IRedisTransaction.md#exec)
- [expire](../interfaces/IRedisTransaction.md#expire)
- [hdel](../interfaces/IRedisTransaction.md#hdel)
- [hincrby](../interfaces/IRedisTransaction.md#hincrby)
- [hset](../interfaces/IRedisTransaction.md#hset)
- [lpop](../interfaces/IRedisTransaction.md#lpop)
- [lpush](../interfaces/IRedisTransaction.md#lpush)
- [lrem](../interfaces/IRedisTransaction.md#lrem)
- [ltrim](../interfaces/IRedisTransaction.md#ltrim)
- [pexpire](../interfaces/IRedisTransaction.md#pexpire)
- [rpop](../interfaces/IRedisTransaction.md#rpop)
- [rpoplpush](../interfaces/IRedisTransaction.md#rpoplpush)
- [rpush](../interfaces/IRedisTransaction.md#rpush)
- [sadd](../interfaces/IRedisTransaction.md#sadd)
- [srem](../interfaces/IRedisTransaction.md#srem)
- [zadd](../interfaces/IRedisTransaction.md#zadd)
- [zrem](../interfaces/IRedisTransaction.md#zrem)

## Methods

### del

▸ **del**(`key`): [`IRedisTransaction`](../interfaces/IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `string`[] |

#### Returns

[`IRedisTransaction`](../interfaces/IRedisTransaction.md)

___

### exec

▸ **exec**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`unknown`[]> |

#### Returns

`void`

___

### expire

▸ **expire**(`key`, `secs`): [`IRedisTransaction`](../interfaces/IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `secs` | `number` |

#### Returns

[`IRedisTransaction`](../interfaces/IRedisTransaction.md)

___

### hdel

▸ **hdel**(`key`, `field`): [`IRedisTransaction`](../interfaces/IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `field` | `string` \| `string`[] |

#### Returns

[`IRedisTransaction`](../interfaces/IRedisTransaction.md)

___

### hincrby

▸ **hincrby**(`key`, `field`, `by`): [`IRedisTransaction`](../interfaces/IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `field` | `string` |
| `by` | `number` |

#### Returns

[`IRedisTransaction`](../interfaces/IRedisTransaction.md)

___

### hset

▸ **hset**(`key`, `field`, `value`): [`IRedisTransaction`](../interfaces/IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `field` | `string` |
| `value` | `string` \| `number` |

#### Returns

[`IRedisTransaction`](../interfaces/IRedisTransaction.md)

___

### lpop

▸ **lpop**(`key`): [`IRedisTransaction`](../interfaces/IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`IRedisTransaction`](../interfaces/IRedisTransaction.md)

___

### lpush

▸ **lpush**(`key`, `element`): [`IRedisTransaction`](../interfaces/IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `element` | `string` |

#### Returns

[`IRedisTransaction`](../interfaces/IRedisTransaction.md)

___

### lrem

▸ **lrem**(`key`, `count`, `element`): [`IRedisTransaction`](../interfaces/IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `count` | `number` |
| `element` | `string` |

#### Returns

[`IRedisTransaction`](../interfaces/IRedisTransaction.md)

___

### ltrim

▸ **ltrim**(`key`, `start`, `stop`): [`IRedisTransaction`](../interfaces/IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `start` | `number` |
| `stop` | `number` |

#### Returns

[`IRedisTransaction`](../interfaces/IRedisTransaction.md)

___

### pexpire

▸ **pexpire**(`key`, `millis`): [`IRedisTransaction`](../interfaces/IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `millis` | `number` |

#### Returns

[`IRedisTransaction`](../interfaces/IRedisTransaction.md)

___

### rpop

▸ **rpop**(`key`): [`IRedisTransaction`](../interfaces/IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`IRedisTransaction`](../interfaces/IRedisTransaction.md)

___

### rpoplpush

▸ **rpoplpush**(`source`, `destination`): [`IRedisTransaction`](../interfaces/IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |

#### Returns

[`IRedisTransaction`](../interfaces/IRedisTransaction.md)

___

### rpush

▸ **rpush**(`key`, `element`): [`IRedisTransaction`](../interfaces/IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `element` | `string` |

#### Returns

[`IRedisTransaction`](../interfaces/IRedisTransaction.md)

___

### sadd

▸ **sadd**(`key`, `element`): [`IRedisTransaction`](../interfaces/IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `element` | `string` |

#### Returns

[`IRedisTransaction`](../interfaces/IRedisTransaction.md)

___

### srem

▸ **srem**(`key`, `element`): [`IRedisTransaction`](../interfaces/IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `element` | `string` \| `string`[] |

#### Returns

[`IRedisTransaction`](../interfaces/IRedisTransaction.md)

___

### zadd

▸ **zadd**(`key`, `score`, `element`): [`IRedisTransaction`](../interfaces/IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `score` | `number` |
| `element` | `string` |

#### Returns

[`IRedisTransaction`](../interfaces/IRedisTransaction.md)

___

### zrem

▸ **zrem**(`key`, `element`): [`IRedisTransaction`](../interfaces/IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `element` | `string` \| `string`[] |

#### Returns

[`IRedisTransaction`](../interfaces/IRedisTransaction.md)
