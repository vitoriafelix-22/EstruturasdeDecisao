var entrada = require("readline-sync")
var numero1 = parseInt(entrada.question("Me diga um valor: "))
if(numero1 % 2 === 0){
    console.log("E par")
}else {
    console.log("E impar")
}
