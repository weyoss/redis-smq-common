import { async } from '../../src/async/async';
import { ICallback } from '../../types';

test('async.waterfall: case 3', async () => {
  const count = 0;
  // never resolves
  const promise = new Promise<void>((resolve, reject) => {
    async.waterfall(
      [
        (cb: ICallback<number>) => {
          expect(count).toBe(0);
          cb(null, count + 1);
        },
        (cnt: number, cb: ICallback<number>) => {
          expect(count).toBe(0);
          expect(cnt).toBe(1);
          cb(new Error('explicit error'));
        },
        (cnt: number, cb: ICallback<number>) => {
          expect(count).toBe(0);
          expect(cnt).toBe(2);
          cb(null, cnt + 1);
        },
      ],
      (err) => {
        reject(err);
      },
    );
  });
  await expect(promise).rejects.toThrow('explicit error');
  expect(count).toBe(0);
});
