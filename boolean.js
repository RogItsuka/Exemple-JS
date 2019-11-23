let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //se colocar !!false, será true, se colocar !!true, será falso

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')

// na linha 16 e 26 coloquei virgula, pois estava dando erro caso não tivesse, porém no video o professor conseguiu compilar sem utilizar virgula.

let nome = ''
console.log(nome || 'Desconhecido')
//se a opção "nome" não possuir um caractere, sera mostrado na tela a palavra "Desconhecido"
