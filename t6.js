var entrada = require("readline-sync")
var numero1 = parseInt (entrada.question("Me diga um valor: "))
var numero2 = parseInt (entrada.question("Me diga um segundo valor: "))
if(numero1 > numero2){
    console.log("numero1 e maior que numero2")
}else {
    console.log("numero2 e maior que numero1")
}