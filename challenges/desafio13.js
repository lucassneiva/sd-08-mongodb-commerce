db.produtos.updateMany({ valoresNutricionais: 
    { $elemMatch: { tipo: "sódio", percentual: { $gte: 40 } } } }, 
{ $push: { tags: "muito sódio" } });

db.proddutos.find({ nome: 1, tags: 1, _id: 0 });
