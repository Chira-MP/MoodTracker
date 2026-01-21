FROM node:22.2.0-alpine3.18
RUN corepack enable yarn
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 5173
CMD ["yarn", "dev", "--host"]
