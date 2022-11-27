import { itemsCollection } from "../database/db.js";

// export async function postItems(req, res) {
//   const { name, price, image } = req.body;

//   itemsCollection.insertOne({ name, price, image });

//   res.sendStatus(201);
// }

export async function itemCatalog(req, res) {
  const items = await itemsCollection.find({}).toArray();

  return res.send(items);
}
