const alunos = [
    { nome: 'João', nota: 7.3, bolsista: true },
    { nome: 'Mario', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// desafio 1: todos os alunos são bolsistas?

const todosBolsistas = (resulta, bolsista) => resulta && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))


// algum  2 : algum aluno é bolsista?
const algumBolsista = (resulta, bolsista) => resulta || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
