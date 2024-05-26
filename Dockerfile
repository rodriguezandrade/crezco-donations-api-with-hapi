# specify the node base image with your desired version node:<version>
FROM node:20-bookworm-slim

WORKDIR /app

COPY . .

ENV SERVER_PORT=3000
# replace this with your application's default port
EXPOSE ${SERVER_PORT}

CMD ["npm", "run", "start"]
