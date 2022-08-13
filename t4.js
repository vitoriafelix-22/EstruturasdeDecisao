var entrada = require("readline-sync")
var num1 = entrada.question("Me diga um valor: ")
var num2 = entrada.question("Me diga um segundo valor: ")
var num3 = entrada.question("Me diga um terceiro valor: ")
if(num1 > num2 && num1 > num3){
    console.log("num1 e o maior")
}else if (num2 > num1 && num2 > num3){
    console.log("num2 e o maior")
}else if (num3 > num1 && num3 > num2)
    console.log("num3 e o maior")
var num4 = entrada.question("Me diga um valor: ")
var num5 = entrada.question("Me diga um segundo valor: ")
var num6 = entrada.question("Me diga um terceiro valor: ")
if(num4 < num5 && num4 < num6){
    console.log("num4 e o menor")
}else if (num5 < num4 && num5 < num6){
    console.log("num5 e o menor")
}else if (num6 < num5 && num6 < num4){
    console.log("num6 e o menor")
}