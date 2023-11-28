function dividirNumeros() {
    try {
        let numero1 = parseFloat(prompt("Digite o primeiro número:"));
        let numero2 = parseFloat(prompt("Digite o segundo número:"));

        if (isNaN(numero1) || isNaN(numero2)) {
            throw new Error("Por favor, insira números válidos.");
        }

        let resultado = numero1 / numero2;

        if (!isFinite(resultado)) {
            throw new Error("Resultado infinito ou indeterminado.");
        }

        console.log(`Resultado da divisão: ${resultado}`);
    } catch (error) {
        console.error("Ocorreu um erro:", error.message);
    } finally {
        console.log("Operação de divisão concluída.");
    }
}

dividirNumeros();
