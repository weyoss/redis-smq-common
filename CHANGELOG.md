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