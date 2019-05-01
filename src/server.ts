import "reflect-metadata";
import express from 'express';
import { createConnection } from "typeorm";
import { NODE_ENV, PORT, DB_CONFIG } from './config/environment';
import { mountMiddleware } from './config/middleware';
import { mountRoute } from './config/route';

const server = async () => {
  await createConnection(DB_CONFIG[NODE_ENV]);

  const app = express();
  await mountMiddleware(app);
  await mountRoute(app);

  app.use((err, req, res, next) => {
    console.log(err)
    res.status(500)
  })

  app.listen(PORT);
}

server();
