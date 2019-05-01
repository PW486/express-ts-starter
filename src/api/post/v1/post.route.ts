import { postGetAllAction } from "./action/post.getAll";
import { postGetByIdAction } from "./action/post.getById";
import { postPostAction } from "./action/post.post";
import { check } from 'express-validator/check';
import multer from 'multer';

const upload = multer({ dest: 'uploads/' });

export const routes = [
  {
    path: "/posts",
    method: "get",
    action: postGetAllAction,
    validator: []
  },
  {
    path: "/posts/:id",
    method: "get",
    action: postGetByIdAction,
    validator: [
      check('id').isLength({ min: 2 })
    ]
  },
  {
    path: "/posts",
    method: "post",
    action: postPostAction,
    upload: upload.single('avatar'),
    validator: [
      check('title').isString(),
      check('text').isString()
    ]
  }
];
