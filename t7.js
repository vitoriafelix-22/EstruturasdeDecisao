var entrada = require("readline-sync")
var numero1 = parseInt (entrada.question("Me diga um valor: "))
if(numero1 < 0){
    console.log("E negativo!")
}else {
    console.log("E positivo")
}