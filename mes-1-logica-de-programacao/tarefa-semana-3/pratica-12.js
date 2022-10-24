function grupos(lista) {
    let grupos = [], i = 0
    while (i < lista.length) {
      grupos.push(lista.slice(i, i += 2))
    } if  (lista)
    return `Grupo 1: ${grupos[0]}
    Grupo 2: ${grupos[1]}
    Grupo 3: ${grupos[2]},${grupos[3]}`
  }

  console.log(grupos(["Anderson Luz", "Fabio Vechia", "Claudia Lopes", "Rafael Alves", "Maria Mansano", "Jairo Ferreira", "Vitor Ribeiro"]))
