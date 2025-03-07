/*LISTA DE PALAVRAS PARA O JOGO*/
/*const palavras = ['palavra secreta', 'bruno cesar', 'sub-judice'] //LISTA DE PALAVRAS QUE O JOGO VAI GERAR*/
let palavraSecreta = ''; //VARIÁVEL PARA ARMAZENAR A PALAVRA SECRETA
let letrasCorretas = []; //ARRAY PARA ARMAZENAR AS LETRAS CORRETAS QUE O JOGADOR ADIVINHAR
let letrasErradas = []; //ARRAY PARA ARMAZENAR AS LETRAS ERRADAS QUE O JOGADOR TENTAR
let tentativas = 5; //O NÚMERO DE TENTATIVAS INICIAIS QUE O JOGADOR TENTARÁ
let numeroDeLetras = 0; //VARIÁVEL PARA ARMAZENAR O NÚMERO DE LETRAS NA PALAVRA SECRETA

/*FUNÇÃO PARA INICIAR O JOGO COM A PALAVRA INSERIDA*/
function iniciarJogo() {
    //OBTEM A PALAVRA DIGITADA PELO JOGADOR, REMOVE OS ESPAÇOS EXTRAS E CONVERTE MINUSCULAS
    palavraSecreta = document.getElementById('input-palavra').value.trim().toLowerCase();

    //VERIFICA SE O JOGADOR DIGITOU ALGUMA PALAVRA. SE NÃO, EXIBE UM ALERTA E INTERROMPE O PROCESSO
    if (!palavraSecreta) {
        alert("Por favor, digite uma palavra.");
        return;
    }

//ESCONDE A TELA INICIAL (ONDE O JOGADOR DIGITOU A PALAVRA) E MOSTRA A TELA DO JOGO
    document.getElementById('tela-inicial').style.display='none';
    document.getElementById('tela-jogo').style.display='block';



///////////////////////////////////////////////////////////////////////////

/*FUNÇÃO PARA ESCOLHER UMA PALAVRA ALEATÓRIA DA LISTA
function escolherPalavra() {
    const indice = Math.floor(Math.random()*palavras.length) //ENTÃO AQUI SE ESCOLHE UM ÍNDICE ALEATÓRIO DA LISTA DE PALAVRAS
    palavraSecreta = palavras[indice] //AQUI A PALAVRA SECRETA É ESCOLHIDA
    //CONTANDO O NÚMERO DE LETRAS NA PALAVRA SECRETA, IGNORANDO OS ESPAÇOS
    numeroDeLetras = palavraSecreta.replace(/ /g, '').length //CONTA APENAS AS LETRAS, SEM CONSIDERAR OS ESPAÇOS
    //SUBSTITUI OS ESPAÇOS DA PALAVRA SECRETA POR HÍFENS PARA VISUALIZAÇÃO
    let palavraComHifen = palavraSecreta.replace(/ /g, '-') //TROCA OS ESPAÇOS POR HÍFENS
    letrasCorretas = Array(palavraComHifen.length).fill('-') //INICIALIZA O ARRAY DE LETRAS CORRETAS COM '-' */

///////////////////////////////////////////////////////////////////////////


// Inicializa as variáveis do jogo
    letrasCorretas = Array(palavraSecreta.length).fill('_'); // Cria um array de underscores do mesmo tamanho da palavra secreta
    letrasErradas = [];  // Reseta a lista de letras erradas
    tentativas = 5;      // Define o número inicial de tentativas
    numeroDeLetras = palavraSecreta.length;  // Armazena o número de letras da palavra secreta

    
    /*letrasErradas = []; //REINICIA O ARRAY DE LETRAS ERRADAS
    tentativas = 5 //REINICIAR AS TENTATIVAS COM 5 CHANCES*/

    atualizarPalavra() //ATUALIZA A VISUALIZAÇÃO DA PALAVRA SECRETA
    atualizarErros() //ATUALIZA A VISUALIZAÇÃO DO NÚMERO DE TENTATIVAS RESTANTES
    document.getElementById('mensagem').textContent = '' //LIMPA QUALQUER MENSAGEM NA TELA
    document.getElementById('imagem-acerto').style.display = 'none' //ESCONDE IMAGEM DE ERRO
    document.getElementById('imagem-erro').style.display = 'none' //ESCONDE IMAGEM A IMAGEM DE ERRO
    document.getElementById('tentativas-contagem').textContent = tentativas //EXIBE O NÚMERO DE TENTATIVAS RESTANTES

    //ATUALIZA O NÚMERO DE LETRAS NO JOGO
    document.getElementById('numero-letras').textContent = `Número de letras: ${numeroDeLetras}`
}

