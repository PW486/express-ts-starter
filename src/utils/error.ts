import { NextFunction } from 'express';

export default function sendError(statusCode: number, message: string, next: NextFunction) {
  const err = new Error(message);
  err.statusCode = statusCode;
  next(err);
}
