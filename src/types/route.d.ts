import { RequestHandler } from 'express';

interface CommonRoute {
  path: string;
  method: string;
  auth?: boolean;
  permission?: string | string[] | string[][];
  upload?: RequestHandler;
  validator?: RequestHandler;
  handler: RequestHandler;
}
