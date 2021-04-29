const ccarrinho = [
    '{ "nome": "borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.25}',
    '{ "nome": "Caneta", "preco": 7.50}',

]

// Retornar um array apenas com os preços
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = ccarrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)