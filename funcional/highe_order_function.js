// Funcções qye operam em outras funções,
// tomando-as como argumentos ou retornando-as
// são cahmadas de higher-order funcions

function executar(fn, ...params) {
    return function(textpoInicial) {
        return `${textpoInicial} ${fn(...params)}`
    }
    
}
function somar(a, b, c) {
    return a + b + c
}

function multi(a, b) {
    return a * b
}

const r1 = executar(somar, 4, 5, 6)('o valor da soma é')
const r2 = executar(multi, 30,40)('o valor da multiplicação é')
console.log(r1,r2)