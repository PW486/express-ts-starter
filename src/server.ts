import bodyParser from 'body-parser';
import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();

app.use(bodyParser.json());
// app.use((req, res, next) => {
//   if (!req.is('application/json')) {
//     return res.sendStatus(406);
//   }
//   next();
// })

const apiDir = 'api';
const collections = fs.readdirSync(path.join(__dirname, apiDir));
for (const collection of collections) {
  const versions = fs.readdirSync(path.join(__dirname, apiDir, collection));
  for (const version of versions) {
    const versionPath = path.join(__dirname, apiDir, collection, version);
    app.use(`/${version}`, require(versionPath));
  }
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('app listening on port 3000');
});
