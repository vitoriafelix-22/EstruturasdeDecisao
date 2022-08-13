var entrada = require("readline-sync")
var vogal = entrada.question("Me diga uma letra: ")
if(vogal === "a" || vogal === "e" || vogal === "i" || vogal === "o" || vogal === "u"){
    console.log("E uma vogal!")
}else {
    console.log("nao e uma vogal")
}