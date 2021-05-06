// 7 - Remova o item cebola de todos os sanduíches.
// Para isso, escreva no arquivo desafio7.js duas queries, nesta ordem:

// 1. Crie uma query que faça a remoção do item cebola em todos os sanduíches.
db.produtos.updateMany(
  {}, { $pull: { ingredientes: "cebola" } },
);

// 2. Crie uma query que retorne o nome e ingredientes de todos os documentos.
db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });

// 8 - Remova o primeiro ingrediente do sanduíche Quarteirão com Queijo.
// Para isso, escreva no arquivo desafio8.js duas queries, nesta ordem:

// Crie uma query que faça a remoção do primeiro ingrediente no sanduíche Quarteirão com Queijo.

// Crie uma query que retorne o nome e ingredientes de todos os documentos.

// 9 - Remova o último ingrediente do sanduíche Cheddar McMelt.
// Para isso, escreva no arquivo desafio9.js duas queries, nesta ordem:

// Crie uma query que faça a remoção do último ingrediente no sanduíche Cheddar McMelt.

// Crie uma query que retorne o nome e ingredientes de todos os documentos.

// 10 - Adicione a quantidade de vendas dos sanduíches por dia da semana.
// Para isso, escreva no arquivo desafio10.js quatro queries, nesta ordem:

// Crie uma query que inclua um array com sete posições em todos os sanduíches. Cada uma delas representará um dia da semana, e cada posição iniciará em 0. O array deve se parecer como abaixo:
// "vendasPorDia": [0, 0, 0, 0, 0, 0, 0]
// O primeiro item desse array representa as vendas no domingo, o segundo item representa as vendas na segunda-feira, e assim até chegar ao último item, que representa as vendas no sábado.
// Crie uma query que incremente as vendas de Big Mac às quartas-feiras em 60.

// Crie uma query que incremente as vendas de todos os sanduíches de carne do tipo bovino e pão aos sábados em 120.

// Crie uma query que retorne o nome e vendasPorDia de todos os documentos.

// 11 - Insira os elementos combo e tasty no array tags de todos os sanduíches e aproveite para deixar os elementos em ordem alfabética ascendente.
// Para isso, escreva no arquivo desafio11.js duas queries, nesta ordem:

// Crie uma query que faça tanto a inserção dos elementos combo e tasty no array tags de todos os sanduíches quanto a ordenação dos elementos de tags em ordem alfabética ascendente.

// Crie uma query que retorne o nome e tags de todos os documentos.

// 12 - Ordene em todos os documentos os elementos do array valoresNutricionais pelo campo percentual de forma descendente.
// Para isso, escreva no arquivo desafio12.js duas queries, nesta ordem:

// Crie uma query que faça em todos os documentos a ordenação dos elementos do array valoresNutricionais pelo campo percentual de forma descendente. Dica: mesmo sem adicionar nenhum novo elemento, para essa operação é necessário utilizar também o modificador $each.

// Crie uma query que retorne o nome e valoresNutricionais de todos os documentos.

// 13 - Adicione o elemento muito sódio ao final do array tags nos produtos em que o percentual de sódio seja maior ou igual a 40.
// Para isso, escreva no arquivo desafio13.js duas queries, nesta ordem:

// Crie uma query que faça a adição do elemento muito sódio ao final do array tags nos produtos em que o percentual de sódio seja maior ou igual a 40.

// Crie uma query que retorne o nome e tags de todos os documentos.

// 14 - Adicione o elemento contém sódio ao final do array tags nos produtos em que o percentual de sódio seja maior do que 20 e menor do que 40.
// Para isso, escreva no arquivo desafio14.js duas queries, nesta ordem:

// Crie uma query que faça a adição do elemento contém sódio ao final do array tags nos produtos em que o percentual de sódio seja maior do que 20 e menor do que 40.

// Crie uma query que retorne o nome e tags de todos os documentos.

// 15 - Conte quantos produtos contêm Mc no nome, sem considerar letras maiúsculas ou minúsculas.
// 16 - Conte quantos produtos têm 4 ingredientes.
// 17 - Conte quantos documentos contêm as palavras frango e hamburguer utilizando o operador $text.
// Para isso, escreva no arquivo desafio17.js duas queries, nesta ordem:

// Crie uma query que faça a criação de um índice do tipo text no campo descricao com o idioma padrão portuguese.

// Crie uma query que retorne a quantidade de documentos que contêm as palavras frango e hamburguer utilizando o operador $text.

// 18 - Conte quantos documentos contêm a expressão feito com utilizando o operador $text.
// Para isso, escreva no arquivo desafio18.js duas queries, nesta ordem:

// Crie uma query que faça a criação de um índice do tipo text no campo descricao com o idioma padrão portuguese.

// Crie uma query que retorne a quantidade de documentos que contêm a expressão feito com utilizando o operador $text.

// 19 - Renomeie o campo descricao para descricaoSite em todos os documentos.
// Para isso, escreva no arquivo desafio19.js duas queries, nesta ordem:

// Crie uma query que faça a renomeação do campo descricao para descricaoSite em todos os documentos.

// Crie uma query que retorne o nome, descricao e descricaoSite de todos os documentos.

// 20 - Remova o campo curtidas do item Big Mac.
// Para isso, escreva no arquivo desafio20.js duas queries, nesta ordem:

// Crie uma query que faça a remoção do campo curtidas do item Big Mac.

// Crie uma query que retorne o nome e curtidas de todos os documentos.

// 21 - Retorne o nome dos sanduíches em que o número de curtidas é maior que o número de sanduíches vendidos.
// 22 - Retorne o nome e a quantidade de vendas (vendidos) dos sanduíches em que o número de vendas é múltiplo de 5.
