import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Post } from "../../post.entity";

export async function postPostAction(req: Request, res: Response) {
  const postRepository = getRepository(Post);
  const newPost = new Post();
  newPost.title = req.body.title;
  newPost.text = req.body.text;
  newPost.photo = req.file && req.file.path;

  await postRepository.save(newPost);

  res.status(201).json({ data: newPost });
}
