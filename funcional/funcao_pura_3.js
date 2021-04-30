

let qtdExecucoes = 0 
function somarPura (a, b) {
    return a + b
}

function somarImpura (a, b) {
    qtdExecucoes++
    return a + b
}


console.log(qtdExecucoes)
console.log(somarImpura(68,31))
console.log(qtdExecucoes)