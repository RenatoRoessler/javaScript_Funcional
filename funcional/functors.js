// functors são objetos que implementam a função MAP
// que também é um whapper de um valor

//ARRAY é um exemplo de FUNCTIORS
const nums = [1, 2, 3, 4, 5, 6]
const novoNums = nums
    .map(el => el + 10)
    .map(el => el * 2)

console.log(nums, novoNums)


function TipoSeguro(valor) {
    return {
        valor,
        invalido() {
            return this.valor === null || this.valor === undefined
        },
        map(fn) {
            if (this.invalido()) {
                return TipoSeguro(null)
            } else {
                const novoValor = fn(this.valor)
                return TipoSeguro(novoValor)
            }

        }
    }
}

const resultado = TipoSeguro('Esse é um texto')
    .map(t => t.toUpperCase())
    .map(t => `${t}!!!!`)
    .map(t => t.split('').join(' '))

console.log(resultado.valor)