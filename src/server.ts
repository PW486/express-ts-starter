import "reflect-metadata";
import { createConnection } from "typeorm";
import express from 'express';
import { NODE_ENV, PORT, DB_CONFIG } from './config/environment';
import { initRoute } from './config/route';
import { initMiddleware } from './config/middleware';

const server = async () => {
  await createConnection(DB_CONFIG[NODE_ENV]);

  const app = express();
  await initMiddleware(app);
  await initRoute(app);

  app.listen(PORT);
}

server();
