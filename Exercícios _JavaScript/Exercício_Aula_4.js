let num1 = Number(prompt("Digite valor de X"));
let num2 = Number(prompt("Digite valor de Y"));

maiorQueMenorQue(num1, num2);

function maiorQueMenorQue(x, y) {
  if (x === y) {
    alert(`O número ${x} é igual ao número ${y}`);
    return;
  }

  if (x > y) {
    alert(`O número ${x} é maior que número ${y}`);
    return;
  }

  alert(`O número ${y} é maior que número ${x}`);
  return;
}