/*
if (time.toLowerCase() === "gremio") {
    console.log("Melhor do mundo")
} else if (time.toLowerCase() === "inter") {
    console.log("Com certeza é um dos times já criados")
} else if (time.toLowerCase() === "juventude") {
    console.log("Quem?")
} else if (time.toLowerCase() === "corinthians") {
    console.log("Vou te roubei.")
} else {
    console.log("Não conheço esse time.")
}
*/
const readline = require('readline-sync')
let time = readline.question("Qual seu time ")

switch (time.toLocaleLowerCase()) {

    case "gremio":
        console.log("O seu time é o Grêmio.")
    break

    case "inter":
        console.log("O seu time é o Inter.")
    break

    default:
        console.log("O time não foi reconhecido.")
    break
}


// Usando switch case, peça para o usuário inserir um número
// Caso o número for 1, imprima "Você escolheu Red Dead Redemption II"
// Caso o número for 2, imprima "Você escolheu The Elder Scrolls V: Skyrim"
// Caso o número for 3, imprima "Você escolheu Mass Effect 3"
// Caso o número for qualquer outra coisa, imprima "Não encontrei o jogo."

