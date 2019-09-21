import { celebrate, Joi } from 'celebrate';

export const postGetAllValidator = celebrate({
  query: {
    limit: Joi.number().integer().min(1).max(100).default(10),
    offset: Joi.number().integer().min(0).default(0)
  }
});

export const postGetByIdValidator = celebrate({
  params: {
    id: Joi.number().integer().positive().required()
  }
});

export const postPostValidator = celebrate({
  body: {
    title: Joi.string().max(50).required(),
    text: Joi.string().required()
  }
});

export const postPutByIdValidator = celebrate({
  params: {
    id: Joi.number().integer().positive().required()
  },
  body: {
    title: Joi.string().max(50).required(),
    text: Joi.string().required()
  }
});

export const postDelByIdValidator = celebrate({
  params: {
    id: Joi.number().integer().positive().required()
  }
});
