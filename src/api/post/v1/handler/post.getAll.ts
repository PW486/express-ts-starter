import { Request, Response, NextFunction } from 'express';
import { getConnection } from 'typeorm';
import { CommonQuery } from '../../../common/data';
import { Post } from '../../post.entity';

interface PostGetAllQuery extends CommonQuery {
  search?: string;
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
