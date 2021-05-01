const path = require('path')
const { first, toArray, map } = require('rxjs/operators')
const _ = require ('lodash')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '.', '?', '-', ',', '"', '♪',
    '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')', '!'
]


fn.lerDiretorios(caminho)
    .pipe(
        fn.elementosTermiadosCom('.srt') ,
        fn.lerArquivo(),
        fn.separarTextoPor('\n'),
        fn.removerSeVazio(),
        fn.removerSeApenasNumero(),
        fn.removerSimbolos(simbolos),
        fn.separarTextoPor(' '),
        fn.removerSeVazio(),
        fn.removerSeApenasNumero(),
        toArray(),
        fn.agruparElementos(),
        map(array => _.sortBy(array, el => -el.qtde))
    )
    .subscribe(console.log)


/*
const separarPorLinhas = todoConteudo => todoConteudo.split('\n')
const separarPorPalavras = todoConteudo => todoConteudo.split(' ')
*/


/*
fn.lerDiretorios(caminho)
    .then(fn.elementosTermiadosCom('.srt'))
    .then(fn.lerArquivos)
    .then(fn.mesclarElementos)
    .then(fn.serpararTextoPor('\n'))
    .then(fn.removerSeVazio)
    .then(fn.removerSeIncluir('-->'))
    .then(fn.removerSeApenasNumero)
    .then(fn.removerSimbolos(simbolos))
    .then(fn.mesclarElementos)
    .then(fn.serpararTextoPor(' '))
    .then(fn.removerSeVazio)
    .then(fn.removerSeApenasNumero)
    .then(fn.agruparPalavras)
    .then(fn.ordenarPorAtributNumerico('qtde', 'desc'))
    .then(console.log)
    */
