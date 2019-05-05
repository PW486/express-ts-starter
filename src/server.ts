import 'reflect-metadata';
import { createConnection } from 'typeorm';
import app from './app';
import { DB_CONFIG, NODE_ENV, PORT } from './config/environments';

createConnection(DB_CONFIG[NODE_ENV]).then(() => {
  app.listen(PORT);
});
