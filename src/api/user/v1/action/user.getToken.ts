import { Request, Response } from "express";
import { getRepository } from "typeorm";
import jwt from 'jsonwebtoken';
import { User } from "../../user.entity";
import { JWT_SECRET, JWT_EXPIRE } from '../../../../config/environments';

export async function getTokenById(id: number) {
  const user = await getRepository(User).findOne({ id });

  const accessToken = jwt.sign(
    { id: user.id, permissions: user.permissions },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRE }
  );

  return accessToken;
}

export async function getTokenAction(req: Request, res: Response) {
  const accessToken = await getTokenById(req.user.id);

  res.status(200).json({ "access_token": accessToken, "expires_in": JWT_EXPIRE });
}
