FROM node:8.9.4

MAINTAINER Chandresh Rajkumar Manonmani <chandresh.rm@gmail.com> <cs1193@gmail.com> (http://chandreshrm.name)

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

ENV WEBPACK_DEV_HOST 0.0.0.0
ENV WEBPACK_DEV_PORT 38141

COPY . .

# RUN npm test

EXPOSE 38141

CMD ["npm", "start"]
