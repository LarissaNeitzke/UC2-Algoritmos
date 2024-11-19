// a) Criação de Objetos
const pessoa1 = {
   nome: "Abidin", 
   idade: 65
   profissao: "Motorista"
}

const pessoa2 = {
   nome: "Ferit", 
   idade: 23
   profissao: "Designer de Joias"
}


//b) Função para Retornar Informações em Array
//Escreva uma função que receba um objeto de cada vez e retorne um array com as seguintes informações:

//O valor de nome
//O número de caracteres do valor nome
//O valor de idade
//O valor de profissao
//O número de caracteres do valor profissao
//Exemplo:

//const pessoa = {
//    nome: "Bruno", 
//    idade: 23, 
//    profissao: "Instrutor"
//}

//function minhaFuncao(pessoa) {
//    const resultado = []
//    // Desenvolver a lógica aqui
//    return resultado
//}

//console.log(minhaFuncao(pessoa))
// Retorno: ["Bruno", 5, 23, "Instrutor", 9] 8

const pessoa1 = {
   nome: "Abidin", 
   idade: 65,
   profissao: "Motorista"
}

const pessoa2 = {
   nome: "Ferit", 
   idade: 23,
   profissao: "Designer de Joias"
}


function minhaFuncao(pessoa) {
    const resultado = []
    resultado[0] = pessoa["nome"]
    resultado[1] = pessoa["nome"].length
    resultado[2] = pessoa["idade"]
    resultado[3] = pessoa["profissao"]
    resultado[4] = pessoa["profissao"].length
    return resultado
}

console.log(minhaFuncao(pessoa1))
console.log(minhaFuncao(pessoa2))
