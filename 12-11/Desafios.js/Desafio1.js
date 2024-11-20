/*Crie uma função que pergunte ao usuário seu nome, idade e profissão, e depois imprima no console um objeto com essas propriedades. Após imprimir o novo objeto, exiba o tipo dele para confirmar que é um objeto.

Exemplo:

// Exemplo de entrada: "Lais", 26, "Programadora"
// O que deve ser impresso no console: 
{ nome: 'Lais', idade: 26, profissao: "Programadora" }
"Object"*/
const readline = require('readline-sync')
function minhaFuncao() {

    respostaNome = readline.question("Qual é o seu nome? ")
    respostaIdade = readline.questionInt("Qual é a sua idade? ") // questionInt fica armazenado como um NUMERO INTEIRO, se for só question fica armazenado como uma string
    respostaProfissao = readline.question("Qual é a sua profissão? ")    

    const pessoa = {
        nome: respostaNome, 
        idade: respostaIdade,
        profissao: respostaProfissao
    }

    return(`nome: ${pessoa["nome"]}, idade: ${pessoa["idade"]}, profissao: ${pessoa["profissao"]}` + '\n' + typeof(pessoa)) 

}

console.log(minhaFuncao())

/*OU
invés de return ... console.log
console.log(user);
console.log(typeof(user));

/*TYPEOF
const nome = "Larissa"
console.log(typeof nome)