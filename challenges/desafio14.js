db.produtos.updateMany(
  { valoresNutricionais: { $elemMatch: 
    { tipo: "sódio", percentual: { $elemMatch: { $gt: 20, $lt: 40 } } } } },
  { $push: { tags: "muito sódio" } },
);

db.produtos.find({}, { tags: 1, nome: 1, _id: 0 });
