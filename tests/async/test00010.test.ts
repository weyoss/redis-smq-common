import { async } from '../../src/async/async';

test('async.eachIn: case 3', async () => {
  const promise = new Promise<string>((resolve, reject) => {
    const map: Record<string, number> = {};
    async.eachIn(
      map,
      (item, key, callback) => {
        callback(new Error('unexpected call'));
      },
      (err) => {
        if (err) reject(err);
        else resolve('OK');
      },
    );
  });
  await expect(promise).resolves.toBe('OK');
});
