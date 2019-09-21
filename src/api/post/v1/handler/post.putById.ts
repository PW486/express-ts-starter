import { Post } from 'api/post/post.entity';
import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import sendError from 'utils/error';

interface PostPutByIdParams {
  id: number;
}

interface PostPutByIdBody {
  title: string;
  text: string;
}

export async function postPutByIdHandler(req: Request, res: Response, next: NextFunction) {
  const params: PostPutByIdParams = req.params as any;

  const post = await getRepository(Post).findOne({ id: params.id });
  if (!post) return sendError(404, 'post not found', next);

  const body: PostPutByIdBody = req.body;
  post.title = body.title;
  post.text = body.text;

  await getRepository(Post).save(post);

  res.status(200).json({ id: post.id });
}
