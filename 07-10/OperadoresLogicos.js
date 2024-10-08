//Operador E (AND) - Símbolo: &&
//Retorna TRUE APENAS SE TODOS FOREM TRUE
//Apenas um unico FALSE já é suficiente para retornar FALSE
console.log(true && true) //resultado TRUE
console.log(true && true && false) //resultado FALSE

//exemplo
let idade = 20
let maiorIdade = idade >= 18 //boolean
let temCarteira = true
let temCarro = true

console.log(maiorIdade && temCarteira && temCarro) //TRUE

//exemplo
let idade = 18
let maiorIdade = idade >= 18 //boolean
let temCarteira = false
let temCarro = true

console.log(maiorIdade && temCarteira && temCarro) //FALSE


//Operador OU (OR) - Símbolo: ||
//Retorna FALSE APENAS SE TODOS FOREM FALSE
//Apenas um unico TRUE já é suficiente para retornar TRUE
console.log(true || true) //resultado TRUE
console.log(true || false) //resultado TRUE
console.log(false || true) //resultado TRUE
console.log(false || false) //resultado FALSE

//exemplo
let terTrabalho = true
let economizar = true
let investir = true
let herdeiro = true

console.log((terTrabalho && economizar && investir) || herdeiro)


//Operador NÃO/Negação (NOT) - Símbolo: !
//Inverte o estado, se for TRUE vai tornar FALSE e se for FALSE vai tornar TRUE
let ligado = true
console.log(!ligado)