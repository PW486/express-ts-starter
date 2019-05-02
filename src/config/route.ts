import { Express, Request, Response } from 'express';
import { readdirSync } from 'fs';
import { join } from 'path';
import { validationResult } from 'express-validator/check';

const apiPath = join(__dirname, '../api');

export async function mountRoute(app: Express) {
  for (const collection of readdirSync(apiPath)) {
    const collectionPath = join(apiPath, collection);

    for (const version of readdirSync(collectionPath)) {
      if (/v[0-9]+$/.test(version)) {
        const routes = require(join(collectionPath, version));

        for (const route of routes) {
          app[route.method](
            join('/', version, route.path),
            route.upload || [],
            route.validator || [],
            (req: Request, res: Response, next: Function) => {
              const errors = validationResult(req);
              if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
              }

              route.action(req, res)
                .then(() => next)
                .catch(err => next(err));
            }
          );
        };
      }
    }
  }
}
