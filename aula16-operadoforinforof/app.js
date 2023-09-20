const objs=document.getElementsByTagName('div')
for(o of objs){
    console.log(o)// iterar as posições da div (Mostra todos os títulos da div)
}

for(o of objs){//altera o texto de todas as divs
    console.log(o.innerHTML="Curso")
}

let num = [10, 20, 30, 40, 50]
for (let i=0; i<num.length; i++){
    console.log(num[i])
}

let num1 = [10, 20, 30, 40, 50]
for(a in num1){ // itera as posições
    console.log(a)
}

for(a in num1){
    console.log(num1[a])
}

for(a of num1){// itera os elementos
    console.log(a)
}

const pessoa = {
    nome: 'Andre',
    sobrenome: 'Silva',
    idade: 38,
    peso: 75
};

for (let atributo in pessoa) {//for in pode ser usado para percorrer objetos
    console.log(`${atributo}: ${pessoa[atributo]}`);//usou template strings
}

