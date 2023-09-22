FROM node:18

WORKDIR /app

COPY . .

RUN corepack enable \
    && corepack prepare yarn@stable --activate \
    && yarn set version 3.6.1 \
    && yarn config set nodeLinker node-modules \
    && cat /app/.yarnrc.yml \
    && printf "Switched to Yarn version: "; yarn --version \
    && yarn install --immutable

ENTRYPOINT ["yarn", "serve:web"]
