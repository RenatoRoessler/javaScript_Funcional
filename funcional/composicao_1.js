function composicao(...fns) {
    return function (valor) {
        return fns.reduce((acc, fn) => {
            return fn(acc)
        }, valor)
    }
}

function gritar (texto) {
    return texto.toUpperCase()
}

function enfatizar(texto) {
    return `${texto}!!!!`
}

function tornarLento(texto) {
    return texto.split('').join(' ')
}

//const resultado = composicao(gritar, enfatizar, tornarLento)('para')

const exagerado = composicao(gritar, enfatizar, tornarLento)
const resultado = exagerado ('PARA')
const resultado2 = exagerado ('Cuidado com o burraco')

console.log(resultado)
console.log(resultado2)