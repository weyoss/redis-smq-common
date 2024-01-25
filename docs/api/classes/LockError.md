[RedisSMQ Common Library](../../../README.md) / [Docs](README.md) / [API](docs/api/README.md) / LockError

# Class: LockError

## Hierarchy

- [`RedisSMQError`](docs/api/classes/RedisSMQError.md)

  ↳ **`LockError`**

  ↳↳ [`LockAbortError`](docs/api/classes/LockAbortError.md)

  ↳↳ [`LockAcquireError`](docs/api/classes/LockAcquireError.md)

  ↳↳ [`LockExtendError`](docs/api/classes/LockExtendError.md)

  ↳↳ [`LockMethodNotAllowedError`](docs/api/classes/LockMethodNotAllowedError.md)

  ↳↳ [`LockNotAcquiredError`](docs/api/classes/LockNotAcquiredError.md)

  ↳↳ [`LockNotReleasedError`](docs/api/classes/LockNotReleasedError.md)

## Table of contents

### Constructors

- [constructor](docs/api/classes/LockError.md#constructor)

### Accessors

- [name](docs/api/classes/LockError.md#name)

## Constructors

### constructor

• **new LockError**(`message?`): [`LockError`](docs/api/classes/LockError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`LockError`](docs/api/classes/LockError.md)

#### Inherited from

[RedisSMQError](docs/api/classes/RedisSMQError.md).[constructor](docs/api/classes/RedisSMQError.md#constructor)

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Inherited from

RedisSMQError.name
