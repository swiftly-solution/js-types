#!/bin/bash

git clone https://github.com/swiftly-solution/documentation

rm -rf types
mkdir types
rm -rf index.d.ts
touch index.d.ts
cd generator
node index.js
node merger.js
cd ..