//Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variavel. Em seguida, siga os passos:
/* a) Imprima no console o array completo

b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida pôr cada uma das comidas, **uma embaixo da outra**.

c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista */

const readline = require('readline-sync');

const comidasPreferidas = ["Batata Frita", "Pizza", "Hamburger", "Sushi", "Pastel"];
console.log(comidasPreferidas);
console.log("Essas são as minhas comidas preferidas: ");
for (let contador = 0; contador < comidasPreferidas.length; contador++) {
    console.log(comidasPreferidas[contador])
};
let novaComidaPreferida = readline.question("Qual a sua comida preferida?");
comidasPreferidas[1] = novaComidaPreferida
console.log(comidasPreferidas);