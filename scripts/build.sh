#!/usr/bin/env bash
# prelude
set -e
rm -rf dist

# compile to commonjs, generate declaration, no comments
./node_modules/.bin/babel src --out-dir dist