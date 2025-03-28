let soma = 0;
const numeros = [65,44,12,4];

//DECLARAÇÃO DE FUNÇÃO
function myFunction(item){
    soma += item;
}
//PARA QUE ELA EXECUTE, PRECISA CHAMAR A FUNÇÃO
numeros.forEach(myFunction) //O FOREACH JA FAZ A FUNÇÃO DE PERCORRER TODO O ARRAY
console.log(soma)


