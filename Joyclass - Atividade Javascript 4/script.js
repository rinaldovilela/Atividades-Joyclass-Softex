
function saudacao() {
    console.log("Olá! Bem-vindo à calculadora.");
}

function soma(a, b) {
    return a + b;
}

const multiplicacao = (a, b) => a * b;

function calculadora() {

    saudacao();


    var valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    var valor2 = parseFloat(prompt("Digite o segundo valor:"));

    var resultadoSoma = soma(valor1, valor2);
    var resultadoMultiplicacao = multiplicacao(valor1, valor2);

    console.log("Resultado da soma: " + resultadoSoma);
    console.log("Resultado da multiplicação: " + resultadoMultiplicacao);
}

calculadora();