//Importando o readline-sync
const readline = require('readline-sync');


//Exemplo: pedir ao usuário o nome dele
let nome = readline.question("Qual o seu nome? ")
let sobrenome = readline.question("Qual o seu sobrenome? ")
console.log(`Olá, ${nome} ${sobrenome}. Tudo bem com você?`)

