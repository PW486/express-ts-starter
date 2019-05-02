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
    validator: postGetAllValidator,
    action: postGetAllAction
  },
  {
    path: "/posts/:id",
    method: "get",
    validator: postGetByIdValidator,
    action: postGetByIdAction
  },
  {
    path: "/posts",
    method: "post",
    upload: upload.single('photo'),
    validator: postPostValidator,
    action: postPostAction
  }
];

export = routes;
