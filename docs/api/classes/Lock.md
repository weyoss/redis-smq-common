>[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / Lock

# Class: Lock

## Table of contents

### Constructors

- [constructor](../classes/Lock.md#constructor)

### Methods

- [acquireLock](../classes/Lock.md#acquirelock)
- [acquireOrExtend](../classes/Lock.md#acquireorextend)
- [extendLock](../classes/Lock.md#extendlock)
- [getId](../classes/Lock.md#getid)
- [isLocked](../classes/Lock.md#islocked)
- [isReleased](../classes/Lock.md#isreleased)
- [releaseLock](../classes/Lock.md#releaselock)

## Constructors

### constructor

• **new Lock**(`redisClient`, `lockKey`, `ttl`, `retryOnFail?`, `autoExtend?`, `throwExceptions?`): [`Lock`](../classes/Lock.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `redisClient` | [`RedisClient`](../classes/RedisClient.md) | `undefined` |
| `lockKey` | `string` | `undefined` |
| `ttl` | `number` | `undefined` |
| `retryOnFail` | `boolean` | `false` |
| `autoExtend` | `boolean` | `false` |
| `throwExceptions` | `boolean` | `true` |

#### Returns

[`Lock`](../classes/Lock.md)

## Methods

### acquireLock

▸ **acquireLock**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`void`> |

#### Returns

`void`

___

### acquireOrExtend

▸ **acquireOrExtend**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`ELockStatus`> |

#### Returns

`void`

___

### extendLock

▸ **extendLock**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`void`> |

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`void`> |

#### Returns

`void`
