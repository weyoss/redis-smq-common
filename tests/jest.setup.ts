/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { shutdown, startUp } from './common';

const noop = () => void 0;

beforeAll(noop);

afterAll(noop);

beforeEach(async () => {
  await startUp();
});

afterEach(async () => {
  await shutdown();
});

jest.setTimeout(160000);
