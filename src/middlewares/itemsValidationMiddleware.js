import { itemSchema } from "../models/itemModel.js";

export async function itemValidation(req, res, next) {
    const {name, price, image} = req.body;
    const validation = itemSchema.validate({name, price, image}, {abortEarly: false});

    if(validation.error) {
        const errors = validation.error.details.map((error) => error.message);
        res.status(422).send(errors);
    }

    next();
}