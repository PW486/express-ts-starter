import { check } from 'express-validator/check';

export const postGetAllValidator = [
  check('limit').optional().isInt({ min: 1, max: 100 })
    .withMessage("limit - minimum 1 and maximum 100"),
  check('offset').optional().isInt({ min: 0 })
    .withMessage("offset - minimum 0")
];

export const postGetByIdValidator = [
  check('id').exists().isInt()
];

export const postPostValidator = [
  check('title').exists().withMessage("title cannot be empty"),
  check('text').exists().withMessage("text cannot be empty")
];
