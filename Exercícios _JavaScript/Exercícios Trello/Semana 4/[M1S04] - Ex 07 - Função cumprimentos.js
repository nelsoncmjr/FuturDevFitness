// Crie uma função que receba o valor de uma hora qualquer, e exibe no console uma mensagem de
//  “bom dia”, “boa tarde” ou “boa noite”, de acordo com a hora passada.

let queHorasSao = window.prompt("Que horas são?");
let horas = Number(queHorasSao);

function hora(qualHorario) {
  if (qualHorario >= 6 && qualHorario <= 12) {
    console.log("Bom dia");
  } else if (qualHorario >= 13 && qualHorario <= 17) {
    console.log("Boa tarde");
  } else {
    console.log("Boa noite");
  }
}

hora(horas);
