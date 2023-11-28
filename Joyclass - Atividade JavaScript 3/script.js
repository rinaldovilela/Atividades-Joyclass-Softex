function calcular() {
  var valor1 = parseFloat(prompt("Digite o primeiro valor:"));
  var valor2 = parseFloat(prompt("Digite o segundo valor:"));

  var operador = prompt("Digite o operador (+, -, *, /):");

  var resultado;
  var resto;

  switch (operador) {
    case "+":
      resultado = valor1 + valor2;
      break;
    case "-":
      resultado = valor1 - valor2;
      break;
    case "*":
      resultado = valor1 * valor2;
      break;
    case "/":
      resultado = Math.floor(valor1 / valor2);
      resto = valor1 % valor2;
      break;
    default:
      console.log("Operador inválido");
      return;
  }

  if (operador === "/") {
    console.log("Resultado: " + resultado + " Sobrando: " + resto);
  } else {
    console.log("Resultado: " + resultado);
  }
}

calcular();
