db.produtos.updateMany({ nome:
   { $not: { $eq: "McChicken" } } }, { $push: { ingredientes: { $each: ["ketchup"] } } });

db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });
