import express from 'express';
const app = express();

const apiFolder = '/api/';
import fs from 'fs';
import path from 'path';

fs.readdirSync(path.join(__dirname, apiFolder)).forEach(file => {
  console.log(file);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  // console.log('app listening on port 3000');
});
