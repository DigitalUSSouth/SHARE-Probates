FROM node:14

COPY . /app

WORKDIR /app

RUN npm install

RUN npx next telemetry disable

RUN npm run build

EXPOSE 18000

ENV PORT 18000

CMD ["npm","run","start"]