/*//FUNÇÃO PARA ATUALIZAR A VISUALIZAÇÃO DA PALAVRA SECRETA
function atualizarPalavra() {
    let palavraExibida = ''; // INICIALIZA UMA VARIÁVEL PARA A PALAVRA EXIBIDA

    //ITERA SOBRE A PALAVRA SECRETA E REVELA AS LETRAS CORRETAS, DEIXANDO ESPAÇOS OU HÍFENS
    for (let i = 0; i < palavraSecreta.length; i++) {
        if (letrasCorretas[i] === '-') {
            if (palavraSecreta[i] === ' ') {
                palavraExibida += '-'; //SE FOR UM ESPAÇO, MANTÉM O ESPAÇO VISÍVEL
            } else if (palavraSecreta[i] === '-') {
                palavraExibida += '-'; //SE FOR UM HÍFEN, MANTÉM O HÍFEN VISÍVEL
            } else {
                palavraExibida += '_'; //SENÃO, MANTÉM UM TRAÇO INDICANDO UMA LETRA NÃO ADIVINHADA
            }
        } else {
            palavraExibida += letrasCorretas[i]; //CASO A LETRA JÁ TENHA SIDO ADIVINHADA, EXIBE A LETRA
        }

        //ADICIONA UM ESPAÇO APÓS CADA LETRA OU TRAÇO PARA SEPARAR VISUALMENTE
        palavraExibida += ' ';
    }
    //ATUALIZA O ELEMENTO HTML COM A PALAVRA VISÍVEL
    document.getElementById('palavra-secreta').textContent = palavraExibida.trim(); //REMOVE O ÚLTIMO ESPAÇO EXTRA
}*/

function atualizarPalavra() {
    let palavraExibida = ''; // INICIALIZA UMA VARIÁVEL PARA A PALAVRA EXIBIDA

    // ITERA SOBRE A PALAVRA SECRETA E REVELA AS LETRAS CORRETAS, DEIXANDO ESPAÇOS OU HÍFENS
    for (let i = 0; i < palavraSecreta.length; i++) {
        // Corrige para verificar se a letra está representada por '_'
        if (letrasCorretas[i] === '_') {
            if (palavraSecreta[i] === ' ') {
                palavraExibida += ' '; // SE FOR UM ESPAÇO, MANTÉM O ESPAÇO VISÍVEL
            } else if (palavraSecreta[i] === '-') {
                palavraExibida += '-'; // SE FOR UM HÍFEN, MANTÉM O HÍFEN VISÍVEL
            } else {
                palavraExibida += '_'; // SENÃO, MANTÉM UM TRAÇO INDICANDO UMA LETRA NÃO ADIVINHADA
            }
        } else {
            palavraExibida += letrasCorretas[i]; // CASO A LETRA JÁ TENHA SIDO ADIVINHADA, EXIBE A LETRA
        }

        // ADICIONA UM ESPAÇO APÓS CADA LETRA OU TRAÇO PARA SEPARAR VISUALMENTE
        palavraExibida += ' ';
    }

    // ATUALIZA O ELEMENTO HTML COM A PALAVRA VISÍVEL
    document.getElementById('palavra-secreta').textContent = palavraExibida.trim(); // REMOVE O ÚLTIMO ESPAÇO EXTRA
}


//FUNÇÃO PARA ATUALIZAR A CONTAGEM DE TENTATIVAS RESTANTES
function atualizarErros() {
    document.getElementById('tentativas-contagem').textContent = tentativas; //ATUALIZA A CONTAGEM DE TENTATIVAS
}

