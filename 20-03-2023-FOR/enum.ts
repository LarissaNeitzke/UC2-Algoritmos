enum nomeDoEnum {
    palavraChave1,
    palavraChave2,
    palavraChave3
}

enum diasDaSemana {
    segunda,
    terça,
    quarta,
    quinta,
    sexta,
    sabado,
    domingo
}
console.log(diasDaSemana.quinta)
//Saída será o valor 3

enum Cores{
    vermelho = "#FF0000",
    verde = "#00FF00",
    azul = "#0000FF"
    }
    console.log(Cores.verde) //Saída será “#00FF00”

enum Direcoes {
    norte,
    sul,
    leste,
    oeste
}
for(let direcao in Direcoes){
    console.log(direcao)
} //índices e constantes


export enum Level{
    blue,     //0
    yellow,   //1
    orange,   //2
    red       //3
}
console.log(Level.blue) //Saída será 0

export enum Level{
    Blue = 0,
    yellow = 10,
    orange = 50,
    red = 100
}
    console.log(Level.orange) //Saída será 50

export enum Level{
    blue = 5, //5
    yellow, //6
    orange, //7
    red //8
}
    console.log(Level.red) //Saída será 8

