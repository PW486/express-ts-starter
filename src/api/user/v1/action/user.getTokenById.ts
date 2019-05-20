import jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { JWT_EXPIRE, JWT_SECRET } from '@app/config/environments';
import { User } from '@app/api/user/user.entity';

export async function getTokenByIdAction(id: number) {
  const user = await getRepository(User).findOne({ id });

  const accessToken = jwt.sign({ id: user.id, permissions: user.permissions }, JWT_SECRET, { expiresIn: JWT_EXPIRE });

  return accessToken;
}
