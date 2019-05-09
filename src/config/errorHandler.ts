import { Express, NextFunction, Request, Response } from 'express';
import { isCelebrate } from 'celebrate';

export async function mountErrorHandler(app: Express) {
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err.name === 'UnauthorizedError') {
      err.statusCode = 401;
    } else if (err.name === 'MulterError') {
      err.statusCode = 400;
    } else if (isCelebrate(err)) {
      err.statusCode = 400;
      err.message = err.joi.message;
    }

    res.status(err.statusCode || 500).json({ message: err.message });
  });
}
