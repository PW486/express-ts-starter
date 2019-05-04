import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../../user.entity";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { SECRET_KEY } from '../../../../config/environments';

export async function postLoginAction(req: Request, res: Response) {
  const email = req.body.email;
  const password = req.body.password;
  const userRepository = getRepository(User);

  const user = await userRepository.findOne({ email });
  if (!user) return res.status(400).json({ message: 'not valid email or password' });

  const result = await bcrypt.compare(password, user.password);
  if (!result) return res.status(400).json({ message: 'not valid email or password' });

  const expiresIn = 24 * 60 * 60;
  const accessToken = jwt.sign({ id: user.id, permissions: ['admin'] }, SECRET_KEY, {
    expiresIn: expiresIn
  });
  res.status(200).json({ "user": user, "access_token": accessToken, "expires_in": expiresIn });
}
