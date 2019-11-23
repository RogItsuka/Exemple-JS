//par nome/valor
const saudacao = 'Opa' // contexto léxico, um local que a variavel foi definida em código

function exec() {
    const saudacao = 'Fala' // outro contexto léxico
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 15,
    peso: 51,
    endereco: {
        logradouro: 'Rua Ines',
        numero: 64
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)