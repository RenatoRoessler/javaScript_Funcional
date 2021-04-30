const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '.', '?', '-', ',', '"', '♪',
    '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')'
]

/*
const separarPorLinhas = todoConteudo => todoConteudo.split('\n')
const separarPorPalavras = todoConteudo => todoConteudo.split(' ')
*/


const palavras_mais_usadas = fn.composicao(
    fn.lerDiretorios,
    fn.elementosTermiadosCom('.srt'),
    fn.lerArquivos,
    fn.mesclarElementos,
    fn.serpararTextoPor('\n'),
    fn.removerSeVazio,
    fn.removerSeIncluir('-->'),
    fn.removerSeApenasNumero,
    fn.removerSimbolos(simbolos),
    fn.mesclarElementos,
    fn.serpararTextoPor(' '),
    fn.removerSeVazio,
    fn.removerSeApenasNumero,
    fn.agruparPalavras,
    fn.ordenarPorAtributNumerico('qtde', 'desc')
)
palavras_mais_usadas((caminho)).then(console.log)


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
