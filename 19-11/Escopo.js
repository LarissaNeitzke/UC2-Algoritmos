/*determina quais variáveis vão ser acessíveis em determinado lugar do codigo.*/

/*let nome = "Larissa"
console.log(nome) //imprime o nome*/

function imprimeFrase(){
    let nome = "Larissa"
    console.log(`Olá ${nome}, tudo bem?`)
}
imprimeFrase() // Vai imprimir Ola Larissa, tudo bem?
//SE ESCREVER 
console.log(nome) //NÃO VAI RODAR PORQUE A VARIÁVEL 'nome' SÓ EXISTE DENTRO DA FUNÇÃO

let nome = "Larissa" //SE COLOCAR ASSIM A VARIÁVEL ESTÁ EM UM CONTEXTO GLOBAL, ENTÃO PODE SER ACESSADA
function imprimeFrase() {
    console.log(`Ola ${nome} tudo bem?`)
}
imprimeFrase()  //OU SEJA, AQUI VAI IMPRIMIR O NOME PORQUE ESTÁ FORA DA FUNÇÃO, MAS EM UMA VARIÁVEL GLOBAL


Function imprimeFrase(){
    let nome = "Larissa"
    console.log(`Olá ${nome}, tudo bem?`)

    Function imprimeECalcula(){
        let numero1 = 2
        let numero2 = 5
        console.log(`Ola ${nome}, o resultado da soma é ${numero1 + numero2}`)
    }
    imprimeECalcula()
    console.log(numero1) //NÃO VAI FUNCIONAR PORQUE ESTÁ DENTRO DA FUNÇÃO, SÓ FUNCIONARIA SE ESTIVESSE DENTRO DAS '}' DA FUNÇÃO
}
imprimeFrase()

