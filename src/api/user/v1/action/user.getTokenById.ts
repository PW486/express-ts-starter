import jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { JWT_EXPIRE, JWT_SECRET } from '../../../../config/environments';
import { User } from '../../user.entity';

export async function getTokenByIdAction(id: number) {
  const user = await getRepository(User).findOne({ id });

  const accessToken = jwt.sign({ id: user.id, permissions: user.permissions }, JWT_SECRET, { expiresIn: JWT_EXPIRE });

  return accessToken;
}
