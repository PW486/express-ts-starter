import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../../user.entity";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { JWT_SECRET } from '../../../../config/environments';

export async function postRegisterAction(req: Request, res: Response) {
  const name = req.body.name;
  const email = req.body.email;
  const password = await bcrypt.hash(req.body.password, 10);

  const userRepository = getRepository(User);
  const newUser = await userRepository.create({ name, email, password, permissions: ['admin'] });
  const user = await userRepository.save(newUser);

  const expiresIn = 24 * 60 * 60;
  const accessToken = jwt.sign({ id: user.id, permissions: user.permissions }, JWT_SECRET, {
    expiresIn: expiresIn
  });
  res.status(200).json({
    "user": user, "access_token": accessToken, "expires_in": expiresIn
  });
}
