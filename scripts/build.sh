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

npm run type-coverage
npm run lint
npm run format
rm -rf dist

# esm
tsc -p ./tsconfig.json
cp -r src/redis-client/lua-scripts/scripts dist/esm/src/redis-client/lua-scripts/
cp -r src/locker/redis-client/lua-scripts/scripts dist/esm/src/locker/redis-client/lua-scripts/

# cjs
tsc -p ./tsconfig.cjs.json
cat >dist/cjs/package.json <<!EOF
{
    "type": "commonjs"
}
!EOF
cp -r src/redis-client/lua-scripts/scripts dist/cjs/src/redis-client/lua-scripts/
cp -r src/locker/redis-client/lua-scripts/scripts dist/cjs/src/locker/redis-client/lua-scripts/
