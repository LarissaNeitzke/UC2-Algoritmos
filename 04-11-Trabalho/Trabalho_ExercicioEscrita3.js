//Faça um programa, seguindo os passos:
/*a) Crie um array vazio (ou seja, sem itens dentro dele) e guarde-o em uma variável, chamada `listaDeTarefas`

b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

c) Imprima o array no console

d) Peça ao usuário que digite o **número** de uma tarefa que ele já realizou: 1, 2 ou 3 

e) Remova da lista a tarefa que o usuário escolheu.

f) Imprima o array no console

> 💡 **Dica**
> 
>  Para remover um item de um array, você pode utilizar a função `splice`! */

const readline = require('readline-sync');

const listaDeTarefas = [];
for (let contador = 1; contador <= 3; contador++) {
    listaDeTarefas.push(readline.question(`Informe a tarefa de numero' ${contador} 'que voce vai realizar: `))
}
console.log(listaDeTarefas);
listaDeTarefas.splice(readline.questionInt("Digite o numero de uma tarefa que ja foi realizada: ")-1, 1);
console.log(listaDeTarefas);
