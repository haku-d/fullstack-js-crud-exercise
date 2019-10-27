FROM node:lts-alpine

MAINTAINER thanh.dang <thanh@clgt.vn>

WORKDIR /src

RUN apk add --no-cache make gcc g++ python curl

COPY package.json .
RUN npm install --production
RUN apk del make gcc g++ python

# Bundle app source
COPY /server .

CMD ["node", "./server/bin/www"]
