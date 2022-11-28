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
    await cartCollection.find({email}).toArray().then((emailExists) => {
      if(emailExists.length > 0) {
        cartCollection.updateOne({email: email}, {$set:{items: cart}});
      } else {
        cartCollection.insertOne({
          email,
          items: cart
        });
      }
    });
  }

  return res.send(items);
}

export async function itemCart(req, res) {

}
