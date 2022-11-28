import { cartSchema } from "../models/cartModel.js";


export async function productsValidation(req, res, next) {
    const product = req.body;
    const validation = cartSchema.validate(product, {abortEarly: false});

    if(validation.error) {
        const errors = validation.error.details.map((error) => error.message);
        res.status(422).send(errors);
    }

    next();
}