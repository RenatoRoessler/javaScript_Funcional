function textoComTamanhoEntre(min) {
    return function(max) {
        return function(erro) {
            return function(texto) {
                // Lazy Evaluation
                const tamanho = (texto || '').trim().length
                if (tamanho < min || tamanho > max) {
                    throw erro
                }
            }
        }
    }
}

function applicarValidacao(fn) {
    return function(valor) {
        try {
            fn(valor)
        } catch (e) {
            return {error: e}
        }
    }
}

const p1 = { nome: 'A', preco: 14.99, desc: 0.25 }
//textoComTamanhoEntre(4)(25)( 'Nome Inválido')(p1.nome)

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome Inválido')
const validarNomeProduto = applicarValidacao(forcarNomeProdutoValido)
console.log(validarNomeProduto(p1.nome))