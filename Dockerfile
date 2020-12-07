FROM node:alpine

RUN apk update && apk add python make g++

WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY . . 
CMD [ "npm", "run", "serve" ]