// Crie uma função que receba dois números como parâmetros e retorne sua soma no console.log.

let num1 = window.prompt("Digite primeiro número");
let num2 = window.prompt("Digite segundo número");

function soma (numero1, numero2) {
    let total = Number(numero1) + Number(numero2);
    console.log(total);
}

soma(num1, num2)

