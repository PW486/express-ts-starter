import { RequestHandler } from "express";

export default interface CommonRoute {
  path: string;
  method: string;
  auth?: boolean;
  permission?: string | string[] | string[][];
  upload?: RequestHandler;
  validator?: RequestHandler;
  handler: RequestHandler;
}
