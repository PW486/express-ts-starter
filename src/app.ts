import express from 'express';
import 'reflect-metadata';

import { mountErrorHandlers } from 'config/errorHandlers';
import { mountMiddlewares } from 'config/middlewares';
import { mountRoutes } from 'config/routes';

const app = express();

mountMiddlewares(app);
mountRoutes(app);
mountErrorHandlers(app);

export default app;
