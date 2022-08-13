var entrada = require("readline-sync")
var tamanho1 = entrada.question("diga o tamanho da blusa: ")
switch(tamanho1){
case "p":
    console.log(tamanho1, "sua escolha foi tamanho p")
    break
case "m":
    console.log(tamanho1, "sua escolha foi tamanho m")
    break
case "g":
    console.log(tamanho1, "sua escolha foi tamanho g")
    break
case "x":
    console.log(tamanho1, "sua escolha foi tamanho x")
    break
default:
    console.log("a opcao digitada e invalida")
}