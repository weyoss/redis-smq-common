[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / PanicError

# Class: PanicError

## Hierarchy

- [`RedisSMQError`](RedisSMQError.md)

  ↳ **`PanicError`**

  ↳↳ [`CallbackEmptyReplyError`](CallbackEmptyReplyError.md)

  ↳↳ [`CallbackInvalidReplyError`](CallbackInvalidReplyError.md)

## Table of contents

### Constructors

- [constructor](PanicError.md#constructor)

### Accessors

- [name](PanicError.md#name)

## Constructors

### constructor

• **new PanicError**(`message?`): [`PanicError`](PanicError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`PanicError`](PanicError.md)

#### Inherited from

[RedisSMQError](RedisSMQError.md).[constructor](RedisSMQError.md#constructor)

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Inherited from

RedisSMQError.name
