const readline = require('readline-sync')

let time = readline.question("Que time é o teu? ")
console.log(time)
//console.log (time.toUpperCase()) //transforma a string em maiúscula
//console.log(time.toLowerCase()) //transforma a string em minúscula


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
