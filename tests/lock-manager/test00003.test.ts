import { delay, promisifyAll } from 'bluebird';
import { LockManager } from '../../src/lock-manager/lock-manager';
import { getRedisInstance } from '../common';
import { LockManagerMethodNotAllowedError } from '../../src/lock-manager/errors/lock-manager-method-not-allowed.error';

test('LockManager: autoExtend', async () => {
  const redisClient = await getRedisInstance();
  const lockManager = promisifyAll(
    new LockManager(redisClient, 'key1', 10000, false, true),
  );

  await lockManager.acquireLockAsync();

  await expect(lockManager.extendLockAsync()).rejects.toThrowError(
    LockManagerMethodNotAllowedError,
  );

  await delay(20000);

  const lockManager2 = promisifyAll(
    new LockManager(redisClient, 'key1', 10000, false),
  );

  await expect(lockManager2.acquireLockAsync()).rejects.toThrow(
    `Could not acquire a lock`,
  );

  await lockManager.releaseLockAsync();
  await lockManager2.releaseLockAsync();
});
