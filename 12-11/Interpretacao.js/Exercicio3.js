/*function minhaFuncao(objeto, propriedade) {
    return objeto[propriedade] // RETURN OBJETO.PROPRIEDADE
}

const pessoa = {
    nome: "Caio", 
    idade: 23, 
    backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

//a) O que vai ser impresso no console?

//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?*/

RESPOSTA A
false
undefined

RESPOSTA B
Sim, a função minhaFuncao retorna um objeto (ou dicionário ?). O value da key "backender" é false. A key "altura" não existe. 
