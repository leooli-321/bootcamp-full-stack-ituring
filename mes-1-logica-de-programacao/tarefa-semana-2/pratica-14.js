let altura = 1.70
let peso = 80

let imc = peso / (altura * altura)

console.log(imc)

if (imc < 18.5) {
    console.log("Você se encontra abaixo do peso!");
} else if (imc > 18.5 && imc < 25) {
    console.log("Você se encontra em seu peso ideal!");
} else if (imc > 25 && imc < 30) {
    console.log("Você está com sobrepeso!");
}

if (imc > 30) {
    console.log("Você está com obesidade!");
}