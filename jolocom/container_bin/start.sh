#!/bin/bash
set -x
set -e
cd "$(dirname "$(readlink -f "$0")")"
cd ../demo-sso
mkdir -p dist/img
cd dist/img
if [ ! -e app.bundle.js ]; then
    ln -s ../assets/js/app.bundle.js .
    ln -s ../../claim_stepsWalked.png .
    ln -s ../../stepsWalked.json .
fi
cd -
yarn start
