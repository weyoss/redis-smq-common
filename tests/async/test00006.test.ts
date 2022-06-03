import { async } from '../../src/async/async';

test('async.eachOf: case 2', async () => {
  const promise = new Promise<void>((resolve, reject) => {
    async.eachOf(
      [1, 2, 3, 4],
      (item, key, callback) => {
        callback(new Error('explicit error'));
      },
      (err) => {
        if (err) reject(err);
        else resolve();
      },
    );
  });
  await expect(promise).rejects.toThrow('explicit error');
});
