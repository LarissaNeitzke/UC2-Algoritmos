// Usando switch case, peça para o usuário inserir um número
// Caso o número for 1, imprima "Você escolheu Red Dead Redemption II"
// Caso o número for 2, imprima "Você escolheu The Elder Scrolls V: Skyrim"
// Caso o número for 3, imprima "Você escolheu Mass Effect 3"
// Caso o número for qualquer outra coisa, imprima "Não encontrei o jogo."

const readline = require('readline-sync')
let numero = readline.questionInt("Insira um número: ")

switch (numero) {
    case 1:
        console.log("Você escolheu Red Dead Redemption II")
    break

    case 2:
        console.log("Você escolheu The Elder Scrolls V: Skyrim")
    break

    case 3:
        console.log("Você escolheu Mass Effect 3")
    break

    default:
        console.log("Não encontrei o jogo.")
    break
}