function calculaSaldo() {

    lista = [100, -20, -30, 10, -7, -21, -5];
    for (var i = 0, soma = 0; i < lista.length; soma += lista[i++]);
    console.log(`O saldo final de sua conta foi positivo no valor de ${soma}`);
}

calculaSaldo();