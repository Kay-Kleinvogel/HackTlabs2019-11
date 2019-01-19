#!/bin/bash
set -x
set -e
cd "$(dirname "$(readlink -f "$0")")"
cd ../demo-sso
mkdir -p dist/img
cd dist/img
ln -s ../assets/js/app.bundle.js .
cd -
yarn start
