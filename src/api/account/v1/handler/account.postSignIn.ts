import { Account } from 'api/account/account.entity';
import bcrypt from 'bcryptjs';
import { JWT_EXPIRE } from 'config/environments';
import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import sendError from 'utils/error';
import { getTokenByIdAction } from '../action/account.getTokenById';

interface PostSignInBody {
  email: string;
  password: string;
}

export async function postSignInHandler(req: Request, res: Response, next: NextFunction) {
  const body: PostSignInBody = req.body;
  const email = body.email;
  const password = body.password;

  const account = await getRepository(Account).findOne({ email });
  if (!account) return sendError(400, 'invalid email or password', next);

  const result = await bcrypt.compare(password, account.password);
  if (!result) return sendError(400, 'invalid email or password', next);

  const accessToken = await getTokenByIdAction(account.id);

  res.status(200).json({ access_token: accessToken, expires_in: JWT_EXPIRE });
}
