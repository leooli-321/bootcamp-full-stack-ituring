// function calculaDesconto() {
//   let valorTotal = 100;
//   let porcentagemDesconto = 10;
//   let valorDesconto = (valorTotal * porcentagemDesconto) / 100;
//   let valorFinal = valorTotal - valorDesconto;

//   console.log(valorFinal);
// }

// calculaDesconto();




let calculaDesconto = function (valorTotal, porcentagemDesconto) {
  const valorDesconto = valorTotal - (valorTotal * porcentagemDesconto) / 100;

  return valorDesconto;
};

const valorDesconto = calculaDesconto(100, 10);

console.log(valorDesconto);
