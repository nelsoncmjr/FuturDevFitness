// Use um switch para exibir mensagens diferentes com base em uma condição.
let opcao = window.prompt("Digite de 1 a 5 para opções sabão");

switch (opcao) {
  case "1":
    console.log("Sabão rosa");
    break;
  case "2":
    console.log("Sabão azul");
    break;
  case "3":
    console.log("Sabão verde");
    break;
  case "4":
    console.log("Sabão branco");
    break;
  case "5":
    console.log("Sabão amarelo");
    break;
  default:
    console.log("Opção invalida");
    break;
}

