//Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 6, 8)
imprimirSoma()

// Funcao com retorno
function soma(a = 2, b= 6){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())
