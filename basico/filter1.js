const produto = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plastico', preco: 18.99, fragil: false }
]

produtoFragil = e => e.fragil
produtocaro = e => e.preco >= 500

console.log(produto.filter(function (p) {
    return p.fragil === true
}))
console.log(produto.filter(function (p) {
    return p.preco > 500
}))

console.log(produto.filter(produtoFragil).filter(produtocaro))

