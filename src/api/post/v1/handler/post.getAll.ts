import { NextFunction, Request, Response } from 'express';
import { getConnection } from 'typeorm';
import { Post } from '@app/api/post/post.entity';

interface PostGetAllQuery {
  offset: number;
  limit: number;
}

export async function postGetAllHandler(req: Request, res: Response, next: NextFunction) {
  const query: PostGetAllQuery = req.query;

  const postList = await getConnection()
    .createQueryBuilder()
    .select('post')
    .from(Post, 'post')
    .orderBy('id', 'DESC')
    .skip(query.offset)
    .take(query.limit)
    .getMany();

  res.status(200).json({ data: postList });
}