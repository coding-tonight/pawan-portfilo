FROM node:23-alpine3.20

# create group and adding user to that group
RUN addgroup app && adduser -S  -G app app

USER app

WORKDIR /ui


COPY package*.json ./

USER root

RUN chown -R app:app .

USER app

RUN npm install -g npm@11.0.0

COPY . .

EXPOSE 5173

CMD npm run dev

