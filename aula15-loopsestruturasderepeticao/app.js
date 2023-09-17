// Loops podem ser indefinidos (While e Do While) e definidos (For-sabe a quantidade de vezes que vai iterar)
console.log("Início do programa")

//SINTAXE for ([inicialização]; [condição]; [expressão final])
for(let i=0; i < 10; i++){
    console.log("CFB Cursos - valor do i: " + i)
}
console.log("Fim do programa")

for(let i=0; i < 100; i++){
    if(i%2==0){ 
    console.log(i + " é par")
    }else{
        console.log(i + " é impar")
        }
}
console.log("Fim do programa")

let frutas = ["Maçã", "Banana", "Morango", "Pera", "Uva"];
let frutaNaoGostada = "Abacaxi"; // A fruta que você não gosta

for (let i = 0; i < frutas.length; i++) {
  console.log("Eu gosto de " + frutas[i])
}

function iniciarJogo() {
    console.log("Preparando-se para iniciar o jogo...");
  
    for (let i = 3; i > 0; i--) {
      console.log(i);
    }
  
    console.log("Começou o jogo!");
    // Aqui você colocaria a lógica principal do jogo
  }
  
  iniciarJogo();