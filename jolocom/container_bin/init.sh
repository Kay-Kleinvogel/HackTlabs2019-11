#!/bin/bash
set -x
set -e
cd "$(dirname "$(readlink -f "$0")")"
cd ../demo-sso
yarn --dev
yarn add --dev webpack-cli copy-webpack-plugin @types/react-dom @types/history @types/react-router @types/socket.io-client
yarn
