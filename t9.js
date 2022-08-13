var entrada = require("readline-sync")
var cidade = entrada.question("Qual cidade voce reside? ")
var gasolina = parseInt (entrada.question("Qual o valor da gasolina dessa cidade? "))
var alcool = parseInt (entrada.question("Qual o valor do alcool dessa cidade? "))
var calculoGasolina = (gasolina * 0.7)
if(calculoGasolina > alcool){
    console.log("Na cidade ", cidade, " o valor do alcool corresponde ", calculoGasolina, "do valor da gasolina. Então compensa!")
}else {
    console.log("Na cidade ", cidade, " o valor do alcool corresponde ", calculoGasolina, "do valor da gasolina. Então não compensa!")
}

