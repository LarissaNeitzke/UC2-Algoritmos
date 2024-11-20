const readline = require('readline-sync')

function imprimeFrase(){
    console.log("Olá, tudo bem com você?")
}

function calculaSoma(){
    console.log(`A soma de 5 + 5 é ${5+5}.`)
}

function exibirMenu() {
    let opcao;

    while(true){
        //Exibir o menu e capturar a entrada do usuario
        opcao = readlineSyn.questionInt("Escolha uma opção:\n1. Imprimir Frase\n2. Calcular Soma\n3. Sair\n");

     switch(opcao){
        case 1:
            imprimeFrase();
            break;
        case 2:
            calculaSoma();
            break;
        case 3:
            console.log("Saindo...");
            return; //ENCERRA A FUNÇÃO, SAINDO DO LOOP
        default:
            console.log("Opção inválida!");
            break;
     }   
    }
}


//Chamar a função para exibir o menu
exibirMenu();



    /*OOOOOOOUUUUUUUU*/


    
//Enquanto a opção não for 3(Sair), o loop continuará
    while(true){
        //Exibir o menu e capturar a entrada do usuario
        opcao = readlineSyn.questionInt("Escolha uma opção:\n1. Exibir Olá\n2. Exibir Hora Atual\n3. Sair\n");

     switch(opcao){
        case 1:
            console.log("Olá!");
            break;
        case 2:
            console.log("Como vai?");
            break;
        case 3:
            console.log("Saindo...");
            return; //ENCERRA A FUNÇÃO, SAINDO DO LOOP
        default:
            console.log("Opção inválida!");
            break;
     }   
    }
}



//Chamar a função para exibir o menu
exibirMenu();