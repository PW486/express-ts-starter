import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Post } from "../../post.entity";

export async function postGetAllAction(req: Request, res: Response) {

  const postRepository = getRepository(Post);

  const posts = await postRepository.find();

  res.send(posts);
}
