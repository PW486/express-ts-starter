import bodyParser from 'body-parser';
import cors from 'cors';
import { Express } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import logger from '../util/logger';

export async function initMiddleware(app: Express) {
  app.use(cors());
  app.use(helmet());
  app.use(
    morgan('combined', {
      stream: {
        write(text: string) {
          logger.info(text);
        },
      },
    }),
  );
  app.use(bodyParser.json());
}
