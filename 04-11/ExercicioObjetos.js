//Crie um objto que representa um personagem que voce gosta
//De um nome a ele 
//De uma idade
//Liste poderes ou caracteristicas
//Também crie um método que será algo que esse personagem faz
//Acesse cada um desses atributos e o método cada um em um consle log diferente

let personagem = {
    nome: "Necromante", 
    idade: 28,
    poderes: ["Lanca de Sangue", "Decrepitar","Explosao de Cadaver"],
    
    poderEspecial: function() {
        console.log(`${personagem.nome} soltou seus tentaculos cadavericos!`)
    }
}

console.log(personagem.nome)
console.log(personagem.idade)
console.log(personagem.poderes)
personagem.poderEspecial()

