import { Express } from 'express';
import { readdirSync } from 'fs';
import { join } from 'path';

const apiPath = join(__dirname, '../api');

export async function mountRoute(app: Express) {
  for (const collection of readdirSync(apiPath)) {
    const collectionPath = join(apiPath, collection);

    for (const version of readdirSync(collectionPath)) {
      if (/v[0-9]+$/.test(version)) {
        app.use(`/${version}`, require(join(collectionPath, version)));
      }
    }
  }
}
