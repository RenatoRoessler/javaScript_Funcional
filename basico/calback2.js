const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback
let notaBaixas = []
for (let i in notas) {
    if (notas[i] < 7 ) {
        notaBaixas.push(notas[i])
    }
}

console.log(notaBaixas)

//com callback
const notaBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notaBaixas2)

const notasMenorQue7 = nota => nota < 7 
const notaBaixa33 = notas.filter(notasMenorQue7 )
console.log(notaBaixa33)