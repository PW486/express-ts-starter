import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import sendError from '../../../../utils/error';
import { Post } from '../../post.entity';

export async function postGetByIdHandler(req: Request, res: Response, next: NextFunction) {
  const params: CommonParams = req.params;

  const post = await getRepository(Post).findOne({ id: params.id });
  if (!post) return sendError(404, 'post not found', next);

  res.status(200).json({ data: post });
}
