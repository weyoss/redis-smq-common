import { async } from '../../src/async/async';
import { ICallback } from '../../types';

test('async.waterfall: case 1', async () => {
  let count = 0;
  await new Promise<void>((resolve, reject) => {
    async.waterfall(
      [
        (cb: ICallback<void>) => {
          expect(count).toBe(0);
          count += 1;
          cb();
        },
        (cb: ICallback<void>) => {
          expect(count).toBe(1);
          count += 1;
          cb();
        },
        (cb: ICallback<void>) => {
          expect(count).toBe(2);
          count += 1;
          cb();
        },
      ],
      (err) => {
        if (err) reject(err);
        else resolve();
      },
    );
  });
  expect(count).toBe(3);
});
