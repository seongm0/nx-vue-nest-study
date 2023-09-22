FROM node:18

WORKDIR /app

COPY . .

RUN corepack enable \
    && corepack prepare yarn@stable --activate \
    && yarn set version 3.6.1 \
    && yarn config set nodeLinker node-modules \
    && yarn install --immutable

RUN yarn prisma:generate

ENTRYPOINT ["yarn", "serve:api"]
