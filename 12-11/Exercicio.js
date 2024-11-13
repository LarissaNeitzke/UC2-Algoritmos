//Crie uma função que vai receber um objeto de pessoa (nome, idade e genero musical preferido)
//Crie um novo objeto mantendo as propriedades originais e acresentando:
//Uma propriedade com a lista de suas omidas preferidas; Uma propriedade que seja um objeto, com nome e idade, para representar o melhor amigo da pessoa.
//Ainda na função, imprima no console as propriedades desse objeto seguindo o modelo abaixo: "O nome da pessoa é ___ e suas comidas preferidas são ___, ___ e ___. Seu melhor amigo se chama ___ e tem ___ anos."

const pessoa = {
    nome: "Maria",
    idade: 20,
    generoMusicalPreferido: "Rock"
}

function novoObjeto (pessoa) {
const novaPessoa = {
    ...pessoa,
    comidaPreferida: ["Pizza", "Hamburger", "Batata Frita"],
    melhorAmigo: {
        nome: "Joao",
        idade: 21
    }
}
console.log(`O nome da pessoa é ${novaPessoa.nome} e suas comidas preferidas são ${novaPessoa.comidaPreferida[0]}, ${novaPessoa.comidaPreferida[1]} e ${novaPessoa.comidaPreferida[2]}. Seu melhor amigo se chama ${novaPessoa.melhorAmigo.nome} e tem ${novaPessoa.melhorAmigo.idade} anos.`)
}

novoObjeto(pessoa)



