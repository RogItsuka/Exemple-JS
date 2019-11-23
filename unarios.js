let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1 // --num1 tem maior prioridade do que num1--
console.log(num1)

console.log(++num1 === num2--) //true, pois por ++ ser colocado antes de --, ele é executado antes por prioridade.
console.log(num1 === num2)