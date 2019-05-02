import { postGetAllAction } from "./action/post.getAll";
import { postGetByIdAction } from "./action/post.getById";
import { postPostAction } from "./action/post.post";
import {
  postGetAllValidator,
  postGetByIdValidator,
  postPostValidator
} from "./post.validator";
import multer from 'multer';

const upload = multer({ dest: 'uploads/' });

const routes = [
  {
    path: "/posts",
    method: "get",
    action: postGetAllAction,
    validator: postGetAllValidator
  },
  {
    path: "/posts/:id",
    method: "get",
    action: postGetByIdAction,
    validator: postGetByIdValidator
  },
  {
    path: "/posts",
    method: "post",
    action: postPostAction,
    upload: upload.single('avatar'),
    validator: postPostValidator
  }
];

export = routes;
