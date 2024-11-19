/*Crie uma função que pergunte ao usuário seu nome, idade e profissão, e depois imprima no console um objeto com essas propriedades. Após imprimir o novo objeto, exiba o tipo dele para confirmar que é um objeto.

Exemplo:

// Exemplo de entrada: "Lais", 26, "Programadora"
// O que deve ser impresso no console: 
{ nome: 'Lais', idade: 26, profissao: "Programadora" }
"Object"*/

function minhaFuncao() {

    respostaNome = readline.question("Qual teu nome? ")
    respostaIdade = readline.question("Qual tua idade? ")
    respostaProfissao = readline.question("Qual tua profissão? ")    

    const pessoa = {
        nome: respostaNome, 
        idade: respostaIdade,
        profissao: respostaProfissao
    }

    return(`nome: ${pessoa["nome"]}, idade: ${pessoa["idade"]}, profissao: ${pessoa["profissao"]}` + '\n' + typeof(pessoa)) 

}

console.log(minhaFuncao())
