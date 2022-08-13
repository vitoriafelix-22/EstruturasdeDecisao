var entrada = require("readline-sync")
var notaLaboratorio = parseInt(entrada.question("Qual foi sua nota do laboratorio?: "))
var notaSemestral = parseInt(entrada.question("Qual foi sua nota na avaliacao semestral?: "))
var notaFinal = parseInt(entrada.question("Qual foi sua nota na prova final?: "))
var calculo1 = (notaFinal + notaLaboratorio + notaSemestral)
var calculo2 = (calculo1 / 3)
if (calculo2 <= 4) {
    console.log("Esta reprovado")
} else if (calculo2 > 4 && calculo2 < 7) {
    console.log("Esta na recuperacao")
}else{
    console.log("Voce foi aprovado! Parabuens.")
}