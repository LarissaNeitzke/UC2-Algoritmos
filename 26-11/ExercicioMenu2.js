/*Exercício de JavaScript: Gerenciador de Pokémons

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
Implemente o sistema de gerenciamento de pokémons e garanta que as funções de adicionar, remover e visualizar pokémons funcionem corretamente.

Desafio Adicional:
Quando o treinador escolher a opção Adicionar Pokémon à mochila, será apresentado um novo menu com a possibilidade de escolher o tipo de Pokémon (por exemplo: Elétrico, Fogo, Água, etc.) e, após escolher o tipo, ele deverá escolher a geração do Pokémon (por exemplo: Geração 1, Geração 2, etc.).

Funcionamento:
Escolher o tipo de Pokémon: O treinador seleciona um tipo de Pokémon (Elétrico, Fogo, Água, etc.).
Escolher a geração: Depois de escolher o tipo, o treinador escolhe a geração do Pokémon (Geração 1, Geração 2, etc.).
Apresentar os Pokémons Disponíveis: Após a escolha do tipo e geração, o sistema irá mostrar uma lista de Pokémons disponíveis que correspondem a essas seleções, e o treinador poderá escolher um para adicionar à mochila.
Exemplo de Interação:
Menu principal:

1. Adicionar Pokémon à mochila
2. Ver Pokémons na mochila
3. Remover Pokémon da mochila
4. Sair
Adicionar Pokémon à mochila (primeiro passo):

Escolha um tipo de Pokémon:
1. Elétrico
2. Fogo
3. Água
4. Planta
5. Normal
Escolher o tipo (por exemplo, Elétrico):

Escolha uma geração de Pokémon:
1. Geração 1 (Pikachu, Raichu)
2. Geração 2 (Mareep, Flaaffy)
3. Geração 3 (Electrike, Manectric)
Escolher a geração (por exemplo, Geração 1):

Pokémons da Geração 1 - Tipo: Elétrico:
1. Pikachu - Nível: 5
2. Raichu - Nível: 10
Escolher o Pokémon para adicionar:

Escolha um Pokémon para adicionar à mochila:
1. Pikachu
2. Raichu
Após adicionar o Pokémon:

Pokémon adicionado à mochila com sucesso!*/


/***********************************************************************************/

// Importa o readline-sync
const readlineSync = require('readline-sync');

// Pokémons disponíveis no banco de dados (com a adição da geração)
let pokemonsDisponiveis = [
  { nome: "Pikachu", tipo: "Eletrico", nivel: 5, geracao: "Geracao 1" },
  { nome: "Charmander", tipo: "Fogo", nivel: 10, geracao: "Geracao 1" },
  { nome: "Bulbasaur", tipo: "Planta", nivel: 8, geracao: "Geracao 1" },
  { nome: "Starly", tipo: "Normal", nivel: 7, geracao: "Geracao 4" },
  { nome: "Eevee", tipo: "Normal", nivel: 6, geracao: "Geracao 1" },
  { nome: "Chinchou", tipo: "Agua", nivel: 9, geracao: "Geracao 2" },
  { nome: "Magnemite", tipo: "Eletrico", nivel: 4, geracao: "Geracao 1" },
  { nome: "Chimchar", tipo: "Fogo", nivel: 7, geracao: "Geracao 4" },
  { nome: "Taillow", tipo: "Normal", nivel: 10, geracao: "Geracao 3" }
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

  mostrarMenu(); 
}

// Função para adicionar Pokémon à mochila
function adicionarPokemon() {
  if (mochila.length < 6) {
    let tipoEscolhido = escolherTipo();
    let geracaoEscolhida = escolherGeracao(tipoEscolhido);
    
    // Filtra os Pokémons com base no tipo e geração escolhidos
    let pokemonsFiltrados = [];
    for (let i = 0; i < pokemonsDisponiveis.length; i++) {
      let pokemon = pokemonsDisponiveis[i];
      if (pokemon.tipo === tipoEscolhido && pokemon.geracao === geracaoEscolhida) {
        pokemonsFiltrados.push(pokemon);
      }
    }
    
    if (pokemonsFiltrados.length === 0) {
      console.log("Nao ha Pokemons disponiveis com essas caracteristicas.");
    } else {
      // Exibe os Pokémons filtrados
      console.log("Pokemons disponiveis:");
      for (let i = 0; i < pokemonsFiltrados.length; i++) {
        console.log(`${i + 1}. ${pokemonsFiltrados[i].nome} - Nivel: ${pokemonsFiltrados[i].nivel}`);
      }

      let escolha = readlineSync.questionInt(
        "Digite o numero do Pokemon que deseja adicionar a mochila: "
      );
      let pokemonEscolhido = pokemonsFiltrados[escolha - 1];
      if (pokemonEscolhido) {
        mochila.push(pokemonEscolhido);
        console.log(`${pokemonEscolhido.nome} foi adicionado a sua mochila!`);
      }
    }
  } else {
    console.log("Sua mochila esta cheia!");
  }
}

// Função para escolher o tipo de Pokémon
function escolherTipo() {
  let tipoEscolhido = readlineSync.questionInt(
    "Escolha um tipo de Pokemon:\n1. Eletrico\n2. Fogo\n3. Agua\n4. Planta\n5. Normal\nDigite sua escolha: "
  );
  
  switch(tipoEscolhido) {
    case 1: return "Eletrico";
    case 2: return "Fogo";
    case 3: return "Agua";
    case 4: return "Planta";
    case 5: return "Normal";
    default: console.log("Opcao invalida!"); return escolherTipo(); 
  }
}

// Função para escolher a geração de Pokémon
function escolherGeracao(tipo) {
  console.log(`Escolher a geracao de Pokemon - Tipo: ${tipo}`);
  let geracaoEscolhida = readlineSync.questionInt(
    "Escolha uma geracao de Pokemon:\n1. Geracao 1\n2. Geracao 2\n3. Geracao 3\n4. Geracao 4\nDigite sua escolha: "
  );
  
  switch(geracaoEscolhida) {
    case 1: return "Geracao 1";
    case 2: return "Geracao 2";
    case 3: return "Geracao 3";
    case 4: return "Geracao 4";
    default: console.log("Opcao invalida!"); return escolherGeracao(tipo); 
  }
}

// Função para ver os Pokémons na mochila
function verMochila() {
  if (mochila.length === 0) {
    console.log("Sua mochila esta vazia!");
  } else {
    for (let i = 0; i < mochila.length; i++) {
      console.log(`${mochila[i].nome} - Tipo: ${mochila[i].tipo}, Nivel: ${mochila[i].nivel}, Geracao: ${mochila[i].geracao}`);
    }
  }
}

// Função para remover Pokémon da mochila
function removerPokemon() {
  if (mochila.length === 0) {
    console.log("Sua mochila esta vazia!");
  } else {
    console.log("Escolha um Pokémon para remover:");
    for (let i = 0; i < mochila.length; i++) {
      console.log(`${i + 1}. ${mochila[i].nome} - Tipo: ${mochila[i].tipo}, Nível: ${mochila[i].nivel}`);
    }
    let escolha = readlineSync.questionInt("Digite o numero do Pokemon que deseja remover: ");
    let pokemonRemovido = mochila.splice(escolha - 1, 1);
    console.log(`${pokemonRemovido[0].nome} foi removido da sua mochila!`);
  }
}

mostrarMenu();

    



  
