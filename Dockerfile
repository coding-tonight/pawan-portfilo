FROM node:22-alpine3.20


WORKDIR /usr/src/app


COPY package*.json ./


RUN npm install -g npm@11.1.0

EXPOSE 5173

COPY . .

CMD ["npm", "run", "dev"]
