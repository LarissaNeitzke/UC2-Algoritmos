/*Variável que armazena o saldo inicial da conta*/
let saldo = 0

/*Função para atualizar o saldo na tela*/
function atualizarSaldo() {
    /*Selecionar o elemento do saldo e atualizar o texto com o valor fomatado*/
    document.getElementById('saldo').textContent = saldo.toFixed(2)
}

/*Função que realiza depósito*/
function depositar() {
    /*Obtém o valor digitado pelo usuário e converte para número decimal*/
    valor = parseFloat(document.getElementById('valor').value)
    
    /*Varifica se o valor é válido (maior que 0 e numérico)*/
    if (isNaN(valor) || valor <= 0) {

    /*Exibe ALERTA de o valor for inválido*/
    alert("Por favor, insira um valor válido!")
    return /*Interrompe a execução da função*/
}
    /*Adicionar valor ao saldo*/
    saldo += valor

    /*Atualizar o saldo na tela*/
    atualizarSaldo()

    /*Exibir uma mensagem confirmando o depósito*/
    alert("Depósito de R$" + valor.toFixed(2) + " realizado com sucesso!")

}

/*Função que realiza o saque*/
function sacar() {
    /*Obtém o valor digitado elo usuário e converte para decimal*/
    valor = parseFloat(document.getElementById('valor').value)
    /*Verificar se o valor é válido*/
    if (isNaN(valor) || valor <= 0) {
        alert("Por favor, insira um valor válido!")
        return
    }

    /*Verificar se o saldo é suficiente para sacar*/
    if(valor > saldo) {
        alert("Saldo insuficiente!")
        return
    }
    
/*Subtrai o valor do saldo*/
saldo -= valor

/*Atualizar o saldo*/
atualizarSaldo()
alert("Saque de R$" + valor.toFixed(2) + " realizado com sucesso!")

}
