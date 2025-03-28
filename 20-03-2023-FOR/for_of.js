//ESTE LOOP VAI PERCORRER TODO O ARRAY
const numeros = [14,67,89,15,23]
for (let numero of numeros){
    console.log(numero)
    console.log(numeros.indexOf(numero)) //INDEX PARA DESCOBRIR A POSIÇÃO DE CADA VALOR NO ARRAY
}

let frase = ["palavras","são","uma","inesgotável","fonte","de","magia"];
for(let palavras of frase){
    console.log(frase.indexOf("magia")) //CUIDAR QUE VAI PESQUISAR A PALAVRA EXATAMENTE DA FORMA COMO FOI ESCRITA NO ARRAY
}

let listaNumeros = [9,12,24,36,48,8]
let maiorNumero = 0
for (let numero of listaNumeros) {
    if (maiorNumero < numero){
        maiorNumero = numero
    }
}
console.log(maiorNumero)


let frase2 = ["Oi", "sumido", "tudo", "bem?", "Saudades"];
let fraseInteira = ""
for(let palavra of frase2){
    fraseInteira+=palavra+" "   
}
console.log(fraseInteira)

let numerosImpPar = [9,12,24,35,48,7]
let somaPares = 0
for (let numero of numerosImpPar){
    if (numero % 2 === 0){
        somaPares+=numero
    }
}
console.log(somaPares)