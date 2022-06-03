import { async } from '../../src/async/async';

test('async.eachIn: case 1', async () => {
  await new Promise<void>((resolve, reject) => {
    const map: Record<string, number> = { first: 1, second: 2, third: 3 };
    let keys = Object.keys(map);
    async.eachIn(
      map,
      (item, key, callback) => {
        expect(keys.includes(key)).toBe(true);
        expect(map[key]).toBe(item);
        keys = keys.filter((i) => i !== key);
        callback();
      },
      (err) => {
        if (err) reject(err);
        else resolve();
      },
    );
  });
});
