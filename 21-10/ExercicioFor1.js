//Faça um contador que va de 10 a 0. Quando o contador for 0 imprime BOOOOOOM. Quando o contador for par imprime TIC. Quando o contador for impar imprime TAC.

for (let contador = 10; contador >= 0; contador --){
    if (contador === 0){
        console.log("BOOOM!")
    }
    else if (contador % 2 === 0){
        console.log("TIC")
    }
    else {
        console.log("TAC")
    }
}
    

