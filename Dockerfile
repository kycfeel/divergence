FROM node:boron
RUN mkdir -p /usr/src/app
COPY package.json /usr/src/app
RUN  cd /usr/src/app; npm install
COPY . /usr/src/app
EXPOSE 3000
WORKDIR /usr/src/app

CMD npm run start
