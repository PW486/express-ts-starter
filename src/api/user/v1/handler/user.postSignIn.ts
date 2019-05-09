import bcrypt from 'bcrypt';
import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { JWT_EXPIRE } from '../../../../config/environments';
import { User } from '../../user.entity';
import { getTokenByIdAction } from '../action/user.getTokenById';
import sendError from '../../../../utils/error';

interface PostSignInBody {
  email: string;
  password: string;
}

export async function postSignInHandler(req: Request, res: Response, next: NextFunction) {
  const body: PostSignInBody = req.body;
  const email = body.email;
  const password = body.password;

  const user = await getRepository(User).findOne({ email });
  if (!user) return sendError(400, 'email or password not valid', next);

  const result = await bcrypt.compare(password, user.password);
  if (!result) return sendError(400, 'email or password not valid', next);

  const accessToken = await getTokenByIdAction(user.id);

  res.status(200).json({ access_token: accessToken, expires_in: JWT_EXPIRE });
}
