// diz-se que uma linguagem de programação possui
// funções de primeira classe quando funções nessa 
// linguagem são tratadas como qualquer outra variavel

const x = 3
const y = function (txt) {
    return `Esse é o texto: ${txt}` 
}

const z = () => console.log("zzzzzz!")
console.log(x)
console.log(y('olá'))
z()