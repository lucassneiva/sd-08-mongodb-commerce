// 2 - Inclua o campo valorUnitario em todos os documentos em que esse campo não existe e atribua a ele o valor 0.00, com o tipo NumberDecimal.
db.produtos.updateMany(
  { valorUnitario: { $exists: 0 } }, 
  { $set: { valorUnitario: NumberDecimal("0.00") } },
);

db.produtos.find({}, { _id: 0, nome: 1, valorUnitario: 1 });