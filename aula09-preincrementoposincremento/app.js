let n=10
let n2=n++
console.log(n)
console.log(n2)//O operador de pós-incremento primeiro retorna o valor atual da variável e, em seguida, aumenta o valor da variável em 1. Desta forma n2 recebe o valor original de n, que é 10. n é incrementado em 1. Por isso console.log(n++) imprime 10.

let x = 10
let y = ++x
console.log(x)
console.log(y)//O operador de pré-incremento primeiro aumenta o valor da variável e, em seguida, retorna o valor incrementado.. Por isso o console.log(++x) imprime 11.

/* 
concatenação
*/
let m=10
let z=20
console.log(m+z)
console.log(m + "" + z)