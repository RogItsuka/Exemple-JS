const imprimirResultado = function(nota) {
    if(nota >=7) {
        console.log('Aprovado!') }
    else {
        console.log('Reprovado!')
    
    }
}

imprimirResultado(8.0)
imprimirResultado(4.0)
imprimirResultado('Epa!') //String não é lida nessa situação