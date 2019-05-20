import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Post } from '@app/api/post/post.entity';
import sendError from '@app/utils/error';

interface PostGetByIdParams {
  id: number;
}

export async function postGetByIdHandler(req: Request, res: Response, next: NextFunction) {
  const params: PostGetByIdParams = req.params;

  const post = await getRepository(Post).findOne({ id: params.id });
  if (!post) return sendError(404, 'post not found', next);

  res.status(200).json({ data: post });
}
