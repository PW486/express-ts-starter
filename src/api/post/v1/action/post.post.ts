import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Post } from "../../post.entity";

export async function postPostAction(req: Request, res: Response) {
  console.log(req.file);

  const postRepository = getRepository(Post);

  const newPost = postRepository.create(req.body);

  await postRepository.save(newPost);

  res.send(newPost);
}
