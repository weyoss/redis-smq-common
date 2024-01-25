[RedisSMQ Common Library](../../../README.md) / [Docs](README.md) / [API](docs/api/README.md) / Lock

# Class: Lock

## Table of contents

### Constructors

- [constructor](docs/api/classes/Lock.md#constructor)

### Methods

- [acquireLock](docs/api/classes/Lock.md#acquirelock)
- [acquireOrExtend](docs/api/classes/Lock.md#acquireorextend)
- [extendLock](docs/api/classes/Lock.md#extendlock)
- [getId](docs/api/classes/Lock.md#getid)
- [isLocked](docs/api/classes/Lock.md#islocked)
- [isReleased](docs/api/classes/Lock.md#isreleased)
- [releaseLock](docs/api/classes/Lock.md#releaselock)

## Constructors

### constructor

• **new Lock**(`redisClient`, `lockKey`, `ttl`, `retryOnFail?`, `autoExtend?`, `throwExceptions?`): [`Lock`](docs/api/classes/Lock.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `redisClient` | [`RedisClient`](docs/api/classes/RedisClient.md) | `undefined` |
| `lockKey` | `string` | `undefined` |
| `ttl` | `number` | `undefined` |
| `retryOnFail` | `boolean` | `false` |
| `autoExtend` | `boolean` | `false` |
| `throwExceptions` | `boolean` | `true` |

#### Returns

[`Lock`](docs/api/classes/Lock.md)

## Methods

### acquireLock

▸ **acquireLock**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`

___

### acquireOrExtend

▸ **acquireOrExtend**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`ELockStatus`\> |

#### Returns

`void`

___

### extendLock

▸ **extendLock**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`void`\> |

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
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`
