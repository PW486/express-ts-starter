import { Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

export async function initMiddleware(app: Express) {
  app.use(cors());
  app.use(helmet());
  app.use(morgan('combined'));
  app.use(bodyParser.json());
}
