const pessoa = { 
    nome: 'Maria',
    altura: 1.76,
    cidade: 'São Paulo'
}

//atribuação por referencia
function alteraPessoa (pessoa) {
    const novaPessoa = {...pessoa}
    novaPessoa.nome = 'João'
    novaPessoa.cidade = 'Fortaleza'
    return novaPessoa
}

//const novaPessoa = pessoa

const novoPessoa = alteraPessoa(pessoa)

console.log(novoPessoa)
