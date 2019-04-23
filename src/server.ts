import "reflect-metadata";
import { createConnection } from "typeorm";
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import fs from 'fs';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';

// createConnection();

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('combined'));
app.use(bodyParser.json());

// const apiDir = 'api';
// const collections = fs.readdirSync(path.join(__dirname, apiDir));
// for (const collection of collections) {
//   const versions = fs.readdirSync(path.join(__dirname, apiDir, collection));
//   for (const version of versions) {
//     console.log(collection, version);
//     const versionPath = path.join(__dirname, apiDir, collection, version);
//     app.use(`/${version}`, require(versionPath));
//   }
// }

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('app listening on port 3000');
});
