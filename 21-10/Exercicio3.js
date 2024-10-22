//Usando loop while e readline-syn, imprima toda a tabuada de um número
const readline = require('readline-sync')
let number = readline.question("Qual tabuada voê quer saber?")
let contador = 1
while (contador <= 10){
    console.log (`${number} x ${contador} = ${number*contador}`)
    contador ++
}

