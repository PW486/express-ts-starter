import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Post } from "../../post.entity";

export async function postGetAllAction(req: Request, res: Response) {
  const postRepository = getRepository(Post);
  const postList = await postRepository.find({
    order: {
      id: "DESC"
    },
    skip: req.query.offset || 0,
    take: req.query.limit || 100,
  });

  res.status(200).json({ data: postList });
}
