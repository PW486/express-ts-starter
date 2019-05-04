import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Post } from "../../post.entity";

interface PostGetByIdParams {
  id: number
}

export async function postGetByIdAction(req: Request, res: Response) {
  const params: PostGetByIdParams = req.params

  const post = await getRepository(Post).findOne({ id: params.id });
  if (!post) return res.status(404).json({ message: 'post not found' });

  res.status(200).json({ data: post });
}
