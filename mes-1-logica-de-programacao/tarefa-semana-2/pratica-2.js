let nomeDoComprador;

function boasVindas() {
  "Olá " + nomeDoComprador + "!";
}


function confirmacaoDeEntrega() {
  let produto = "Inseticida";
  let destinatario = "Peter Parker";
  let localDeEntrega = "Forest Hills, Queens";

  console.log(
    "Fizemos a entrefa do produto " +
      produto +
      " no endereço " +
      localDeEntrega +
      " com sucesso!"
  );

  console.log("O " + produto + " foi recebido por: " + destinatario + ".");

  console.log(
    "Esperamos que você esteja contente com o produto. Caso contrário, fale conosco em até 7 dias para que possamos te ajudar. Muito obrigado!"
  );
}


function rodape() {
  let autor = "Lercado Mivre";
  console.log("Atenciosamente, " + autor);
}


boasVindas();
confirmacaoDeEntrega();
rodape();