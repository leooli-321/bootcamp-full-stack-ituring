function calculaDesconto() {
    
  let valorTotal = 100;
  let porcentagemDesconto = 10;
  let valorDesconto = (valorTotal * porcentagemDesconto) / 100;
  let valorFinal = valorTotal - valorDesconto;

  console.log(valorFinal);
}

calculaDesconto();
