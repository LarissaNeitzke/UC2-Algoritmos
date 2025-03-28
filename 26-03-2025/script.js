let tabuleiro = [
    ["","",""],
    ["","",""],
    ["","",""]
];

let vez = "L";          // Começa com o jogador "L" (Faz o L).
let jogoAtivo = true;   // Enquanto o jogo nao estiver finalizado, será 'true'.

// Função para renderizar o tabuleiro.
function renderizarTabuleiro() {
    const tabuleiroDiv = document.getElementById("tabuleiro") //PEGA O DIV DO TABULEIRO
    tabuleiroDiv.innerHTML = "" //LIMPA O TABULEIRO ANTES DE RENDERIZAR NOVAMENTE

    //PERCORRE AS LINHAS E COLUNAS DA MATRIZ E CRIA AS CÉLULAS
    for (let i=0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const celula = document.createElement("div") //CRIA UMA NOVA DIV PARA A CELULA
            celula.classList.add("celula") //ADICIONA A CLASSE 'CELULA' PARA O ESTILO CSS
            celula.textContent = tabuleiro[i][j] //ADICIONA O VALOR DA CELULA (X, O)

            //QUANDO A CELULAR É CLICADA, CHAMA A FUNÇÃO fazerJogada()
            celula.onclick = () => fazerJogada(i, j)
            tabuleiroDiv.appendChild(celula) // ADICIONA A CELULA AO TABULEIRO
        }
    }
}

//FUNÇÃO PARA FAZER UMA JOGADA
function fazerJogada(linha, coluna) {
    //VERIFICA SE A CÉLULA ESTÁ VAZIA E SE O JOGO AINDA ESTÁ ATIVO
    if (tabuleiro[linha][coluna] === "" && jogoAtivo) {
        tabuleiro[linha][coluna] = vez //MARCA A CELULA COM O SÍMBOLO DO JOGADOR (X OU O)
        verificarVencedor() //VERIFICA SE ALGUM JOGADOR VENCEU
        vez = vez === "X" ? "O" : "X" //ALTERNA ENTRE X E O
        renderizarTabuleiro() //ATUALIZA A INTERFACE
    }
}

