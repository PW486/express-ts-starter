import "reflect-metadata";
import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { createConnection } from "typeorm";
import { isCelebrate } from 'celebrate';
import { NODE_ENV, DB_CONFIG } from './config/environments';
import { mountMiddlewares } from './config/middlewares';
import { mountRoutes } from './config/routes';

createConnection(DB_CONFIG[NODE_ENV]);

const app = express();
mountMiddlewares(app);
mountRoutes(app);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ message: err.message });
  } else if (isCelebrate(err)) {
    res.status(400).json({ message: err.message });
  } else {
    res.status(500).json({ message: err.message });
  }
})

export default app;
