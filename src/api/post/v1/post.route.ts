import { postGetAllAction } from "./action/post.getAll";
import { postGetByIdAction } from "./action/post.getById";
import { postPostAction } from "./action/post.post";

export const AppRoutes = [
  {
    path: "/posts",
    method: "get",
    action: postGetAllAction
  },
  {
    path: "/posts/:id",
    method: "get",
    action: postGetByIdAction
  },
  {
    path: "/posts",
    method: "post",
    action: postPostAction
  }
];
