import { celebrate, Joi } from 'celebrate';

export const postSignUpValidator = celebrate({
  body: {
    name: Joi.string().max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
  }
});

export const postSignInValidator = celebrate({
  body: {
    email: Joi.string().email().required(),
    password: Joi.string().required()
  }
});
