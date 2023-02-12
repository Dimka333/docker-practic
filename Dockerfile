FROM node:16

WORKDIR /war/www/

COPY package.json .

RUN npm install

EXPOSE 3000

CMD [ "node", "./src/server.js" ]