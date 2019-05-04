import { postGetAllAction } from "./action/post.getAll";
import { postGetByIdAction } from "./action/post.getById";
import { postPostAction } from "./action/post.post";
import {
  postGetAllValidator,
  postGetByIdValidator,
  postPostValidator
} from "./post.validator";
import upload from '../../../utils/upload';

const routes = [
  {
    path: "/posts",
    method: "get",
    auth: true,
    permission: [['admin'], ['default']],
    validator: postGetAllValidator,
    action: postGetAllAction
  },
  {
    path: "/posts/:id",
    method: "get",
    auth: true,
    permission: [['admin'], ['default']],
    validator: postGetByIdValidator,
    action: postGetByIdAction
  },
  {
    path: "/posts",
    method: "post",
    auth: true,
    permission: [['admin'], ['default']],
    upload: upload.single('photo'),
    validator: postPostValidator,
    action: postPostAction
  }
];

export = routes;
