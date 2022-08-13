var entrada = require("readline-sync")
var numero = parseInt (entrada.question("Me diga um valor: "))
if(numero >= 20 && numero <= 90 ){
    console.log("Esta entre 20 e 90 ")
}else {
    console.log("Nao esta entre 20 e 90 ")
}

