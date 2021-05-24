db.produtos.updateMany({}, { $rename: { descricao: "descricaoSite" } });
// The $rename operator updates the name of a field and has the following form:
// {$rename: { <field1>: <newName1>, <field2>: <newName2>, ... } }
// https://docs.mongodb.com/manual/reference/operator/update/rename/
db.produtos.find({}, { _id: 0, nome: 1, descicao: 1, descricaoSite: 1 });
