[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / EventBusError

# Class: EventBusError

## Hierarchy

- [`RedisSMQError`](RedisSMQError.md)

  ↳ **`EventBusError`**

  ↳↳ [`EventBusNotConnectedError`](EventBusNotConnectedError.md)

## Table of contents

### Constructors

- [constructor](EventBusError.md#constructor)

### Accessors

- [name](EventBusError.md#name)

## Constructors

### constructor

• **new EventBusError**(`message?`): [`EventBusError`](EventBusError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`EventBusError`](EventBusError.md)

#### Inherited from

[RedisSMQError](RedisSMQError.md).[constructor](RedisSMQError.md#constructor)

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Inherited from

RedisSMQError.name
