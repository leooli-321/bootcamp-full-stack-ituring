function ehPrimo(numero) {
    if (numero === 0 || numero === 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }

    return true;
}


console.log(ehPrimo(17))
console.log(ehPrimo(2))
console.log(ehPrimo(7))
console.log(ehPrimo(8))
console.log(ehPrimo(5))
console.log(ehPrimo(23))
console.log(ehPrimo(15))
console.log(ehPrimo(1500450271))