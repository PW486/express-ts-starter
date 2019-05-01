import { Router, Request, Response } from "express";
import { routes } from "./post.route";
import { validationResult } from 'express-validator/check';

const router: any = Router();

routes.forEach(route => {
  router[route.method](route.path, route.upload ? route.upload : [], route.validator, (req: Request, res: Response, next: Function) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    route.action(req, res)
      .then(() => next)
      .catch(err => next(err));
  });
});

module.exports = router;
