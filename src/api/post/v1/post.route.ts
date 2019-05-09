import { imageUpload } from '../../../utils/upload';
import { CommonRoute } from 'route';
import { postGetAllHandler } from './handler/post.getAll';
import { postGetByIdHandler } from './handler/post.getById';
import { postPostHandler } from './handler/post.post';
import { postGetAllValidator, postGetByIdValidator, postPostValidator } from './post.validator';

export const routes: CommonRoute[] = [
  {
    path: '/posts',
    method: 'get',
    auth: true,
    validator: postGetAllValidator,
    handler: postGetAllHandler,
  },
  {
    path: '/posts/:id',
    method: 'get',
    auth: true,
    permission: [['admin'], ['default']],
    validator: postGetByIdValidator,
    handler: postGetByIdHandler,
  },
  {
    path: '/posts',
    method: 'post',
    auth: true,
    permission: ['admin'],
    upload: imageUpload.single('photo'),
    validator: postPostValidator,
    handler: postPostHandler,
  },
];
