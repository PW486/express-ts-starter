import { check } from 'express-validator/check';

export const postGetAllValidator = [];

export const postGetByIdValidator = [
  check('id').isLength({ min: 2 }).withMessage('id minimum length is 2')
];

export const postPostValidator = [
  check('title').isString(),
  check('text').isString()
];
