import express from 'express';
import { mountErrorHandler } from './config/errorHandler';
import { mountMiddlewares } from './config/middlewares';
import { mountRoutes } from './config/routes';

const app = express();

mountMiddlewares(app);
mountRoutes(app);
mountErrorHandler(app);

export default app;
