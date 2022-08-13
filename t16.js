var entrada = require("readline-sync")
var salario = parseInt (entrada.question("Qual seu salario? "))
var fgts = (salario * 0.08)
var inss = (salario * 0.12)
var impostoRenda = 0
if (salario < 1500) {
     impostoRenda = (salario * 0, 075)
} else if (salario > 1500 && salario < 2000){
impostoRenda = ( salario * 0.10)
}else {
    impostoRenda = (salario * 0.15)
}
console.log("O salario bruto e: ", salario)
console.log("O desconto do FGTS e: ", fgts)
console.log("O desconto do INSS e ", inss)
console.log("O desconto do imposto de renda e ", impostoRenda)
console.log("O salario liquido e ", salario - fgts - impostoRenda - inss)