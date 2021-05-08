db.produtos.updateMany({ $and: [{ "valoresNutricionais.1.percentual": { $gt: 20 } }, 
{ "valoresNutricionais.1.percentual": { $lt: 40 } }] }, 
{ $push: { tags: "contém sódio" } });
db.produtos.find({ }, { _id: 0, nome: 1, tags: 1 });
