var entrada = require("readline-sync")
var nota1 = parseInt(entrada.question("Me diga sua primeira nota: "))
var nota2 = parseInt(entrada.question("Me diga sua segunda nota: "))
var nota3 = parseInt(entrada.question("Me diga sua terceira nota: "))
var calculo1 = (nota1 + nota2 + nota3)
var calculo2 = (calculo1 / 3)
if (calculo2 >= 7) {
    console.log("voce passou")
} else if (calculo2 < 7) {
    console.log("voce nao passou")
}