/*Crie uma função que receba dois objetos que representam filmes. Cada objeto deve ter as propriedades: ano de lançamento e nome. A função deve retornar uma mensagem com o seguinte formato:

// Exemplo de saída:
O primeiro filme foi lançado antes do segundo? false
O primeiro filme foi lançado no mesmo ano do segundo? true*/

const filme1 = {
    nome: 'Crepusculo',
    anoDeLancamento: 2008
    
}

const filme2 = {
    nome: 'Lua Nova',
    anoDeLancamento: 2009
    
}

function quandoLancado(filme1,filme2) {
    console.log(filme1)
    console.log(filme2)
    return console.log(`O primeiro filme foi lançado antes do segundo? ${filme1.anoDeLancamento < filme2.anoDeLancamento}\n O primeiro filme foi lançado no mesmo ano do segundo? ${filme1.anoDeLancamento == filme2.anoDeLancamento}`)
}
quandoLancado(filme1,filme2)
