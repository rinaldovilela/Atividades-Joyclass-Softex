const Banco = {
  conta: "369",
  saldo: 1000,
  tipoConta: "corrente",
  agencia: "7890",

  buscarSaldo: function () {
    return this.saldo;
  },

  deposito: function (valor) {
    this.saldo += valor;
    console.log(
      `Depósito de ${valor} realizado com sucesso. Novo saldo: ${this.saldo}`
    );
  },

  saque: function (valor) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente para realizar o saque.");
    } else {
      this.saldo -= valor;
      console.log(
        `Saque de ${valor} realizado com sucesso. Novo saldo: ${this.saldo}`
      );
    }
  },

  numeroConta: function () {
    return this.conta;
  },
};

console.log("Saldo atual:", Banco.buscarSaldo());
Banco.deposito(54);
Banco.saque(84);
console.log("Número da conta:", Banco.numeroConta());
console.log("Saldo atual:", Banco.buscarSaldo()); 
