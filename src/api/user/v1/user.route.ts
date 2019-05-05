import CommonRoute from '../../common/route';
import { getTokenHandler } from './handler/user.getToken';
import { postSignInHandler } from './handler/user.postSignIn';
import { postSignUpHandler } from './handler/user.postSignUp';
import { postSignInValidator, postSignUpValidator } from './user.validator';

export const routes: CommonRoute[] = [
  {
    path: '/signup',
    method: 'post',
    handler: postSignUpHandler,
    validator: postSignUpValidator,
  },
  {
    path: '/signin',
    method: 'post',
    handler: postSignInHandler,
    validator: postSignInValidator,
  },
  {
    path: '/token',
    method: 'get',
    auth: true,
    handler: getTokenHandler,
  },
];
