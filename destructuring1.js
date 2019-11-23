const pessoa = {
    nome: 'Sergio', 
    idade: 13,
    endereco: {
        logradouro: 'Rua Inês',
        numero: 1000
    }
}
const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: i, idade: n} = pessoa //sempre use dois pontos ao invés de igual
console.log(i, n)

const { sobrenome, humor = true} = pessoa // humor definido como true, já sobrenome sem definição.
console.log(sobrenome, humor)

const { endereco: { logradouro, numero, cep}} = pessoa //tenho um serio problema em utilizar dois pontos
console.log(logradouro, numero, cep)