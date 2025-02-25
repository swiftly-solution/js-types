#!/bin/bash

git clone https://github.com/swiftly-solution/documentation

rm -rf JSDocs
mkdir JSDocs
cd generator
node index.js