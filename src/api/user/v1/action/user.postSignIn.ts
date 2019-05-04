import { Request, Response } from "express";
import { getRepository } from "typeorm";
import bcrypt from 'bcrypt';
import { User } from "../../user.entity";
import { JWT_EXPIRE } from '../../../../config/environments';
import { getTokenById } from "./user.getToken";

interface PostSignInBody {
  email: string,
  password: string
}

export async function postSignInAction(req: Request, res: Response) {
  const body: PostSignInBody = req.body;
  const email = body.email;
  const password = body.password;

  const user = await getRepository(User).findOne({ email });
  if (!user) return res.status(400).json({ message: 'email or password not valid' });

  const result = await bcrypt.compare(password, user.password);
  if (!result) return res.status(400).json({ message: 'email or password not valid' });

  const accessToken = await getTokenById(user.id);

  res.status(200).json({ "access_token": accessToken, "expires_in": JWT_EXPIRE });
}
