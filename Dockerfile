FROM node:lts-alpine

MAINTAINER thanh.dang <thanh@clgt.vn>

WORKDIR /app

RUN apk add --no-cache make gcc g++ python curl
COPY server/package.json .
RUN npm install --production
RUN apk del make gcc g++ python

# Bundle app source
COPY /server/* ./
CMD ["node", "./bin/www"]
