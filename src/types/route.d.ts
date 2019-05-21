import { RequestHandler } from 'express';

declare global {
  interface CommonRoute {
    path: string;
    method: string;
    auth?: boolean;
    permission?: string | string[] | string[][];
    upload?: RequestHandler;
    validator?: RequestHandler;
    handler: RequestHandler;
  }
}
