db.produtos.updateMany(
  {},
  { 
    $push: {
      vendasPorDia: {  
        $each: [0, 0, 0, 0, 0, 0, 0],
      },
    },
  },
);

db.produtos.updateOne(
  { nome: "Big Mac" },
  { $set: { "vendasPordia.3": 60 } },
);

db.produtos.updateOne(
  { nome: "Big Mac" },
  { $set: { "vendasPordia.3": 60 } },
);

db.produtos.find(
  {},
  { _id: 0, nome: 1, vendasPorDia: 1 },
);
