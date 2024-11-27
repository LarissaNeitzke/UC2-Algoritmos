/*usar banco de dados fake usando ARRAY.
Exercício de JavaScript: Gerenciador de Pokémons

Descrição:
Você foi designado para criar um simples sistema de gerenciamento de Pokémons utilizando JavaScript. Seu objetivo é simular um "banco de dados" de pokémons e a interação de um treinador com esse banco de dados. Para isso, você deverá criar e manipular dois arrays:

Banco de Dados de Pokémons (Pokémons Disponíveis): Um array que armazenará os pokémons disponíveis no mundo. Cada Pokémon será representado por um objeto com informações como nome, tipo e nível.

Mochila do Treinador (Pokémons do Treinador): Um array que armazenará os pokémons que o treinador escolheu levar para batalhas. O treinador pode carregar até 6 pokémons em sua mochila.

Funcionalidades:
O sistema deverá permitir as seguintes ações:

Adicionar Pokémon à Mochila do Treinador:

O usuário poderá adicionar um Pokémon da lista de disponíveis para a mochila do treinador.
O treinador não pode ter mais de 6 pokémons na mochila.
Ver Pokémons na Mochila:

O usuário poderá visualizar todos os pokémons que estão na mochila do treinador.
Remover Pokémon da Mochila:

O treinador poderá remover um Pokémon de sua mochila.
Requisitos:
O banco de dados de pokémons será um array com objetos. Cada objeto deverá ter pelo menos o nome, tipo e nível do Pokémon.

O sistema deve oferecer um menu interativo com opções para:

Adicionar Pokémon à mochila
Ver Pokémon na mochila
Remover Pokémon da mochila
Sair
Requisitos Adicionais:
O Pokémon pode ser adicionado à mochila apenas se ainda houver espaço (máximo de 6 pokémons).
Quando um Pokémon for removido da mochila, ele deverá ser removido do array de mochila do treinador.
Exemplos de Interação:
Menu:

1. Adicionar Pokémon à mochila
2. Ver Pokémons na mochila
3. Remover Pokémon da mochila
4. Sair
Adicionar Pokémon à mochila:

Escolha um Pokémon para adicionar:
1. Pikachu
2. Charmander
3. Bulbasaur
4. Squirtle
5. Eevee
Ver Pokémons na mochila:

Pokémons na mochila:
1. Pikachu - Tipo: Elétrico, Nível: 5
2. Charmander - Tipo: Fogo, Nível: 10
Remover Pokémon da mochila:

Escolha um Pokémon para remover:
1. Pikachu
2. Charmander
Desafio:
Implemente o sistema de gerenciamento de pokémons e garanta que as funções de adicionar, remover e visualizar pokémons funcionem corretamente.*/

/***********************************************************************************/


// Importa o readline-sync
const readlineSync = require('readline-sync');

// Pokémons disponíveis no banco de dados
let pokemonsDisponiveis = [
  { nome: "Pikachu", tipo: "Elétrico", nivel: 5 },
  { nome: "Charmander", tipo: "Fogo", nivel: 10 },
  { nome: "Bulbasaur", tipo: "Planta", nivel: 8 },
  { nome: "Starly", tipo: "Normal", nivel: 7 },
  { nome: "Eevee", tipo: "Normal", nivel: 6 },
  { nome: "Chinchou", tipo: "Água", nivel: 9 },
  { nome: "Magnemite", tipo: "Elétrico", nivel: 4 },
  { nome: "Chimchar", tipo: "Fogo", nivel: 7 },
  { nome: "Taillow", tipo: "Normal", nivel: 10 }
];

// Mochila do treinador
let mochila = [];

// Função para mostrar o menu
function mostrarMenu() {
  let opcao = readlineSync.questionInt(
    "Escolha uma opcao:\n1. Adicionar Pokemon\n2. Ver Mochila\n3. Remover Pokemon\n4. Sair\nDigite sua opcao: "
  );
  
  if (opcao === 1) {
    adicionarPokemon();
  } else if (opcao === 2) {
    verMochila();
  } else if (opcao === 3) {
    removerPokemon();
  } else if (opcao === 4) {
    console.log("Saindo...");
    return;
  } else {
    console.log("Opcao invalida");
  }

  mostrarMenu(); // Chama o menu novamente
}

// Função para adicionar Pokémon à mochila
function adicionarPokemon() {
  if (mochila.length < 6) {
    let escolha = readlineSync.question(
      "Escolha um Pokemon para adicionar:\n1. Pikachu\n2. Charmander\n3. Bulbasaur\n4. Starly\n5. Eevee\n6. Chinchou\n7. Magnemite\n8. Chimchar\n9. Taillow\n"
      +
      "\nDigite o numero do Pokemon que deseja adicionar: "
    );
    let pokemonEscolhido = pokemonsDisponiveis[parseInt(escolha) - 1];
    if (pokemonEscolhido) {
      mochila.push(pokemonEscolhido);
      console.log(pokemonEscolhido.nome + " foi adicionado a sua mochila!");
    }
  } else {
    console.log("Sua mochila esta cheia!");
  }
}

// Função para ver os Pokémons na mochila
function verMochila() {
  if (mochila.length === 0) {
    console.log("Sua mochila esta vazia!");
  } else {
    for (let i=0; i < mochila.length; i++) {
      console.log(`${mochila[i].nome} - Tipo: ${mochila[i].tipo}, Nivel: ${mochila[i].nivel}`);
    };
  }
}

// Função para remover Pokémon da mochila
function removerPokemon() {
  if (mochila.length === 0) {
    console.log("Sua mochila esta vazia!");
  } else {
    console.log ("Escolha um Pokemon para remover:")
    for (let i=0; i < mochila.length; i++) {
        console.log(`${i+1}. ${mochila[i].nome} - Tipo: ${mochila[i].tipo}, Nivel: ${mochila[i].nivel}`)
    }
    let escolha = readlineSync.questionInt(
        "Digite o numero do Pokemon que deseja remover: "
    );
    let pokemonRemovido = mochila.splice(escolha - 1, 1);
    console.log(pokemonRemovido[0].nome + " foi removido da sua mochila!");
  }
}


mostrarMenu();


















