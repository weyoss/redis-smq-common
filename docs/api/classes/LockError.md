[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / LockError

# Class: LockError

## Hierarchy

- [`RedisSMQError`](RedisSMQError.md)

  ↳ **`LockError`**

  ↳↳ [`LockAcquireError`](LockAcquireError.md)

  ↳↳ [`LockExtendError`](LockExtendError.md)

  ↳↳ [`LockMethodNotAllowedError`](LockMethodNotAllowedError.md)

  ↳↳ [`LockNotAcquiredError`](LockNotAcquiredError.md)

## Table of contents

### Constructors

- [constructor](LockError.md#constructor)

### Accessors

- [name](LockError.md#name)

## Constructors

### constructor

• **new LockError**(`message?`): [`LockError`](LockError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`LockError`](LockError.md)

#### Inherited from

[RedisSMQError](RedisSMQError.md).[constructor](RedisSMQError.md#constructor)

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Inherited from

RedisSMQError.name