//FUNÇÃO PARA VERIFICAR SE A LETRA DIGITADA É CORRETA OU ERRADA
function verificarLetra() {
    const letra = document.getElementById('letra').value.toLowerCase(); //OBTÉM A LETRA DIGITADA E CONVERTE PARA MINÚSCULA

    //VERIFICA SE A LETRA NÃO FOI TENTADA ANTES E SE NÃO É UMA LETRA VAZIA
    if (letra && !letrasErradas.includes(letra) && !letrasCorretas.includes(letra)) {
        //SE A LETRA ESTIVER NA PALAVRA SECRETA
        if (palavraSecreta.includes(letra)) {
            for (let i = 0; i < palavraSecreta.length; i++) {
                //SUBSTITUI OS "_" PELAS LETRAS CORRETAS NA POSIÇÃO CORRESPONDENTE
                if (palavraSecreta[i] === letra) {
                    letrasCorretas[i] = letra;
                }
            }
            document.getElementById('mensagem').textContent = `Você acertou a letra: "${letra}"!`; //EXIBE A MENSAGEM DE ACERTO
            document.getElementById('mensagem').style.color = 'green'; //A MENSAGEM FICA VERDE verde
            document.getElementById('imagem-acerto').style.display = 'block'; //EXIBE A IMAGEM DE ACERTO
            document.getElementById('imagem-erro').style.display = 'none'; //ESCONDE A IMAGEM DE ERRO
        } else {
            letrasErradas.push(letra); //ADICIONA A LETRA ERRADA AO ARRAY
            tentativas--; //DIMINUI AS TENTATIVAS
            document.getElementById('mensagem').textContent = `Letra errada: "${letra}".`; //EXIBE A MENSAGEM DE ERRO
            document.getElementById('mensagem').style.color = 'red'; //A MENSAGEM FICA VERMELHA
            document.getElementById('imagem-erro').style.display = 'block'; //EXIBE A IMAGEM DE ERRO
            document.getElementById('imagem-acerto').style.display = 'none'; //ESCONDE A IMAGEM DE ACERTO
        }

        document.getElementById('letra').value = ''; //LIMPA A CAIXA DE ENTRAD APÓS O CHUTE
        atualizarPalavra(); //ATUALIZA A VISUALIZAÇÃO DA PALAVRA SECRETA
        atualizarErros(); //ATUALIZA O NÚMERO DE TENTATIVAS RESTANTES

        //VERIFICA SE O JOGADOR ADIVINHOU A PALAVRA COMPLETAMENTE
        if (letrasCorretas.join('') === palavraSecreta.replace(/ /g, '-')) {
            document.getElementById('mensagem').textContent = `Você ganhou! A palavra era: ${palavraSecreta}`; //EXIBE A MENSAGEM DE VITÓRIA
            document.getElementById('mensagem').style.color = 'green'; //A MENSAGEM FICA VERDE
        } else if (tentativas <= 0) {
            document.getElementById('mensagem').textContent = `Você perdeu! A palavra era: ${palavraSecreta}`; //EXIBE A MENSAGEM DE DERROTA
            document.getElementById('mensagem').style.color = 'red'; //A MENSAGEM FICA VERMELHA
        }
    }
}

/*//FUNÇÃO PARA REINICIAR O JOGO
function reiniciarJogo() {
    escolherPalavra(); //ESCOLHE UMA NOVA PALAVRA
    document.getElementById('mensagem').textContent = ''; //LIMPA QUALQUER MENSAGEM EXISTENTE
}*/

//FUNÇÃO PARA REINICIAR O JOGO
function reiniciarJogo () {
    //EXIBE A TELA INICIAL E ESCONDE A TELA DO JOGO
    document.getElementById('tela-inicial').style.display='block';
    document.getElementById('tela-jogo').style.display='none';
    //LIMPA O CAMPO ONDE O JOGADOR DIGITOU A PALAVRA SECRETA
    document.getElementById('input-palavra').value='';
}

/*//INICIA O JOGO CHAMANDO A FUNÇÃO escolherPalavra
escolherPalavra();*/
