import { async } from '../../src/async/async';

test('async.waterfall: case 4', async () => {
  await new Promise<void>((resolve) => {
    async.waterfall([], () => resolve());
  });
});
