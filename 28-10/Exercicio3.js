/* Comece criando um array com os valores: 1, 2, 3, 4, 5 e 6
Determine o tamanho do array
Adicione o numero 7
Remova os numeros 4 e 5 
Determine o novo tamanho do array */

const valores = [1, 2, 3, 4, 5, 6]
console.log (valores.length)
valores.push(7)
valores.splice(3,2)
console.log(valores)
console.log(valores.length)

