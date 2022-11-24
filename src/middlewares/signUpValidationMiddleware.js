import { signUpSchema } from "../models/usersModel.js";
import { usersCollection } from "../database/db.js";

export async function signUpValidation(req, res, next) {
    const user = req.body;
    const validation = signUpSchema.validate(user, { abortEarly: false });

    if (validation.error) {
        const errors = validation.error.details.map((d) => d.message);
        res.status(422).send(errors);
        return;
    }

    const userExiste = await usersCollection.findOne({email:user.email});

    if(userExiste){
        return res.status(409).send({ message: "Usuário já existente" });
    }

    next();
}