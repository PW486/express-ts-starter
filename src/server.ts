import "reflect-metadata";
import { createConnection } from "typeorm";
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { env, port, db } from './config/environment';
import { initRoutes } from './config/route';

createConnection().then(async connection => {
}).catch(error => console.log("TypeORM connection error: ", error));

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('combined'));
app.use(bodyParser.json());

initRoutes(app);

app.listen(port, () => {
  console.log('app listening on port 3000');
});
