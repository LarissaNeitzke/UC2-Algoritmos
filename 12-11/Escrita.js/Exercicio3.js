// a) Declaração de Array carrinho
// Crie uma variável de escopo global que armazene um array vazio chamada carrinho.
const carrinho = [] 

// b) Criação de Objetos Fruta
// Crie três objetos representando frutas com as propriedades: nome (string) e disponibilidade (boolean, começando como true).

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

// c) Função para Adicionar Frutas ao carrinho
// Crie uma função que receba um objeto fruta por parâmetro e o adicione ao array carrinho usando o método push(). Invoque a função passando os três objetos de fruta.

function minhaFuncao(fruta) {
    carrinho.push(fruta)
    return null
}

minhaFuncao(fruta1)
minhaFuncao(fruta2)
minhaFuncao(fruta3)

// d) Impressão do Array carrinho
// Imprima o conteúdo da variável carrinho para garantir que ela agora contém três objetos.*/

console.log(carrinho)
