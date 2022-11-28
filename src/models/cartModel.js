import joi from "joi";

export const cartSchema = joi.object({
    email: joi.string().email().required(),
    description: joi.string().required(),
    value: joi.number().required(),
    image: joi.string().required()
});