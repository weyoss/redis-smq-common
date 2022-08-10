import { delay, promisifyAll } from 'bluebird';
import { LockManager } from '../../src/lock-manager/lock-manager';
import { getRedisInstance } from '../common';
import { LockManagerNotAcquiredError } from '../../src/lock-manager/errors/lock-manager-not-acquired.error';
import { LockManagerNotReleasedError } from '../../src/lock-manager/errors/lock-manager-not-released.error';
import { LockManagerExtendError } from '../../src/lock-manager/errors/lock-manager-extend.error';

test('LockManager: acquireLock(), extendLock(), releaseLock()', async () => {
  const redisClient = await getRedisInstance();
  const lockManager = promisifyAll(
    new LockManager(redisClient, 'key1', 5000, false),
  );

  await lockManager.acquireLockAsync();

  await expect(lockManager.acquireLockAsync()).rejects.toThrow(
    LockManagerNotReleasedError,
  );

  await delay(10000);
  await expect(lockManager.extendLockAsync()).rejects.toThrow(
    LockManagerExtendError,
  );

  await lockManager.acquireLockAsync();

  await lockManager.extendLockAsync();

  await expect(
    Promise.all([
      lockManager.releaseLockAsync(),
      lockManager.releaseLockAsync(),
    ]),
  ).rejects.toThrow(LockManagerNotAcquiredError);

  await delay(5000);
  await lockManager.releaseLockAsync();
  await lockManager.releaseLockAsync();

  await expect(lockManager.extendLockAsync()).rejects.toThrow(
    LockManagerNotAcquiredError,
  );

  await lockManager.acquireLockAsync();
});
