import { async } from '../../src/async/async';

test('async.each: case 2', async () => {
  const promise = new Promise<string>((resolve, reject) => {
    const set = [1, 2, 3, 4];
    async.each(
      set,
      (item, key, callback) => callback(),
      (err) => {
        if (err) reject(err);
        else resolve('OK');
      },
    );
  });
  await expect(promise).resolves.toBe('OK');
});
