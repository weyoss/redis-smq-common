import { async } from '../../src/async/async';

test('async.eachOf: case 3', async () => {
  const promise = new Promise<string>((resolve, reject) => {
    async.eachOf(
      [],
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
