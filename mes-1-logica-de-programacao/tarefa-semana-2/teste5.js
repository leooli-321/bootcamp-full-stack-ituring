//CALCULADORA DE IMC

let imc = (altura, peso) => peso / (altura * altura);

if (imc < 18.5) {
    console.log("Você se encontra abaixo do peso!");
} else if (imc > 18.5 || imc < 25) {
    console.log("Você se encontra em seu peso ideal!");
} else if (imc > 25 || imc < 30) {
    console.log("Você está com sobrepeso!");
} else if (imc > 30){
    console.log("Você está com obesidade!");
}

console.log(imc(1.70, 80));