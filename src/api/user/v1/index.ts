import { postRegisterAction } from "./action/user.postRegister";
import { postLoginAction } from "./action/user.postLogin";

const routes = [
  {
    path: "/register",
    method: "post",
    action: postRegisterAction
  },
  {
    path: "/login",
    method: "post",
    action: postLoginAction
  }
];

export = routes;
