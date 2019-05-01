import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Post } from "../../post.entity";

export async function postGetByIdAction(req: Request, res: Response) {

  const postRepository = getRepository(Post);

  const post = await postRepository.findOne(req.params.id);

  if (!post) {
    res.status(404).json({ message: 'post not found' });
    res.end();
    return;
  }

  res.send(post);
}
