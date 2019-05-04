import "reflect-metadata";
import { createConnection } from "typeorm";
import { NODE_ENV, PORT, DB_CONFIG } from './config/environments';
import app from "./app";

createConnection(DB_CONFIG[NODE_ENV]).then(() => {
  app.listen(PORT);
});
