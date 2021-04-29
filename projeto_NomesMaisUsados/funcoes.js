const fs = require('fs')
const path = require('path')

function lerDiretorios(caminho) {
    return new Promise((resolve, reject) => {
        try {
            let arquivos = fs.readdirSync(caminho)
            arquivos = arquivos.map(arquivo => path.join(caminho, arquivo))
            resolve(arquivos)

        } catch (e) {
            reject(e)
        }
    })
}

function elementosTermiadosCom(padrao) {
    return function (array) {
        return array.filter(el => el.endsWith(padrao))
    }

}

function mesclarElementos (array) {
    return array.join(' ')
} 

function serpararTextoPor(simbolo) {
    return function(texto) {
        return texto.split(simbolo)
    }
}

function lerArquivo(caminho) {
    return new Promise((resolve, reject) => {
        try {
            const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8' })
            //console.log(conteudo.toString())
            resolve(conteudo.toString())

        } catch (e) {
            reject(e)
        }
    })
}

function lerArquivos(caminhos) {
    return Promise.all(
        caminhos.map(caminho => lerArquivo(caminho))
    )
}

function removerSeVazio(array) {
    return array.filter(el => el.trim())
}

function removerSeIncluir(padraoTextual, array) {
    return function (array) {
        return array.filter(el => !el.includes(padraoTextual))
    }
}

function removerSeApenasNumero(array) {
    return array.filter(el => {
        const num = parseInt(el.trim())
        return num !== num
    })
}

function removerSimbolos(simbolos) {
    return function(array) {
        return array.map(el => {
            return simbolos.reduce((acc, simbolo) =>{
                return acc.split(simbolo).join('')
            }, el)
        })
    }
}

function agruparPalavras(palavras) {
    return Object.values(palavras.reduce((acc, palavra) => {
        const p = palavra.toLowerCase()
        const qtde = acc[p] ? acc[p].qtde + 1 : 1
        acc[p] = { elemento: p, qtde }
        return acc
    }, {}))
}

function ordenarPorAtributNumerico(attr, ordem = 'asc') {
    return function (array) {
        const asc =  (o1, o2) => o1[attr] - o2[attr] 
        const desc =  (o1, o2) => o2[attr] - o1[attr] 
        return array.sort(ordem === 'asc' ? asc : desc)
    }
}


module.exports = {
    lerDiretorios,
    elementosTermiadosCom,
    lerArquivo,
    lerArquivos,
    removerSeVazio,
    removerSeIncluir,
    removerSeApenasNumero,
    removerSimbolos,
    mesclarElementos,
    serpararTextoPor,
    agruparPalavras, 
    ordenarPorAtributNumerico
}