// Crie uma função que solicite para o usuário através do prompt de comando sua idade,
// e a partir da idade fornecida, exiba uma mensagem informando se ele é maior de idade ou não.
// Considere 18 anos como maior idade..

let idade = Number(window.prompt("Digite sua idade"));

function idadeFuncao(menorMaior) {
  if (menorMaior >= 18) {
    console.log("Você é maior de idade");
  } else {
    console.log("Você é menor de idade");
  }
}

idadeFuncao(idade);
