FROM node:14.15.4-alpine

ENV CHOKIDAR_USEPOLLING=true

WORKDIR /app

COPY ./package.json .
RUN yarn install

CMD ["yarn", "start"]
