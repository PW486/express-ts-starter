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

const apiDir = path.join(__dirname, 'api');
const collections = fs.readdirSync(apiDir);
for (const collection of collections) {
  const collectionDir = path.join(apiDir, collection);
  const versions = fs.readdirSync(collectionDir);
  for (const version of versions) {
    if (version.match(/v[0-9]/)) {
      const versionPath = path.join(collectionDir, version);
      app.use(`/${version}`, require(versionPath));
    }
  }
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('app listening on port 3000');
});
