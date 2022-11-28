import bcrypt from "bcrypt";
import { usersCollection, sessionsCollection } from "../database/db.js";
import { v4 as uuid } from "uuid";

export async function signUp(req, res){
    const user = req.body;

    try {
        const hashPassword = bcrypt.hashSync(user.password, 10);
        await usersCollection.insertOne({ ...user, password: hashPassword });
        res.sendStatus(201);
      } catch (err) {
        res.sendStatus(500);
      }
}

export async function signIn(req, res){

    const userExiste = req.userLogado;
    const token = uuid();

    try {
        await sessionsCollection.insertOne({
            token,
            userId: userExiste._id,
        });

        res.send({ token, name: userExiste.name, image: userExiste.image, email: userExiste.email });
    } catch (err) {
        res.sendStatus(500);
    }
}