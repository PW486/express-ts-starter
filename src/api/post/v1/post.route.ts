import { imageUpload } from 'utils/upload';
import { postDelByIdHandler } from './handler/post.delById';
import { postGetAllHandler } from './handler/post.getAll';
import { postGetByIdHandler } from './handler/post.getById';
import { postPostHandler } from './handler/post.post';
import { postPutByIdHandler } from './handler/post.putById';
import { postDelByIdValidator, postGetAllValidator, postGetByIdValidator, postPostValidator, postPutByIdValidator } from './post.validator';

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
  {
    path: '/posts/:id',
    method: 'put',
    auth: true,
    permission: [['admin'], ['default', 'human']],
    validator: postPutByIdValidator,
    handler: postPutByIdHandler,
  },
  {
    path: '/posts/:id',
    method: 'delete',
    auth: true,
    permission: ['admin'],
    validator: postDelByIdValidator,
    handler: postDelByIdHandler,
  },
];
