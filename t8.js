var entrada = require("readline-sync")
var qualTurno = entrada.question("Qual turno voce estuda?: ")
switch (qualTurno) {
    case "m":
        console.log("Bom dia, voce estuda no turno", qualTurno)
        break
    case "v":
        console.log("Boa tarde, voce estuda no turno", qualTurno)
        break
    case "n": 
        console.log("Boa noite, voce estuda no turno", qualTurno)
        break
    default:
        console.log("Valor invalido!")
}