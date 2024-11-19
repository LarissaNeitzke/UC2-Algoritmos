//a) Criação do Objeto e Função
//Crie um objeto que contém duas propriedades: nome (string) e apelidos (um array com três apelidos). Em seguida, escreva uma função que recebe o objeto e imprime a mensagem no formato:

/* Exemplo de entrada
const pessoa = {
   nome: "Vitor Hugo", 
   apelidos: ["Vitinho", "Vitão", "Vit"]
}*/

// Exemplo de saída
//"Eu sou Vitor Hugo, mas pode me chamar de: Vitinho, Vitão ou Vit"
//Dica: Não se esqueça de chamar a função, passando o objeto como argumento para garantir que o código seja executado.

const pessoa = {
   nome: "Larissa", 
   apelidos: ["Lari", "Lala", "Lili"]
}

function minhaFuncao(objeto) {
    return(`Eu sou ${objeto["nome"]}, mas pode me chamar de: ${objeto["apelidos"][0]}, ${objeto["apelidos"][1]} ou ${objeto["apelidos"][2]}`)
}

console.log(minhaFuncao(pessoa))


//b) Criação de Novo Objeto com Spread Operator
//Usando o operador spread, crie um novo objeto que mantém o valor da propriedade nome, mas possui uma nova lista de três apelidos. Depois, chame a função anterior passando o novo objeto como argumento.

const pessoa = {
   nome: "Larissa", 
   apelidos: ["Lari", "Lala", "Lili"]
}

const outraPessoa = {
    ...pessoa,
   apelidos: ["Lali", "Luli", "Leli"]
}

function minhaFuncao(objeto) {
    return(`Eu sou ${objeto["nome"]}, mas pode me chamar de: ${objeto["apelidos"][0]}, ${objeto["apelidos"][1]} ou ${objeto["apelidos"][2]}`)
}

console.log(minhaFuncao(outraPessoa))
