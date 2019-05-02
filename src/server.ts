import "reflect-metadata";
import express from 'express';
import { createConnection } from "typeorm";
import { NODE_ENV, PORT, DB_CONFIG } from './config/environments';
import { mountMiddlewares } from './config/middlewares';
import { mountRoutes } from './config/routes';

const server = async () => {
  await createConnection(DB_CONFIG[NODE_ENV]);

  const app = express();
  await mountMiddlewares(app);
  await mountRoutes(app);

  app.use((err, req, res, next) => {
    console.log(err)
    res.status(500)
  })

  app.listen(PORT);
}

server();
