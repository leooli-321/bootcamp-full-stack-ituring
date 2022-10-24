let calculaDesconto = (valorTotal, porcentagemDesconto) =>
  valorTotal - (valorTotal * porcentagemDesconto) / 100;

console.log(calculaDesconto(100, 10));

