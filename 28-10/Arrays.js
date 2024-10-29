/*
let listaDaVo = ["Pao Frances", "Leite", "Negresco"]
console.log(listaDaVo)
listaDaVo.push ("7 Bello") //adiciono produto na lista
console.log(listaDaVo)
listaDaVo.pop() //tira o ULTIMO elemento da lista
console.log(listaDaVo)
console.log(listaDaVo[2]) */

//Arrays são listas de elementos

const listaDeCompras = []; //Este é um array vazio

const listaDeNomes = ["Leo", "Vitoria", "Nala", "Margot", "Simba"]

const listaDeNumeros = [10, 15, 35, 99, 2]

const listaDeBooleanas = [true, false, true]

//Imprime tudo que tem dentro do array
console.log(listaDeNomes)
console.log(listaDeCompras)

//Para adicionar um item ao final do array
listaDeCompras.push("Pão")
listaDeCompras.push("Nata")
listaDeCompras.push("Iogurte")
console.log(listaDeCompras)

//Remove o ultimo item do array
listaDeCompras.pop()
console.log(listaDeCompras)

//Exibe o item de acordo com sua posição do array
console.log(listaDeNomes[0]) //Leo
console.log(listaDeNumeros[3]) //99
console.log(listaDeBooleanas[3]) //Undefined

//Troca o valor de um elemento no array de acordo com sua posição/indice
console.log("Array antes da troca:", listaDeNumeros)
listaDeNumeros[3] = 100
console.log("Array depois da troca:", listaDeNumeros)

//Mostra tamanho do array
console.log (listaDeNomes.length)
console.log(listaDeBooleanas.length)

//Metodo Includes
//Verifica se um array tem ou nao um determinado elemento (retorna true ou false)
const seriesBoas = ["Game Of Thrones", "Breaking Bad", "Shogun"]
console.log(seriesBoas.includes("Game Of Thrones")) // true
console.log(seriesBoas.includes("La Casa de Papel")) //false



//Método Splice
//Remove n elementos a partir da posiçao i do array
const letras = ["A", "B", "C", "D", "E", "F", "G", "H"]

/* letras.splice(2,1) //o primeiro parametro diz a partir de qual indice começa a remover. O segundo parametro dia QUANTOS ele remove */
letras.splice(2,2,"Z","Y") //o primeiro diz a partir de qual, o segundo qual remover e posterior o que quer adicionar
console.log(letras)


