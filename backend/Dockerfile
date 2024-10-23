# Backend Dockerfile
FROM node:16

WORKDIR /app

COPY package.json /app/package.json
RUN npm install

COPY . /app

EXPOSE 5000

CMD ["node","server.js"]