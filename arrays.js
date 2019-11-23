const valores = [4.5, 7.7, 8.1, 6.7]
console.log(valores [0], valores [3])
console.log(valores[7]) //caso nao tenha o valor afirmado, a resposta sera "Indefinida"

valores [4] = 9
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores [0]
console.log(valores)

console.log(typeof valores)