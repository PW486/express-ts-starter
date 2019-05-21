import { isCelebrate } from 'celebrate';
import { Express, NextFunction, Request, Response } from 'express';
import sendError from 'utils/error';

export function mountErrorHandlers(app: Express) {
  app.all('*', (req: Request, res: Response, next: NextFunction) => {
    return sendError(404, 'not found', next);
  });

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (!err.statusCode) {
      if (err.name === 'UnauthorizedError') {
        err.statusCode = 401;
      } else if (err.name === 'MulterError') {
        err.statusCode = 400;
      } else if (isCelebrate(err)) {
        err.statusCode = 400;
        err.message = err.joi.message;
      } else {
        err.statusCode = 500;
        err.message = 'internal server error';
      }
    }

    res.status(err.statusCode).json({ message: err.message });
  });
}
