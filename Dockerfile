FROM node:13-alpine

WORKDIR /app

COPY . .

CMD yarn ; yarn serve