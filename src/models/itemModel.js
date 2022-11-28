import Joi from "joi";

export const itemSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  image: Joi.string().required(),
});
