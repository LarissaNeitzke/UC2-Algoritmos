//Crie um array com pelo menos 5 raças de cachorros. Peça para o usuário inserir um número de 1 a 5. Imprima no terminal a raça escolhida

const racaDeCachorros = ["Spitz Alemao", "Pinscher", "Lhasa", "Sao Bernardo", "Pastor Alemao"]
const readline = require('readline-sync')
let usuario = readline.questionInt("Escolha uma raca: \n1 - Spitz Alemao \n2 - Pinsher \n3 - Lhasa \n4 - Sao Bernardo \n5 - Pastor Alemao \n")
console.log("Voce esolheu: ", racaDeCachorros[usuario-1])

