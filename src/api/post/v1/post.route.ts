import { postGetAllAction } from "./action/post.getAll";
import { postGetByIdAction } from "./action/post.getById";
import { postPostAction } from "./action/post.post";
import {
  postGetAllValidator,
  postGetByIdValidator,
  postPostValidator
} from "./post.validator";
import upload from '../../../utils/upload';
import CommonRoute from '../../common/route';

export const routes: CommonRoute[] = [
  {
    path: "/posts",
    method: "get",
    auth: true,
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
    permission: ['admin'],
    upload: upload.single('photo'),
    validator: postPostValidator,
    action: postPostAction
  }
];
