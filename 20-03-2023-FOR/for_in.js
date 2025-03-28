//OBJETO DE LIVROS DE ROMANCE
let romance = {
    //CHAVE : VALOR
    "Os trabalhadores do mar" : "Victor Hugo", //INDICE O
    "A culpa e das estrelas" : "John Green", //INDICE 1
    "Crepúsculo" : "Stephanie Meyer" //INDICE 2
}
//FOR IN
for (let livro in romance) {
    console.log(`O autor do livro ${livro} é ${romance[livro]}`)
}

