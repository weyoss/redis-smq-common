[RedisSMQ Common Library](../../../README.md) / [Docs](README.md) / [API](docs/api/README.md) / IRedisTransaction

# Interface: IRedisTransaction

## Table of contents

### Methods

- [del](docs/api/interfaces/IRedisTransaction.md#del)
- [exec](docs/api/interfaces/IRedisTransaction.md#exec)
- [expire](docs/api/interfaces/IRedisTransaction.md#expire)
- [hdel](docs/api/interfaces/IRedisTransaction.md#hdel)
- [hincrby](docs/api/interfaces/IRedisTransaction.md#hincrby)
- [hset](docs/api/interfaces/IRedisTransaction.md#hset)
- [lpop](docs/api/interfaces/IRedisTransaction.md#lpop)
- [lpush](docs/api/interfaces/IRedisTransaction.md#lpush)
- [lrem](docs/api/interfaces/IRedisTransaction.md#lrem)
- [ltrim](docs/api/interfaces/IRedisTransaction.md#ltrim)
- [pexpire](docs/api/interfaces/IRedisTransaction.md#pexpire)
- [rpop](docs/api/interfaces/IRedisTransaction.md#rpop)
- [rpoplpush](docs/api/interfaces/IRedisTransaction.md#rpoplpush)
- [rpush](docs/api/interfaces/IRedisTransaction.md#rpush)
- [sadd](docs/api/interfaces/IRedisTransaction.md#sadd)
- [srem](docs/api/interfaces/IRedisTransaction.md#srem)
- [zadd](docs/api/interfaces/IRedisTransaction.md#zadd)
- [zrem](docs/api/interfaces/IRedisTransaction.md#zrem)

## Methods

### del

▸ **del**(`key`): [`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `string`[] |

#### Returns

[`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

___

### exec

▸ **exec**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`unknown`[]\> |

#### Returns

`void`

___

### expire

▸ **expire**(`key`, `secs`): [`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `secs` | `number` |

#### Returns

[`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

___

### hdel

▸ **hdel**(`key`, `field`): [`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `field` | `string` \| `string`[] |

#### Returns

[`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

___

### hincrby

▸ **hincrby**(`key`, `field`, `by`): [`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `field` | `string` |
| `by` | `number` |

#### Returns

[`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

___

### hset

▸ **hset**(`key`, `field`, `value`): [`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `field` | `string` |
| `value` | `string` \| `number` |

#### Returns

[`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

___

### lpop

▸ **lpop**(`key`): [`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

___

### lpush

▸ **lpush**(`key`, `element`): [`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `element` | `string` |

#### Returns

[`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

___

### lrem

▸ **lrem**(`key`, `count`, `element`): [`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `count` | `number` |
| `element` | `string` |

#### Returns

[`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

___

### ltrim

▸ **ltrim**(`key`, `start`, `stop`): [`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `start` | `number` |
| `stop` | `number` |

#### Returns

[`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

___

### pexpire

▸ **pexpire**(`key`, `millis`): [`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `millis` | `number` |

#### Returns

[`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

___

### rpop

▸ **rpop**(`key`): [`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

___

### rpoplpush

▸ **rpoplpush**(`source`, `destination`): [`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |

#### Returns

[`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

___

### rpush

▸ **rpush**(`key`, `element`): [`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `element` | `string` |

#### Returns

[`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

___

### sadd

▸ **sadd**(`key`, `element`): [`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `element` | `string` |

#### Returns

[`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

___

### srem

▸ **srem**(`key`, `element`): [`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `element` | `string` \| `string`[] |

#### Returns

[`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

___

### zadd

▸ **zadd**(`key`, `score`, `element`): [`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `score` | `number` |
| `element` | `string` |

#### Returns

[`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

___

### zrem

▸ **zrem**(`key`, `element`): [`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `element` | `string` \| `string`[] |

#### Returns

[`IRedisTransaction`](docs/api/interfaces/IRedisTransaction.md)
