[RedisSMQ Common Library](../../README.md) / [Docs](../README.md) / API

# API

## Table of contents

### Enumerations

- [ELuaScriptName](enums/ELuaScriptName.md)
- [ERedisConfigClient](enums/ERedisConfigClient.md)
- [EWorkerThreadExecutionCode](enums/EWorkerThreadExecutionCode.md)
- [EWorkerThreadExitCode](enums/EWorkerThreadExitCode.md)
- [EWorkerType](enums/EWorkerType.md)

### Classes

- [AbortError](classes/AbortError.md)
- [CallbackEmptyReplyError](classes/CallbackEmptyReplyError.md)
- [CallbackInvalidReplyError](classes/CallbackInvalidReplyError.md)
- [EventBus](classes/EventBus.md)
- [EventBusError](classes/EventBusError.md)
- [EventBusNotConnectedError](classes/EventBusNotConnectedError.md)
- [EventBusRedis](classes/EventBusRedis.md)
- [EventEmitter](classes/EventEmitter.md)
- [IoredisClient](classes/IoredisClient.md)
- [IoredisClientMulti](classes/IoredisClientMulti.md)
- [LockAcquireError](classes/LockAcquireError.md)
- [LockError](classes/LockError.md)
- [LockExtendError](classes/LockExtendError.md)
- [LockMethodNotAllowedError](classes/LockMethodNotAllowedError.md)
- [LockNotAcquiredError](classes/LockNotAcquiredError.md)
- [Locker](classes/Locker.md)
- [LoggerError](classes/LoggerError.md)
- [LuaScript](classes/LuaScript.md)
- [NodeRedisClient](classes/NodeRedisClient.md)
- [NodeRedisClientMulti](classes/NodeRedisClientMulti.md)
- [PanicError](classes/PanicError.md)
- [PowerSwitch](classes/PowerSwitch.md)
- [RedisClientAbstract](classes/RedisClientAbstract.md)
- [RedisClientError](classes/RedisClientError.md)
- [RedisSMQError](classes/RedisSMQError.md)
- [Runnable](classes/Runnable.md)
- [Timer](classes/Timer.md)
- [TimerError](classes/TimerError.md)
- [WatchedKeysChangedError](classes/WatchedKeysChangedError.md)
- [WorkerAlreadyDownError](classes/WorkerAlreadyDownError.md)
- [WorkerAlreadyRunningError](classes/WorkerAlreadyRunningError.md)
- [WorkerCallable](classes/WorkerCallable.md)
- [WorkerError](classes/WorkerError.md)
- [WorkerPayloadRequiredError](classes/WorkerPayloadRequiredError.md)
- [WorkerResourceGroup](classes/WorkerResourceGroup.md)
- [WorkerRunnable](classes/WorkerRunnable.md)
- [WorkerThreadError](classes/WorkerThreadError.md)

### Interfaces

- [ICallback](interfaces/ICallback.md)
- [IEventBus](interfaces/IEventBus.md)
- [IEventEmitter](interfaces/IEventEmitter.md)
- [ILogger](interfaces/ILogger.md)
- [ILoggerConfig](interfaces/ILoggerConfig.md)
- [IRedisClient](interfaces/IRedisClient.md)
- [IRedisConfigIORedis](interfaces/IRedisConfigIORedis.md)
- [IRedisConfigNodeRedis](interfaces/IRedisConfigNodeRedis.md)
- [IRedisTransaction](interfaces/IRedisTransaction.md)
- [IWorkerCallable](interfaces/IWorkerCallable.md)
- [IWorkerData](interfaces/IWorkerData.md)
- [IWorkerRunnable](interfaces/IWorkerRunnable.md)

### Type Aliases

