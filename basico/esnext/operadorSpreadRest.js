// operador ... rest {juntar}/spred{espalhar}



// saur spreda com objeto
const funcionario = { naome: 'Maria', salario: 12348.99}
const clone = { ativo: true, ... funcionario}

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Marcia', 'Rafaela', ...grupoA]

console.log(grupoFinal)