var entrada = require("readline-sync")
var nome = entrada.question("Qual seu nome?: ")
var altura = parseFloat(entrada.question("Qual sua altura?: "))
var peso = parseInt(entrada.question("Qual seu peso?: "))
var calculo1 = (altura * altura)
var calculo2 = (peso / calculo1)
if (calculo2 < 18.5) {
    console.log("Voce se encontra abaixo do peso ideal")
} else if (calculo2 > 18.6 && calculo2 <= 24.9) {
    console.log("Voce esta no peso ideal")
} else if (calculo2 > 25 && calculo2 <= 29.9) {
    console.log("Levemente acima do peso")
} else if (calculo2 > 30 && calculo2 < 34.9) {
    console.log("obesidade grau 1")
} else if (calculo2 > 35 && calculo2 < 39.9) {
    console.log("Obesidade Grau 2 severa")
} else {
    console.log("obesidade grau 3")
}