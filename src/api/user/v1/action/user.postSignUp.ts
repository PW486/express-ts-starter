import { Request, Response } from "express";
import { getRepository } from "typeorm";
import bcrypt from 'bcrypt';
import { User } from "../../user.entity";
import { JWT_EXPIRE } from '../../../../config/environments';
import { getTokenById } from "./user.getToken";

interface PostSignUpBody {
  name: string,
  email: string,
  password: string
}

export async function postSignUpAction(req: Request, res: Response) {
  const body: PostSignUpBody = req.body
  const name = body.name;
  const email = body.email;
  const password = await bcrypt.hash(body.password, 10);

  const newUser = getRepository(User).create({ name, email, password, permissions: ['default'] });
  const user = await getRepository(User).save(newUser);

  const accessToken = await getTokenById(user.id);

  res.status(201).json({ "access_token": accessToken, "expires_in": JWT_EXPIRE });
}
