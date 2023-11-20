

## [3.0.0-rc.6](https://github.com/weyoss/redis-smq-common/compare/v3.0.0-rc.5...v3.0.0-rc.6) (2023-11-20)


### ⚠ BREAKING CHANGES

* **redis-client:** support redis server starting from 4.0.0

### Features

* **redis-client:** support redis server starting from 4.0.0 ([84d6b66](https://github.com/weyoss/redis-smq-common/commit/84d6b6686e366568002b58a454d7684fa4e7a646))


### Continuous Integration

* drop support for redis server 2.8 and 3 ([444d1fd](https://github.com/weyoss/redis-smq-common/commit/444d1fde37385f21576dc4f8b9cada07bff1c373))

## [3.0.0-rc.5](https://github.com/weyoss/redis-smq-common/compare/v3.0.0-rc.4...v3.0.0-rc.5) (2023-11-19)


### Documentation

* remove logs.md and redis.md, update README.md ([be2ebd8](https://github.com/weyoss/redis-smq-common/commit/be2ebd8ef0b8acbbcb37572363528dfcf968679a))

## [3.0.0-rc.4](https://github.com/weyoss/redis-smq-common/compare/v3.0.0-rc.3...v3.0.0-rc.4) (2023-11-19)


### Misc

* add typescript declaration file entry ([453f103](https://github.com/weyoss/redis-smq-common/commit/453f1036cb0c89cf10372c14d44b336b19add370))
* update .npmignore ([6b41b6d](https://github.com/weyoss/redis-smq-common/commit/6b41b6dad1c9d587001b331f29d401d653c066b3))

## [3.0.0-rc.3](https://github.com/weyoss/redis-smq-common/compare/v2.0.0...v3.0.0-rc.3) (2023-11-19)


### ⚠ BREAKING CHANGES

* support cjs/esm modules, refactor codebase, improve typings

### Features

* **redis-client:** add hscan support ([7672617](https://github.com/weyoss/redis-smq-common/commit/7672617c5438b677420f24591cc849082084602f))
* support cjs/esm modules, refactor codebase, improve typings ([3da25b9](https://github.com/weyoss/redis-smq-common/commit/3da25b91dfce72051df0e409de00b1ef40e91d1c))


### Bug Fixes

* **NodeRedisV4Client:** fix zrevrange() error for Redis v2.8 ([f0d9e25](https://github.com/weyoss/redis-smq-common/commit/f0d9e2563821c161aba92b1518249b89da448b76))


### Misc

* fix broken links ([6b2e9cf](https://github.com/weyoss/redis-smq-common/commit/6b2e9cf222eff79bf9355d46d9677d378347b740))
* improve documentation, add API reference, clean up ([53169a1](https://github.com/weyoss/redis-smq-common/commit/53169a1b459a7f0db9907bba18f900dc179cc366))
* **logger:** fix getLogger() tests when called with the 2nd param ([df43847](https://github.com/weyoss/redis-smq-common/commit/df438470cdc306311cc70aca72e19f3b1dcd2c46))
* **redis-client:** fix 'ERR unknown command HSCAN' error ([70a5c98](https://github.com/weyoss/redis-smq-common/commit/70a5c98ae5281b0f0a04ab6f2414da620cad2ae7))
* **redis-client:** increase code coverage ([34fccba](https://github.com/weyoss/redis-smq-common/commit/34fccba189078cb56b1c86b83662f9d927a28182))
* **redis-client:** test hscan support ([939a0ad](https://github.com/weyoss/redis-smq-common/commit/939a0ad1eb417e3d5e5607306ad9d172285c4c5d))
* **redis-client:** Use count param for sscan ([8705086](https://github.com/weyoss/redis-smq-common/commit/87050869cf580e778bc9a5e8ede19e02884f8a87))
* update .gitignore ([6fbc308](https://github.com/weyoss/redis-smq-common/commit/6fbc3087b74395ac3558e310bf58c378184608e3))
* update CHANGELOG.md template ([aae81f3](https://github.com/weyoss/redis-smq-common/commit/aae81f376c3404a13a8647774d26175eff58b39d))
* update minimal supported versions for nodejs and redis ([4a31852](https://github.com/weyoss/redis-smq-common/commit/4a31852a889cffb82eac2b3454dac323a39da79a))
* update package description ([776a240](https://github.com/weyoss/redis-smq-common/commit/776a24029a6d79c132d5b861139926c6ffc7288b))
* update tests and fix various errors ([c915fb2](https://github.com/weyoss/redis-smq-common/commit/c915fb240cf8f8781f98bd6aa77023b26e1a0fde))

## 2.0.0 (2023-03-25)

* feat(redis-client): support offset and count for zrangebyscore() (2ec00e0)

## 1.0.6 (2023-02-15)

*  fix: use path.resolve() to fix 'no such file or directory' error (2d33599)

## 1.0.5 (2023-01-06)

* chore: update license (9b817d2)
* build: update NPM dependencies to latest releases (b03795b)
* docs(readme): replace lgtm badge with code quality badge (ea6545a)
* build: migrate from lgtm to github code scanning (de3dcd4)

## 1.0.4 (2022-08-24)

* test(redis-client): cover srem command (caf3837)
* feat(redis-client): add support for srem command (7ddaf24)


## 1.0.3 (2022-08-16)

* [RedisClient] Update tests (6f1fd51)
* [RedisClient] Make validateRedisVersion() public (c2fccb3)
* [RedisClient] Support MATCH and COUNT options for sscan (12b24ac)
* [RedisClient] Fallback to smembers when sscan is not supported (8a4409f)
* [RedisClient] Test sscan command (17b8279)
* [RedisClient] Add sscan command (b771873)

## 1.0.2 (2022-08-10)

* Update LockManager tests (321c8c4)
* Fix "LockManagerExtendError: Acquired lock could not be extended" (fa3a8e5)

## 1.0.1 (2022-07-07)

* Remove unused WorkerRunnerError (48e7206)
* Use namespaced WorkerError (517224c)
* Make array looping asynchronous (cd66e51)
* Run workers one by one without a delay (099b488)

## 1.0.0 (20220-06-18)

* Rename logger/test00018 (f20fdf9)
* Test PowerManager (8d6f5e6)
* Complete async tests to reach 9x% code coverage (ea57f8f)
* Test async.waterfall() (ae4a283)
* Increase code coverage (c5e3f2b)

## 1.0.0-rc.11 (2022-05-31)

* Update RedisClient and IRedisClientMulti interfaces (8732c97)

## 1.0.0-rc.10 (2022-05-31)

* Fix broken promisify(All) because of ICallback typing (4250e32)

## 1.0.0-rc.9 (2022-05-31)

* Improve RedisClient typings (27219a6)
* Set up codecov (98293bd)
* Fix type coverage (2f4a722)

## 1.0.0-rc.8 (2022-05-30)

* Add WatchedKeysChangedError class (1e42e80)

## 1.0.0-rc.7 (2022-05-30)

* Fix various redis errors (9349261)

## 1.0.0-rc.6 (2022-05-30)

* Fix missing RedisClient from package exports (88f90f0)

## 1.0.0-rc.5 (2022-05-30)

* Update IRedisClientMulti interface (be1c534)

## 1.0.0-rc.4 (2022-05-30)

* Update docs (5b88f1d)
* Clean up (dfccabf)
* Fix type coverage (a5def8d)
* Implement RedisClientMulti (fc5a832)
* Fix redis-client/test00001 (ba817ef)
* Drop support for node.js v12 (14773ab)
* Add node-redis v4 support (WIP) (a316490)
* Add NPM version badge (8fa0d52)
* Update package keywords (98b6e5e)
* Update logs.md (fe0e708)
* Add shared docs (19b9f0b)

## 1.0.0-rc.3 (2022-05-26)

* Update README.md
* Refactor and clean up Worker and WorkerRunner classes

## 1.0.0-rc.2 (2022-05-25)

* Allow children of Worker class to access worker params

## 1.0.0-rc.1 (2022-05-24)

* Update package keywords and description
* Use codecov instead of coveralls
* Initial commit, migrate common components from redis-smq
