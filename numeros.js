const peso1 = 1.0
const peso2 = Number('2.0')

console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 7
const avaliacao2 = 7

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(3)) // O "toFixed" serve para limitar a qnt de numero à aparecer.
console.log(media.toString(10)) // Em numero Binario
console.log(typeof media)
console.log(typeof Number)