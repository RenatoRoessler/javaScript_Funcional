// Os dois tipos ...
// 1. Operadores de Criação
// 2. Operadores Encadeáveis (Pipeable Op.)

const { of } = require('rxjs')
const { last, map } = require('rxjs/operators')

of(1, 2, 'ana', false, 'ultimo')
    .pipe(
        last(),
        map(v => v[0]),
        map( v => `a letra encontrada foi: ${v}` )
    )
    .subscribe(function (valor) {
        console.log(`O valor gerado foi: ${valor}`)
    })