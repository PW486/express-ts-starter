import { Request, Response } from "express";
import { getConnection } from "typeorm";
import { Post } from "../../post.entity";
import CommonQuery from "../../../common/query";

interface PostGetAllQuery extends CommonQuery { }

export async function postGetAllAction(req: Request, res: Response) {
  const query: PostGetAllQuery = req.query;

  const postList = await getConnection()
    .createQueryBuilder()
    .select("post")
    .from(Post, "post")
    .orderBy('id', 'DESC')
    .skip(query.offset)
    .take(query.limit)
    .getMany();

  res.status(200).json({ data: postList });
}
