let temCarteira = false //se for false não imprime nada
let maiorIdade = 17 >= 18 //true


//SE -- IF
if ( temCarteira === true && maiorIdade === true ) {
    //executa o código
    console.log("Você tem carteira e é maior de 18. Pode dirigir.")
} else if (maiorIdade === true) {
    console.log("Você é de maior, porém não tem carteira. Vai trabalhar.")
} else {
    console.log("Você não tem carteira. Que peninha, vai a pé.")
}


// Crie uma variável chamada time
// SE o time for "Grêmio", imprima algo
// SE o time for "Inter", imprima algo diferente
// SE o time for "Juventude", imprime outra coisa
// SE o time for "Corinthians", imprime outra coisa ainda
// SE NÃO, imprime "Time não conhecido"


let time = "Xurupita Futebol Clube"

if (time === "Grêmio") {
    console.log("Melhor do mundo")
} else if (time === "Inter") {
    console.log("Com certeza é um dos times já criados")
} else if (time === "Juventude") {
    console.log("Quem?")
} else if (time === "Corinthians") {
    console.log("Vou te roubei.")
} else {
    console.log("Não conheço esse time.")
}



//Crie uma variável chamada numero
// Usando if, else if e else, verifique:
// SE o número é 0
// SE o número é positivo
// SE o número é negativo

// DICA: use comparadores

let numero = 0

if (numero === 0) {
    console.log("O número é 0.")
} else if (numero > 0) {
    console.log("O número é positivo.")
} else {
    console.log("O número é negativo.")
}

