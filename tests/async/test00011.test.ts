import { async } from '../../src/async/async';

test('async.each: case 1', async () => {
  const promise = new Promise<string>((resolve, reject) => {
    const map: Record<string, number> = { first: 1, second: 2, third: 3 };
    async.each(
      map,
      (item, key, callback) => callback(),
      (err) => {
        if (err) reject(err);
        else resolve('OK');
      },
    );
  });
  await expect(promise).resolves.toBe('OK');
});
