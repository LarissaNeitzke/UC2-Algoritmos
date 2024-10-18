/*
const base1 = 10;
const altura1 = 3;
const area1 = base1 * altura1
console.log(area1)

const base2 = 5;
const altura2 = 2;
const area2 = base2 * altura2
console.log(area2)

const base3 = 60;
const altura3 = 30;
const area3 = base3 * altura3
console.log(area3)
*/

//funcoes executam uma determinada tarefa que criamos ela para fazer
//primeiro precisamos criar a funcao, e depois de criada, precisamos executa-la/chama-la/invoca-la

//para criar uma funcao, usamos a palavra reservada "function"
//depois dela, precisamos dar um nome para a funcao. O melhor é que seja um nome bem descritivo, seguindo o padrao camelCase
//depois do nome, abrimos e fechamos parenteses. É aqui que colocamos as 'variaveis' que vamos usar dentro do nosso código da função. Chamamos elas de parametros/argumentos.
//depois do nome, abrimos e fechamos chaves. DICA: de um enter entre as chaves. Dentro das chaves é onde vamos criar o código que a função vai executar.


function calculaAreaRetangulo (base, altura) {

    const area1 = base * altura;
    console.log(area1);
}

calculaAreaRetangulo(9,6)




//quero criar uma função que retorna a seguinte frase: Ola [nome], você tem [idade] anos e tem [altura] de altura.

function frase(nome, idade, altura) {
    console.log(`Olá ${nome}, você tem ${idade} anos e tem ${altura} de altura`)
}

frase("Larissa", 28, 1.61)


//Crie uma função que recebe um valor em horas e passe ele para segundos

function horasParaSegundos(hora) {
    let segundos = hora * 3600
    console.log(`${hora} hora(s) convertida(s) para segundos: ${segundos} segundos.`)
}

horasParaSegundos(3)

//Crie uma função que receba 3 notas e calcule a média delas

function media(nota1, nota2, nota3) {
    const media = (nota1+nota2+nota3)/3
    console.log(`A média das notas é ${media.toFixed(2)}.`)
}
media(6,8,10);


//Crie uma função que receba um número e mostre se ele é par ou se é impar
function parImpar(number) {
    if(number === 0) {
        console.log("O numero é 0.")
    }
    else if (number % 2 === 0) {
        console.log("O numero é par.")
    }
    else {
        console.log("O numero é impar.")
    }
}

parImpar(8);


function calculaSoma(num1,num2){
    let soma = num1 + num2
    return soma
}

let numero = calculaSoma(5,7)

console.log(numero + 10)



















