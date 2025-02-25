#!/bin/bash

git clone https://github.com/swiftly-solution/documentation

rm -rf types
mkdir types
cd generator
node index.js
cd ..

rm global.d.ts
touch global.d.ts
for filename in types/**/*.d.ts; do
    echo "/// <reference path=\"$filename\" />" >> global.d.ts
done