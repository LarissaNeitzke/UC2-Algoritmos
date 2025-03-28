let soma = 0;
const numeros = [65,44,12,4];

numeros.forEach(myFunction => {  //NO ARROW NÃO PRECISAR A FUNCTION ANTES COMO NO FOREACH
    soma += myFunction
});
console.log(soma)



const veiculos = ["carro", "moto", "bicicleta"]
veiculos.forEach((element, index, array) => {
    console.log(`O elemento ${element} tem índice ${index}`);
    console.log(`O array é:`, array)
})