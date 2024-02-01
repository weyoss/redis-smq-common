[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / Lock

# Class: Lock

## Table of contents

### Constructors

- [constructor](Lock.md#constructor)

### Methods

- [acquireLock](Lock.md#acquirelock)
- [acquireOrExtend](Lock.md#acquireorextend)
- [extendLock](Lock.md#extendlock)
- [getId](Lock.md#getid)
- [isLocked](Lock.md#islocked)
- [isReleased](Lock.md#isreleased)
- [releaseLock](Lock.md#releaselock)

## Constructors

### constructor

• **new Lock**(`redisClient`, `lockKey`, `ttl`, `retryOnFail?`, `autoExtend?`): [`Lock`](Lock.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `redisClient` | [`RedisClient`](RedisClient.md) | `undefined` |
| `lockKey` | `string` | `undefined` |
| `ttl` | `number` | `undefined` |
| `retryOnFail` | `boolean` | `false` |
| `autoExtend` | `boolean` | `false` |

#### Returns

[`Lock`](Lock.md)

## Methods

### acquireLock

▸ **acquireLock**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`

___

### acquireOrExtend

▸ **acquireOrExtend**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`ELockStatus`\> |

#### Returns

`void`

___

### extendLock

▸ **extendLock**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`

___

### getId

▸ **getId**(): `string`

#### Returns

`string`

___

### isLocked

▸ **isLocked**(): `boolean`

#### Returns

`boolean`

___

### isReleased

▸ **isReleased**(): `boolean`

#### Returns

`boolean`

___

### releaseLock

▸ **releaseLock**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`
