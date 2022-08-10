import { delay, promisifyAll } from 'bluebird';
import { ELockStatus, LockManager } from '../../src/lock-manager/lock-manager';
import { getRedisInstance } from '../common';
import { LockManagerMethodNotAllowedError } from '../../src/lock-manager/errors/lock-manager-method-not-allowed.error';

test('LockManager: acquireOrExtend', async () => {
  const redisClient = await getRedisInstance();
  const lm1 = promisifyAll(
    new LockManager(redisClient, 'key1', 10000, false, true),
  );
  await expect(lm1.acquireOrExtendAsync()).rejects.toThrowError(
    LockManagerMethodNotAllowedError,
  );
  const lm2 = promisifyAll(new LockManager(redisClient, 'key1', 10000));
  const op1 = await lm2.acquireOrExtendAsync();
  expect(op1).toEqual(ELockStatus.locked);
  await delay(5000);
  const op2 = await lm2.acquireOrExtendAsync();
  expect(op2).toEqual(ELockStatus.extended);
  await delay(15000);
  const op3 = await lm2.acquireOrExtendAsync();
  expect(op3).toEqual(ELockStatus.locked);
});
