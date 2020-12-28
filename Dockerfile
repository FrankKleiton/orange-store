FROM node:13-alpine

WORKDIR /app

COPY . .

RUN yarn install

CMD ["yarn", "serve"]