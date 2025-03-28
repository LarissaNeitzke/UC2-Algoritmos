let listaNumeros = [11,15,18,14,12,13]
let maiorNumero = 0
for (let i=0; i < 6; i++) {
    if (maiorNumero < listaNumeros[i]){
        maiorNumero = listaNumeros[i]
    }
}
console.log(maiorNumero)

