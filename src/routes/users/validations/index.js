import Joi from "joi";

export const createUserValidation = Joi.object({
  fname: Joi.string()
    .required()
    .messages({ "any.required": "please provide fname" }),
  lname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  address1: Joi.string().required(),
  address2: Joi.string().required(),
  pin_code: Joi.string().required(),
  country: Joi.string().required(),
});
