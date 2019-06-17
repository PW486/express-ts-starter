import { JWT_EXPIRE } from 'config/environments';
import { NextFunction, Request, Response } from 'express';
import { getTokenByIdAction } from '../action/account.getTokenById';

export async function getTokenHandler(req: Request, res: Response, next: NextFunction) {
  const accessToken = await getTokenByIdAction(req.user.id);

  res.status(200).json({ access_token: accessToken, expires_in: JWT_EXPIRE });
}
