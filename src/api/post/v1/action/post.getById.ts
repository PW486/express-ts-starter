import { Request, Response } from "express";
import { getConnection } from "typeorm";
import { Post } from "../../post.entity";

interface PostGetByIdParams {
  id: number
}

export async function postGetByIdAction(req: Request, res: Response) {
  const params: PostGetByIdParams = req.params
  const post = await getConnection()
    .createQueryBuilder()
    .select("post")
    .from(Post, "post")
    .where("post.id = :id", { id: params.id })
    .getOne();

  if (!post) return res.status(404).json({ message: 'post not found' });

  res.status(200).json({ data: post });
}
