import express from 'express';
import { NextFunction, Request, Response } from 'express';
import { mountMiddlewares } from './config/middlewares';
import { mountRoutes } from './config/routes';

const app = express();

mountMiddlewares(app);
mountRoutes(app);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ message: err.message });
  } else if (err.name === 'MulterError') {
    res.status(400).json({ message: err.message });
  } else if (err.name === 'ValidationError') {
    res.status(400).json({ message: err.message });
  } else {
    res.status(500).json({ message: err.message });
  }
});

export default app;
