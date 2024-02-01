[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / WorkerRunner

# Class: WorkerRunner

## Hierarchy

- [`EventEmitter`](EventEmitter.md)\<[`TEvent`](../README.md#tevent)\>

  ↳ **`WorkerRunner`**

## Table of contents

### Constructors

- [constructor](WorkerRunner.md#constructor)

### Methods

- [addWorker](WorkerRunner.md#addworker)
- [emit](WorkerRunner.md#emit)
- [on](WorkerRunner.md#on)
- [once](WorkerRunner.md#once)
- [quit](WorkerRunner.md#quit)
- [removeAllListeners](WorkerRunner.md#removealllisteners)
- [run](WorkerRunner.md#run)

## Constructors

### constructor

• **new WorkerRunner**(`redisClient`, `keyLock`, `workerPool`, `logger`): [`WorkerRunner`](WorkerRunner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `redisClient` | [`RedisClient`](RedisClient.md) |
| `keyLock` | `string` |
| `workerPool` | [`WorkerPool`](WorkerPool.md) |
| `logger` | [`ILogger`](../interfaces/ILogger.md) |

#### Returns

[`WorkerRunner`](WorkerRunner.md)

#### Overrides

[EventEmitter](EventEmitter.md).[constructor](EventEmitter.md#constructor)

## Methods

### addWorker

▸ **addWorker**(`instance`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | [`Worker`](Worker.md) |

#### Returns

`void`

___

### emit

▸ **emit**\<`E`\>(`event`, `...args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`TEvent`](../README.md#tevent) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `...args` | `Parameters`\<[`TEvent`](../README.md#tevent)[`E`]\> |

#### Returns

`boolean`

#### Inherited from

[EventEmitter](EventEmitter.md).[emit](EventEmitter.md#emit)

___

### on

▸ **on**\<`E`\>(`event`, `listener`): [`WorkerRunner`](WorkerRunner.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`TEvent`](../README.md#tevent) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | [`TEvent`](../README.md#tevent)[`E`] |

#### Returns

[`WorkerRunner`](WorkerRunner.md)

#### Inherited from

[EventEmitter](EventEmitter.md).[on](EventEmitter.md#on)

___

### once

▸ **once**\<`E`\>(`event`, `listener`): [`WorkerRunner`](WorkerRunner.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`TEvent`](../README.md#tevent) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | [`TEvent`](../README.md#tevent)[`E`] |

#### Returns

[`WorkerRunner`](WorkerRunner.md)

#### Inherited from

[EventEmitter](EventEmitter.md).[once](EventEmitter.md#once)

___

### quit

▸ **quit**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`

___

### removeAllListeners

▸ **removeAllListeners**\<`E`\>(`event?`): [`WorkerRunner`](WorkerRunner.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`TEvent`](../README.md#tevent) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `E` |

#### Returns

[`WorkerRunner`](WorkerRunner.md)

#### Inherited from

[EventEmitter](EventEmitter.md).[removeAllListeners](EventEmitter.md#removealllisteners)

___

### run

▸ **run**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`
