import { Request, Response } from "express";
import * as express from "express";
import { AppRoutes } from "./post.route";

const router = express.Router();

AppRoutes.forEach(route => {
  (router as any)[route.method](route.path, (request: Request, response: Response, next: Function) => {
    route.action(request, response)
      .then(() => next)
      .catch(err => next(err));
  });
});

module.exports = router;
