import "reflect-metadata";
import { createConnection } from "typeorm";
import express from 'express';
import { NODE_ENV, PORT } from './config/environment';
import { initRoute } from './config/route';
import { initMiddleware } from './config/middleware';

createConnection(NODE_ENV).then(async connection => {
}).catch(error => console.log("TypeORM connection error: ", error));

const app = express();
initMiddleware(app);
initRoute(app);

app.listen(PORT, () => {
  console.log('app listening on port 3000');
});
