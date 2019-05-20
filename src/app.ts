import express from 'express';
import 'reflect-metadata';

import { mountErrorHandlers } from '@app/config/errorHandlers';
import { mountMiddlewares } from '@app/config/middlewares';
import { mountRoutes } from '@app/config/routes';

const app = express();

mountMiddlewares(app);
mountRoutes(app);
mountErrorHandlers(app);

export default app;
