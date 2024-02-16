// Implemente uma função que determine se um número é par ou ímpar.

let num1 = window.prompt("Digite um número");
let numeroInteiro = Number(num1);

function parImpar(numero) {
  if (numero % 2 === 0) {
    console.log("Número é par");
  } else {
    console.log("Número é impar");
  }
}

parImpar(numeroInteiro);
