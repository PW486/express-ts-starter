import { getTokenHandler } from './handler/account.getToken';
import { postSignInHandler } from './handler/account.postSignIn';
import { postSignUpHandler } from './handler/account.postSignUp';
import { postSignInValidator, postSignUpValidator } from './account.validator';

export const routes: CommonRoute[] = [
  {
    path: '/signup',
    method: 'post',
    validator: postSignUpValidator,
    handler: postSignUpHandler,
  },
  {
    path: '/signin',
    method: 'post',
    validator: postSignInValidator,
    handler: postSignInHandler,
  },
  {
    path: '/token',
    method: 'get',
    auth: true,
    handler: getTokenHandler,
  },
];
