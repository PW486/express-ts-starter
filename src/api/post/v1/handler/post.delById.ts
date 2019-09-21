import { Post } from 'api/post/post.entity';
import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import sendError from 'utils/error';

interface PostDelByIdParams {
  id: number;
}

export async function postDelByIdHandler(req: Request, res: Response, next: NextFunction) {
  const params: PostDelByIdParams = req.params as any;

  const post = await getRepository(Post).findOne({ id: params.id });
  if (!post) return sendError(404, 'post not found', next);

  await getRepository(Post).delete(post);

  res.status(200).end();
}
