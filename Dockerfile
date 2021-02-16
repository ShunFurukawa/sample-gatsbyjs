FROM node:14.12.0-alpine3.12

WORKDIR /sample-gatsbyjs

RUN apk update && \
    apk upgrade && \
    apk add --no-cache git \
        autoconf \
        automake \
        file \
        gcc \
        libtool \
        make \
        musl-dev \
        tiff \
        jpeg \
        nasm \
        pkgconf \
        zlib \
        zlib-dev

RUN npm install -g gatsby-cli

COPY package.json package-lock.json ./

RUN npm i

COPY . .

CMD ['gatsby build']
