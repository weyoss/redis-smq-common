#
# Copyright (c)
# Weyoss <weyoss@protonmail.com>
# https://github.com/weyoss
#
# This source code is licensed under the MIT license found in the LICENSE file
# in the root directory of this source tree.
#

set -x
set -e

rm -rf dist
tsc
cp -r src/redis-client/lua dist/src/redis-client/
cp -r src/lock/redis-client dist/src/lock/