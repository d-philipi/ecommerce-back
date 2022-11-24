import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;

try {
  await mongoClient.connect();
  db = mongoClient.db("myEcommerce");
} catch (err) {
  console.log(err);
}


export const usersCollection = db.collection("users");
export const sessionsCollection = db.collection("sessions");