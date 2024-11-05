//Como criar OBJETOS
let pessoa = {
    //Atributo/Propriedade
    //Nós não usamos LET nem CONST
    //Usamos : ao invés de =
    nome: "Larissa", 
    idade: 28,
    cpf: 99900000000,
    filmesFavoritos: ["Crepúsculo", "50 tons de cinza","Harry Potter"],
    
    //FUNÇÃO CRIADAS DENTRO DE OBJETOS PODEM SER CHAMADOS DE MÉTODOS
    trabalhar: function() {
        console.log(`${pessoa.nome} está trabalhando. Ele não ve a hora de chegar em casa e jogar`)
    }
}

//console.log(pessoa)

//Para acessar UM DOS ATRIBUTOS, fazemos:
console.log(pessoa.nome)
console.log(pessoa.filmesFavoritos[0])

//Como TROCAR a informação
pessoa.idade = 29
console.log(pessoa.idade)

//ADICIONAR ATRIBUTO que não tem 
pessoa.altura = 1.61
console.log(pessoa.altura)

//console.log(pessoa)

pessoa.trabalhar() //AQUI EXECUTA O MÉTODO DO OBJETO