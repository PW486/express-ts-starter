import { Account } from 'api/account/account.entity';
import { Post } from 'api/post/post.entity';
import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';

interface PostPostBody {
  title: string;
  text: string;
}

export async function postPostHandler(req: Request, res: Response, next: NextFunction) {
  const body: PostPostBody = req.body;

  const newPost = getRepository(Post).create({
    title: body.title,
    text: body.text,
    photo: req.file && req.file.path,
    account: { id: req.user.id } as Account,
  });
  const post = await getRepository(Post).save(newPost);

  res.status(201).json({ id: post.id });
}
