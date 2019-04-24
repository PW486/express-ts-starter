import "reflect-metadata";
import { createConnection } from "typeorm";
import express from 'express';
import { env, port } from './config/environment';
import { initRoute } from './config/route';
import { initMiddleware } from './config/middleware';

createConnection().then(async connection => {
}).catch(error => console.log("TypeORM connection error: ", error));

const app = express();
initMiddleware(app);
initRoute(app);

app.listen(port, () => {
  console.log('app listening on port 3000');
});
