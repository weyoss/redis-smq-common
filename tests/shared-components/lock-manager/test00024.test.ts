import { delay, promisifyAll } from 'bluebird';
import { LockManager } from '../../../src/lock-manager/lock-manager';
import { getRedisInstance } from '../../common';

test('LockManager: autoExtend', async () => {
  const redisClient = await getRedisInstance();
  const lockManager = promisifyAll(
    new LockManager(redisClient, 'key1', 10000, false, true),
  );

  await lockManager.acquireLockAsync();

  await expect(lockManager.extendLockAsync()).rejects.toThrow(
    `Can not extend a lock when autoExtend is enabled`,
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
