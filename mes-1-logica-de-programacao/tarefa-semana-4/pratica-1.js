function indiceDasSeries(lista) {


    lista.forEach((elemento, indice) => {
        console.log(`[${indice}] ${elemento}`)
    })
}

indiceDasSeries(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"])