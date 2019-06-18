import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { Express, Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import logger from 'utils/logger';

export function mountMiddlewares(app: Express) {
  app.use(cors());
  app.use(helmet());
  app.use(bodyParser.json());

  app.use(
    morgan('combined', {
      skip: (req: Request, res: Response) => res.statusCode < 400,
      stream: {
        write(text: string) {
          logger.error(text);
        },
      },
    }),
  );
  app.use(
    morgan('combined', {
      skip: (req: Request, res: Response) => res.statusCode > 399,
      stream: {
        write(text: string) {
          logger.info(text);
        },
      },
    }),
  );

  app.use('/api/uploads', express.static('uploads'));
}
