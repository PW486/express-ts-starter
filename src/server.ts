import "reflect-metadata";
import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { createConnection } from "typeorm";
import { NODE_ENV, PORT, DB_CONFIG } from './config/environments';
import { mountMiddlewares } from './config/middlewares';
import { mountRoutes } from './config/routes';

async function server() {
  await createConnection(DB_CONFIG[NODE_ENV]);

  const app = express();
  await mountMiddlewares(app);
  await mountRoutes(app);

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message });
  })

  app.listen(PORT);
}

server();