- [IRedisConfig](README.md#iredisconfig)
- [TEventBusEvent](README.md#teventbusevent)
- [TEventEmitterEvent](README.md#teventemitterevent)
- [TFunction](README.md#tfunction)
- [TLockerEvent](README.md#tlockerevent)
- [TRedisClientEvent](README.md#tredisclientevent)
- [TRedisClientNodeRedis](README.md#tredisclientnoderedis)
- [TRedisTransactionNodeRedis](README.md#tredistransactionnoderedis)
- [TTimer](README.md#ttimer)
- [TTimerEvent](README.md#ttimerevent)
- [TUnaryFunction](README.md#tunaryfunction)
- [TWorkerFn](README.md#tworkerfn)
- [TWorkerResourceGroupEvent](README.md#tworkerresourcegroupevent)
- [TWorkerThreadError](README.md#tworkerthreaderror)
- [TWorkerThreadMessage](README.md#tworkerthreadmessage)
- [TWorkerThreadMessageCode](README.md#tworkerthreadmessagecode)

### Variables

- [async](README.md#async)
- [logger](README.md#logger)

### Functions

- [createRedisClient](README.md#createredisclient)
- [getDirname](README.md#getdirname)

## Type Aliases

### IRedisConfig

Ƭ **IRedisConfig**: [`IRedisConfigIORedis`](interfaces/IRedisConfigIORedis.md) \| [`IRedisConfigNodeRedis`](interfaces/IRedisConfigNodeRedis.md)

___

### TEventBusEvent

Ƭ **TEventBusEvent**: [`TEventEmitterEvent`](README.md#teventemitterevent) & \{ `error`: (`err`: `Error`) => `void`  }

___

### TEventEmitterEvent

Ƭ **TEventEmitterEvent**: `Record`\<`string`, (...`args`: `any`[]) => `void`\>

___

### TFunction

Ƭ **TFunction**\<`TReturn`, `TArgs`\>: (...`args`: `TArgs`[]) => `TReturn`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TReturn` | `void` |
| `TArgs` | `any` |

#### Type declaration

▸ (`...args`): `TReturn`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `TArgs`[] |

##### Returns

`TReturn`

___

### TLockerEvent

Ƭ **TLockerEvent**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `locker.down` | (`id`: `string`) => `void` |
| `locker.error` | (`error`: `Error`, `id`: `string`) => `void` |
| `locker.goingDown` | (`id`: `string`) => `void` |
| `locker.goingUp` | (`id`: `string`) => `void` |
| `locker.up` | (`id`: `string`) => `void` |

___

### TRedisClientEvent

Ƭ **TRedisClientEvent**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `end` | () => `void` |
| `error` | (`err`: `Error`) => `void` |
| `message` | (`channel`: `string`, `message`: `string`) => `void` |
| `pmessage` | (`pattern`: `string`, `channel`: `string`, `message`: `string`) => `void` |
| `ready` | () => `void` |

___

### TRedisClientNodeRedis

Ƭ **TRedisClientNodeRedis**: `RedisClientType`\<`RedisModules`, `RedisFunctions`, `RedisScripts`\>

___

### TRedisTransactionNodeRedis

Ƭ **TRedisTransactionNodeRedis**: `RedisClientMultiCommandType`\<`RedisModules`, `RedisFunctions`, `RedisScripts`\>

___

### TTimer

Ƭ **TTimer**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fn` | [`TFunction`](README.md#tfunction) |
| `periodic` | `boolean` |
| `timer` | `NodeJS.Timeout` |

___

### TTimerEvent

Ƭ **TTimerEvent**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `error` | (`err`: `Error`) => `void` |

___

### TUnaryFunction

Ƭ **TUnaryFunction**\<`T`, `E`\>: (`reply`: `T`) => `E`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | `void` |

#### Type declaration

▸ (`reply`): `E`

##### Parameters

| Name | Type |
| :------ | :------ |
| `reply` | `T` |

##### Returns

`E`

___

### TWorkerFn

Ƭ **TWorkerFn**: (...`args`: [...any[], [`ICallback`](interfaces/ICallback.md)\<`any`\>]) => `void`

#### Type declaration

▸ (`...args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [...any[], [`ICallback`](interfaces/ICallback.md)\<`any`\>] |

##### Returns

`void`

___

### TWorkerResourceGroupEvent

Ƭ **TWorkerResourceGroupEvent**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `workerResourceGroup.error` | (`err`: `Error`) => `void` |

___

### TWorkerThreadError

Ƭ **TWorkerThreadError**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `name` | `string` |

___

### TWorkerThreadMessage

Ƭ **TWorkerThreadMessage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code` | [`TWorkerThreadMessageCode`](README.md#tworkerthreadmessagecode) |
| `data?` | `unknown` |
| `error?` | [`TWorkerThreadError`](README.md#tworkerthreaderror) \| ``null`` |

___

### TWorkerThreadMessageCode

Ƭ **TWorkerThreadMessageCode**: [`EWorkerThreadExitCode`](enums/EWorkerThreadExitCode.md) \| [`EWorkerThreadExecutionCode`](enums/EWorkerThreadExecutionCode.md)

## Variables

### async

• `Const` **async**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `each` | \<T\>(`collection`: `Record`\<`string`, `T`\> \| `T`[], `iteratee`: (`item`: `T`, `key`: `string` \| `number`, `callback`: [`ICallback`](interfaces/ICallback.md)\<`void`\>) => `void`, `callback`: [`ICallback`](interfaces/ICallback.md)\<`void`\>) => `void` |
| `eachIn` | \<T\>(`collection`: `Record`\<`string`, `T`\>, `iteratee`: (`item`: `T`, `key`: `string`, `callback`: [`ICallback`](interfaces/ICallback.md)\<`void`\>) => `void`, `callback`: [`ICallback`](interfaces/ICallback.md)\<`void`\>) => `void` |
| `eachOf` | \<T\>(`collection`: `T`[], `iteratee`: (`item`: `T`, `key`: `number`, `callback`: [`ICallback`](interfaces/ICallback.md)\<`void`\>) => `void`, `callback`: [`ICallback`](interfaces/ICallback.md)\<`void`\>) => `void` |
| `waterfall` | \<T\>(`tasks`: [`TFunction`](README.md#tfunction)[], `callback`: [`ICallback`](interfaces/ICallback.md)\<`T`\>) => `void` |

___

### logger

• `Const` **logger**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `destroy` | () => `void` |
| `getLogger` | (`cfg`: [`ILoggerConfig`](interfaces/ILoggerConfig.md), `ns?`: `string`) => [`ILogger`](interfaces/ILogger.md) |
| `setLogger` | \<T\>(`logger`: `T`) => `void` |

## Functions

### createRedisClient

▸ **createRedisClient**(`config`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`IRedisConfig`](README.md#iredisconfig) |
| `cb` | [`ICallback`](interfaces/ICallback.md)\<[`IRedisClient`](interfaces/IRedisClient.md)\> |

#### Returns

`void`

___

### getDirname

▸ **getDirname**(): `string`

#### Returns

`string`
