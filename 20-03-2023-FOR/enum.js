//ENUMERAÇÃO É UMA MANEIRA DE NOMEAR UM CONJUNTO DE CONSTANTES RELACIONADAS
//UM ENUM É UMA MANEIRA DE DECLARAR UM CONJUNTO FIXO DE VALORES QUE TEM UM SIGNIFICADO ESPECIFICO EM UM CONTEXTO
//ENUM NÃO TEM EM JAVASCRIPT, SÓ EM TYPESCRIPT, ENTÃO CRIAMOS UMA FORMA PARA QUE SEJA UTILIZADO EM JAVASCRIPT
//Javascript não tem a declaração ENUM mas podemos simular com objetos!!!

const statusPedido ={
    PENDENTE: "pendente"
    PROCESSANDO: "processando"
    CONCLUIDO: "concluido"
    CANCELADO: "cancelado"
};
let pedidoStatus = StatusPedido.PROCESSANDO;
console.log(pedidoStatus);