var entrada = require("readline-sync")
var salario = parseInt(entrada.question("Qual seu salario atual?: "))
if(salario <= 280){
    console.log("O salario antes do reajuste e: ", salario)
    console.log("O percentual de aumento aplicado foi 20%")
    console.log("O valor do aumento é: ", salario * 0.2)
    console.log("O novo salario, apos o aumento é: ", salario * 0.2 + salario)
}else if(salario >= 281 && salario < 700){
    console.log("O salario antes do reajuste e: ", salario)
    console.log("O percentual de aumento aplicado foi 15%")
    console.log("O valor do aumento é: ", salario * 0.15)
    console.log("O novo salario, apos o aumento é: ", salario * 0.15 + salario)
}else if(salario >= 701 && salario < 1500){
    console.log("O salario antes do reajuste e: ", salario)
    console.log("O percentual de aumento aplicado foi 10%")
    console.log("O valor do aumento é: ", salario * 0.10)
    console.log("O novo salario, apos o aumento é: ", salario * 0.10 + salario)
}else{
    console.log("O salario antes do reajuste e: ", salario)
    console.log("O percentual de aumento aplicado foi 5%")
    console.log("O valor do aumento é: ", salario * 0.05)
    console.log("O novo salario, apos o aumento é: ", salario * 0.05 + salario)
} 