let movimentacoesDaConta = [{
        valor: 100.00,
        movimentacao: "deposito",
        dataMovimentacao: "2021-08-02T07:46:36.611Z"
    },
    {
        valor: 20.00,
        movimentacao: "retirada",
        dataMovimentacao: "2021-09-17T09:46:36.611Z"
    },
    {
        valor: 30.00,
        movimentacao: "retirada",
        dataMovimentacao: "2022-02-24T09:46:36.611Z"
    },
    {
        valor: 10.00,
        movimentacao: "deposito",
        dataMovimentacao: "2022-03-02T09:46:36.611Z"
    },
    {
        valor: 7.00,
        movimentacao: "retirada",
        dataMovimentacao: "2022-04-20T09:46:36.611Z"
    },
    {
        valor: 21.00,
        movimentacao: "retirada",
        dataMovimentacao: "2022-03-20T09:46:36.611Z"
    },
    {
        valor: 5.00,
        movimentacao: "retirada",
        dataMovimentacao: "2022-06-08T09:46:36.611Z"
    }
]

function valores(lista) {
    return lista.sort(function (a, b) {
        let novaData1 = new Date(a.dataMovimentacao)
        let novaData2 = new Date(b.dataMovimentacao)
        return novaData2 - novaData1
    })

}

console.log(valores(movimentacoesDaConta))