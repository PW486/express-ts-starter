import CommonRoute from '../../common/route';
import { getTokenHandler } from './handler/user.getToken';
import { postSignInHandler } from './handler/user.postSignIn';
import { postSignUpHandler } from './handler/user.postSignUp';
import { postSignInValidator, postSignUpValidator } from './user.validator';

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
