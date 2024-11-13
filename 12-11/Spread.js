//Serve para fazer cópia de um objeto ou array inteiro

const professor = {
    nome: "Leonardo",
    idade: 29,
    disciplina: ["Algoritmos", "Banco de Dados", "Java"]
}

const novoProfessor = {
    ...professor,
    nome: "Lucas",
    idade: 30,
    veiculo: "Carro"
}

console.log(professor)
console.log(novoProfessor)

const listaDeNomes = []
const copiaListaDeNome = [...listaDeNomes]