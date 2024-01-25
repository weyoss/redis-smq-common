[RedisSMQ Common Library](../../../README.md) / [Docs](README.md) / [API](docs/api/README.md) / WorkerRunner

# Class: WorkerRunner

## Hierarchy

- [`EventEmitter`](docs/api/classes/EventEmitter.md)\<[`TEvent`](docs/api/README.md#tevent)\>

  ↳ **`WorkerRunner`**

## Table of contents

### Constructors

- [constructor](docs/api/classes/WorkerRunner.md#constructor)

### Methods

- [addWorker](docs/api/classes/WorkerRunner.md#addworker)
- [emit](docs/api/classes/WorkerRunner.md#emit)
- [on](docs/api/classes/WorkerRunner.md#on)
- [once](docs/api/classes/WorkerRunner.md#once)
- [quit](docs/api/classes/WorkerRunner.md#quit)
- [removeAllListeners](docs/api/classes/WorkerRunner.md#removealllisteners)
- [run](docs/api/classes/WorkerRunner.md#run)

## Constructors

### constructor

• **new WorkerRunner**(`redisClient`, `keyLock`, `workerPool`, `logger`): [`WorkerRunner`](docs/api/classes/WorkerRunner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `redisClient` | [`RedisClient`](docs/api/classes/RedisClient.md) |
| `keyLock` | `string` |
| `workerPool` | [`WorkerPool`](docs/api/classes/WorkerPool.md) |
| `logger` | [`ILogger`](docs/api/interfaces/ILogger.md) |

#### Returns

[`WorkerRunner`](docs/api/classes/WorkerRunner.md)

#### Overrides

[EventEmitter](docs/api/classes/EventEmitter.md).[constructor](docs/api/classes/EventEmitter.md#constructor)

## Methods

### addWorker

▸ **addWorker**(`instance`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | [`Worker`](docs/api/classes/Worker.md) |

#### Returns

`void`

___

### emit

▸ **emit**\<`E`\>(`event`, `...args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`TEvent`](docs/api/README.md#tevent) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `...args` | `Parameters`\<[`TEvent`](docs/api/README.md#tevent)[`E`]\> |

#### Returns

`boolean`

#### Inherited from

[EventEmitter](docs/api/classes/EventEmitter.md).[emit](docs/api/classes/EventEmitter.md#emit)

___

### on

▸ **on**\<`E`\>(`event`, `listener`): [`WorkerRunner`](docs/api/classes/WorkerRunner.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`TEvent`](docs/api/README.md#tevent) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | [`TEvent`](docs/api/README.md#tevent)[`E`] |

#### Returns

[`WorkerRunner`](docs/api/classes/WorkerRunner.md)

#### Inherited from

[EventEmitter](docs/api/classes/EventEmitter.md).[on](docs/api/classes/EventEmitter.md#on)

___

### once

▸ **once**\<`E`\>(`event`, `listener`): [`WorkerRunner`](docs/api/classes/WorkerRunner.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`TEvent`](docs/api/README.md#tevent) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | [`TEvent`](docs/api/README.md#tevent)[`E`] |

#### Returns

[`WorkerRunner`](docs/api/classes/WorkerRunner.md)

#### Inherited from

[EventEmitter](docs/api/classes/EventEmitter.md).[once](docs/api/classes/EventEmitter.md#once)

___

### quit

▸ **quit**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`

___

### removeAllListeners

▸ **removeAllListeners**\<`E`\>(`event?`): [`WorkerRunner`](docs/api/classes/WorkerRunner.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`TEvent`](docs/api/README.md#tevent) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `E` |

#### Returns

[`WorkerRunner`](docs/api/classes/WorkerRunner.md)

#### Inherited from

[EventEmitter](docs/api/classes/EventEmitter.md).[removeAllListeners](docs/api/classes/EventEmitter.md#removealllisteners)

___

### run

▸ **run**(): `void`

#### Returns

`void`
