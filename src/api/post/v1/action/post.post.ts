import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Post } from "../../post.entity";
import { User } from "../../../user/user.entity";

interface PostPostBody {
  title: string,
  text: string
}

export async function postPostAction(req: Request, res: Response) {
  const body: PostPostBody = req.body;

  const newPost = getRepository(Post)
    .create({
      title: body.title,
      text: body.text,
      photo: req.file && req.file.path,
      user: { id: req.user.id } as User
    });
  const post = await getRepository(Post).save(newPost);

  res.status(201).json({ data: { id: post.id } });
}
