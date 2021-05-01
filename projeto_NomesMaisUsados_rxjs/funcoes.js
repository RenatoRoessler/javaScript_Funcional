const fs = require('fs')
const path = require('path')
const { Observable } = require('rxjs')


function lerDiretorios(caminho) {
    return new Observable(subscriber => {
        try {
            fs.readdirSync(caminho).forEach(arquivo => {
                subscriber.next(path.join(caminho, arquivo))
            })
            subscriber.complete()
        } catch (e) {
            subscriber.error(e)
        }
    })
}

function elementosTermiadosCom(padraTextual) {
    return createPipeableOperatos(subscriber => ({
        next(texto) {
            if (texto.endsWith(padraTextual)) {
                subscriber.next(texto)
            }
        }
    }))
}

function mesclarElementos(array) {
    return array.join(' ')
}

function separarTextoPor(simbolo) {
    return createPipeableOperatos(subscriber => ({
        next(texto) {
            texto.split(simbolo).forEach(parte => {
                subscriber.next(parte)
            })
        }
    }))
}

function serpararTextoPor(simbolo) {
    return function (texto) {
        return texto.split(simbolo)
    }
}

function lerArquivo() {
    return createPipeableOperatos(subscriber => ({
        next(caminho) {
            try {
                const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8' })
                subscriber.next(conteudo.toString())

            } catch (e) {
                subscriber.error()
            }
        }
    }))
}

function removerSeVazio() {
    return createPipeableOperatos(subscriber => ({
        next(texto) {
            if (texto.trim()) {
                subscriber.next(texto)
            }
        }
    }))
}


function removerSeIncluir(padraoTextual, array) {
    return function (array) {
        return array.filter(el => !el.includes(padraoTextual))
    }
}

function removerSeApenasNumero() {
    return createPipeableOperatos(subscriber => ({
        next(texto) {
            const num = parseInt(texto.trim())
            if (num !== num) {
                subscriber.next(texto)
            }

        }
    }))
}

function removerSimbolos(simbolos) {
    return createPipeableOperatos(subscriber => ({
        next(texto) {
            const textoSemSimbolos = simbolos.reduce((acc, simbolo) => {
                return acc.split(simbolo).join('')
            }, texto)
            subscriber.next(textoSemSimbolos)
        }
    }))
}

function agruparPalavras(palavras) {
    return Object.values(palavras.reduce((acc, palavra) => {
        const p = palavra.toLowerCase()
        const qtde = acc[p] ? acc[p].qtde + 1 : 1
        acc[p] = { elemento: p, qtde }
        return acc
    }, {}))
}

function agruparElementos () {
    return createPipeableOperatos ( subscriber => ({
        next(palavras) {
            const agrupado =  Object.values(palavras.reduce((acc, palavra) => {
                const p = palavra.toLowerCase()
                const qtde = acc[p] ? acc[p].qtde + 1 : 1
                acc[p] = { elemento: p, qtde }
                return acc
            }, {}))

            subscriber.next(agrupado)
        }
    }))
}

function ordenarPorAtributNumerico(attr, ordem = 'asc') {
    return function (array) {
        const asc = (o1, o2) => o1[attr] - o2[attr]
        const desc = (o1, o2) => o2[attr] - o1[attr]
        return array.sort(ordem === 'asc' ? asc : desc)
    }
}

function createPipeableOperatos(operatorFn) {
    return function (source) {
        return Observable.create(subscriber => {
            const sub = operatorFn(subscriber)
            source.subscribe({
                next: sub.next,
                error: sub.error || (e => subscriber.error(e)),
                complete: sub.complete || (e => subscriber.complete())

            })
        })
    }
}


module.exports = {
    lerDiretorios,
    elementosTermiadosCom,
    lerArquivo,
    removerSeVazio,
    removerSeIncluir,
    removerSeApenasNumero,
    removerSimbolos,
    mesclarElementos,
    separarTextoPor,
    agruparPalavras,
    ordenarPorAtributNumerico,
    agruparElementos
}