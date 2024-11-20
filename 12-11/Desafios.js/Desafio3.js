/*Crie uma função adicional para o exercício 3 da seção de escrita de código. Esta função auxiliará no controle de estoque do sacolão: ela deve receber uma das frutas como parâmetro e retornar o objeto da fruta com a propriedade disponibilidade com o valor invertido.

// Exemplo de uso da função:
// Se a fruta tinha `disponibilidade: true`, a função retornará o objeto com `disponibilidade: false` e vice-versa.
UC2*/

const carrinho = [] 

const fruta1 = {
    nome: "Banana", 
    disponibilidade: true
 }
 
 const fruta2 = {
    nome: "Morango", 
    disponibilidade: true
 }
 
 const fruta3 = {
    nome: "Uva", 
    disponibilidade: true
 }

 function minhaFuncao(fruta) {
    carrinho.push(fruta)
    return null
}

minhaFuncao(fruta1)
minhaFuncao(fruta2)
minhaFuncao(fruta3)

console.log(carrinho)

function disponibilidade(fruta) {
    fruta.disponibilidade = !fruta.disponibilidade; // ""= !"" VAI INVERTER O RESULTADO, se ra tru fica false

    return console.log(fruta);
}

disponibilidade(fruta2);