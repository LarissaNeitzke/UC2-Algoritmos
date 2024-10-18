//Criar uma função que gere uma saudação personalizada e retorne o resultado.
function saudacao(nome){
    return(`Ola, senhora ${nome}!`)
}

let nome = "Larissa"
console.log(saudacao(nome))


//Criar uma função que recebe uma temperatura em graus Celsius e retorna ela em Fahrenheit
function converteCelsius(tempC){
    let tempF = (tempC * 1.8) + 32
    return{tempC, tempF}
}
const {tempC, tempF} = converteCelsius(30)

console.log(tempC)
console.log(tempF)


console.log(`A temperatura de ${tempC} graus Celsius equivale a ${tempF} Fahrenheit.`)

