import bcrypt from "bcrypt";
import { usersCollection } from "../database/db.js";

export async function signInValidation(req, res, next) {
    const user = req.body;
    const userExiste = await usersCollection.findOne({email:user.email});

    if(!userExiste){
        return res.status(401).send({ message: "Email ou senha incorretos!" });
    }

    const passwordOk = bcrypt.compareSync(user.password, userExiste.password);

    if(!passwordOk){
        return res.status(401).send({ message: "Email ou senha incorretos!" });
    }

    req.userLogado = userExiste;

    next();
}