import { cartCollection, itemsCollection } from "../database/db.js";

// export async function postItems(req, res) {
//   const { name, price, image } = req.body;

//   itemsCollection.insertOne({ name, price, image });

//   res.sendStatus(201);
// }

export async function itemCatalog(req, res) {
  const items = await itemsCollection.find({}).toArray();
  const {email, cart} = req.body;

  if(email != undefined) {
    await cartCollection.find({email}).toArray().then((bilau) => {
      if(bilau.length > 0) {
        cartCollection.updateOne({email: email}, {$set:{items: cart}});
      } else {
        console.log({email});
        cartCollection.insertOne({
          email,
          items: cart
        });
      }
    });
  }

  return res.send(items);
}
