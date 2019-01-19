#!/bin/bash
set -e
docker-compose build
# - Because there is a node module that run a git command within the
#   `demo-sso` submodule that fails we need to move the file
#   `demo-sso/.git` out of the way temporarily when building the
#   application
mv demo-sso/.git demo-sso/.git.bak
docker-compose run --entrypoint ./container_bin/init.sh nodejs
mv demo-sso/.git.bak demo-sso/.git
