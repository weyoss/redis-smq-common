import { async } from '../../src/async/async';
import { ICallback } from '../../types';

test('async.waterfall: case 2', async () => {
  let count = 0;
  await new Promise<void>((resolve, reject) => {
    async.waterfall(
      [
        (cb: ICallback<number>) => {
          expect(count).toBe(0);
          cb(null, count + 1);
        },
        (cnt: number, cb: ICallback<number>) => {
          expect(count).toBe(0);
          expect(cnt).toBe(1);
          cb(null, cnt + 1);
        },
        (cnt: number, cb: ICallback<number>) => {
          expect(count).toBe(0);
          expect(cnt).toBe(2);
          cb(null, cnt + 1);
        },
      ],
      (err, result) => {
        if (err) reject(err);
        else {
          expect(count).toBe(0);
          expect(result).toBe(3);
          count = Number(result);
          resolve();
        }
      },
    );
  });
  expect(count).toBe(3);
});
