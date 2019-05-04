import { postSignUpAction } from "./action/user.postSignUp";
import { postSignInAction } from "./action/user.postSignIn";
import { getTokenAction } from "./action/user.getToken";
import {
  postSignUpValidator,
  postSignInValidator,
} from "./user.validator";
import CommonRoute from '../../common/route';

export const routes: CommonRoute[] = [
  {
    path: "/signup",
    method: "post",
    action: postSignUpAction,
    validator: postSignUpValidator
  },
  {
    path: "/signin",
    method: "post",
    action: postSignInAction,
    validator: postSignInValidator
  },
  {
    path: "/token",
    method: "get",
    auth: true,
    action: getTokenAction
  }
];
