import { Request, Response } from "express";
import { getConnection } from "typeorm";
import { Post } from "../../post.entity";
import { User } from "../../../user/user.entity";

interface PostPostBody {
  title: string,
  text: string
}

export async function postPostAction(req: Request, res: Response) {
  const body: PostPostBody = req.body;

  const result = await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Post)
    .values({
      title: body.title,
      text: body.text,
      photo: req.file && req.file.path,
      user: { id: req.user.id } as User
    })
    .execute();

  res.status(201).json({ data: result.identifiers[0] });
}
