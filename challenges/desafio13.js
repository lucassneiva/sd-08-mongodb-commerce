db.produtos.updateMany(
  {
    $and: [
      {
        "valoresNutricionais.2.tipo": "sódio",
      },
      {
        "valoresNutricionais.2.percentual": { $gte: 40 },
      },
    ],
  },
  {
    $addToSet: {
      tags: "muito sódio",
    },
  },
);

db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
    tags: 1,
  },
);
