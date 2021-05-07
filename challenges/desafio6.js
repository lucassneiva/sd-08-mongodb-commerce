db.produtos.updateMany({ nome: { $in: ["Big Mac", "Quarteirão com Queijo"] } }, { $addToSet: { ingredientes: "bacon" } }, { upsert: true });

db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });
