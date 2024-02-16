// Utilize uma estrutura condicional (if,else) para verificar se um número é positivo, 
// negativo ou zero. Exiba os valores no console.log().

let numero = window.prompt("Digite um número");

if (numero < 0) {
    console.log("Número digitado é negativo");
} else if(numero > 0) {
    console.log("Número digitado é positivo");
} else{
    console.log("Número digado é zero");
}