/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { ERedisConfigClient } from '../../types';
import {
  pubSubChannel,
  pubSubPattern,
  scriptRunning,
  standardCommands,
  transactionRunning,
} from './common';

test('NodeRedisClient', async () => {
  await standardCommands({ client: ERedisConfigClient.REDIS });
  await scriptRunning({ client: ERedisConfigClient.REDIS });
  await pubSubChannel({ client: ERedisConfigClient.REDIS });
  await pubSubPattern({ client: ERedisConfigClient.REDIS });
  await transactionRunning({ client: ERedisConfigClient.REDIS });
});
