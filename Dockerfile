FROM node:14.12.0-alpine3.12

WORKDIR /sample-gatsbyjs

RUN apk update && \
    apk upgrade && \
    apk add --no-cache git

RUN npm install -g gatsby-cli

COPY package.json package-lock.json ./

RUN npm i

COPY . .

CMD ['gatsby build']
