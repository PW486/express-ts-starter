import { Account } from 'api/account/account.entity';
import { JWT_EXPIRE, JWT_SECRET } from 'config/environments';
import jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';

export async function getTokenByIdAction(id: number) {
  const account = await getRepository(Account).findOne({ id });

  const accessToken = jwt.sign({ id: account.id, permissions: account.permissions }, JWT_SECRET, { expiresIn: JWT_EXPIRE });

  return accessToken;
}
