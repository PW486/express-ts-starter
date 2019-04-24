import { Express } from 'express';
import fs from 'fs';
import path from 'path';

export async function initRoutes(app: Express) {
  const apiDir = path.join(__dirname, '../api');
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
}
