var entrada = require("readline-sync")
var numero1 = parseInt(entrada.question("Me diga um valor: "))
var numero2 = parseInt(entrada.question("Me diga um segundo valor: "))
var numero3 = parseInt(entrada.question("Me diga um terceiro valor: "))

if (numero1 < numero2 && numero1 < numero3) {//verificar se o numero1 e o menor de todos
    console.log(numero1)
    if (numero2 < numero3) {//verificar se o numero2 e o menor p a segunda posicao
        console.log(numero2)
        console.log(numero3)
    } else {//numero3 menor p a segunda posicao
        console.log(numero3)
        console.log(numero2)
    }
} else if (numero2 < numero1 && numero2 < numero3) {
    console.log(numero2)
    if (numero1 < numero3) {
        console.log(numero1)
        console.log(numero3)
    } else {
        console.log(numero3)
        console.log(numero1)
    }
} else {
    console.log(numero3)
    if (numero2 < numero1) {
        console.log(numero2)
        console.log(numero1)
    } else {
        console.log(numero1)
        console.log(numero2)
    }
}



