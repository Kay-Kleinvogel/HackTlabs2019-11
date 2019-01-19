FROM node:10

USER root

RUN apt-get update
RUN npm install -g yarn
RUN yarn global add webpack-cli

ENTRYPOINT /bin/bash

EXPOSE 9000
