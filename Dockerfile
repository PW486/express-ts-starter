FROM node:10.15.3-alpine
WORKDIR /app

COPY package.json ormconfig.js tsconfig-paths-bootstrap.js .env ./
RUN npm install --only=prod

COPY dist ./dist
CMD node -r ./tsconfig-paths-bootstrap.js dist/server.js
EXPOSE 3000
