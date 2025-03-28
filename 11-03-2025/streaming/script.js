/*DADOS DOS FILMES COM IMAGENS ARMAZENADAS LOCALMENTE NA PASTA 'IMAGENS'*/

const filmes = {
    acao: [
        {
            titulo: "Velozes & Furiosos 7",
            diretor: "James Wan",
            elenco: "Vin Diesel, Paul Walker, Jason Statham",
            sinopse: "Dominic Torretto quer recomeçar sua vida, mas Deckard Shaw tem outros planos. Com seu irmão em coma, Shaw quer se vingar de Dom e sua família e fará de tudo para destruí-los.",
            imagem: "./imagens/velozesefuriosos.jpg"
        },
        {
            titulo: "Vingadores: Ultimato",
            diretor: "Joe Russo, Anthony Russo",
            elenco:"Robert Downey Jr., Chris Evans, Mark Ruffalo",
            sinopse: "Os Vingadores unem forças para lutar contra Thanos, após o vilão eliminar metade dos seres vivos da galáxia.",
            imagem: "./imagens/vingadores.jpg"
        },
        {
            titulo: "Tropa de Elite",
            diretor: "José Padilha",
            elenco:"Wagner Moura, Caio Junqueira, André Ramiro",
            sinopse: "O cotidiano de um grupo de policials da Polícia Militar do Rio de Janeiro e do BOPE, mostrando a corrupção na estrutura da primeira instituição.",
            imagem:"./imagens/tropadeelite.jpg"

        },
        {
            titulo: "Jogos Vorazes - Em Chamas",
            diretor: "Francis Lawrence",
            elenco:"Jennifer Lawrence, Josh Hutcherson, Liam Hemsworth",
            sinopse: "Uma jovem é obrigada a participar de uma espécie de reality show onde apenas um deve sobreviver.",
            imagem:"./imagens/jogosvorazes.jpg"

        }
    ],
    romance: [
        {
            titulo: "Cinquenta Tons de Cinza",
            diretor: "Sam Taylor-Johnson",
            elenco: "Jamie Dornan, Dakota Johnson, Jennifer Ehle",
            sinopse: "Em Cinquenta Tons de Cinza, Dakota Johnson vive Anastasia Steele, uma estudante de literatura de 21 anos, romântica e virgem. Um dia, ela precisa entrevistar para o jornal da faculdade o jovem bilionário Christian Grey (Jamie Dornan). Nasce, então, uma complexa relação entre ambos: com a descoberta amorosa e sexual, Anastasia conhece os prazeres do sadomasoquismo, tornando-se o objeto de submissão do sádico Grey.",
            imagem: "./imagens/cinquentatonsdecinza.jpg"
        },
        {
            titulo: "A Barraca do Beijo",
            diretor: "Vince Marcello",
            elenco:"Joey King, Joel Courtney, Jacob Elordi",
            sinopse: "Melhores amigos desde sempre, Elle (Joey King) e Lee (Joel Courtney) têm a inventiva ideia de gerenciar uma barraca do beijo durante um evento da escola. Para fazer da proposta um sucesso, a garota tenta convencer o galã Noah (Jacob Elordi), seu crush e irmão mais velho de Lee, a participar da brincadeira. Ele mostra-se irredutível, mas os dois acabam se aproximando como nunca, o que estremece a amizade de Elle e Lee.",
            imagem: "./imagens/barracadobeijo.jpg"
        },
        {
            titulo: "Crepúsculo",
            diretor: "Catherine Hardwicke",
            elenco:"Kristen Stewart, Robert Pattinson, Taylor Lautner",
            sinopse: "Isabella Swan (Kristen Stewart) e seu pai, Charlie (Billy Burke), mudaram-se recentemente. No novo colégio ela logo conhece Edward Cullen (Robert Pattinson), um jovem admirado por todas as garotas locais e que mantém uma aura de mistério em torno de si. Eles aos poucos se apaixonam, mas Edward sabe que isto põe a vida de Isabella em risco.",
            imagem:"./imagens/crepusculo.jpg"

        },
        {
            titulo: "Para Todos os Garotos que Já Amei",
            diretor: "Susan Johnson",
            elenco:"Lana Condor, Noah Centineo, John Corbett",
            sinopse: "Baseado no romance de Jenny Han, Para Todos os Garotos que Já Amei segue as aventuras amorosas de Lara Jean (Lana Condor). No ensino médio, Lara tem um hábito de escrever cartas para todos os garotos que já gostou de alguma forma, de modo que ela possa liberar o amor não correspondido ou que nunca foi falado para a pessoa. Todas as cartas que já escreveu são guardadas em uma caixa. Um dia sua irmã mais nova acha as cartas e decide mandar para todos os destinatários, afim de ajudar a irmã a ser correspondida por um deles ou apenas receber uma mensagem. Na manhã seguinte, Lara é confrontada por Peter Kavinsky (Noah Centineo), que recebeu uma de suas cartas, mas se não fosse só ele, Josh e Lucas também vão falar com ela. Em um momento de desespero ela beija Peter para despistar um dos garotos. Ciente que suas cartas foram mandadas, Lara entra em pânico, mas Peter percebe que sua ex-namorada começou a ficar com ciúmes dele. Então ele decide fazer um pacto com Lara para que eles forjem um namoro para que Peter volte com sua ex. Mas será que o amor dos dois vai florescer em meio de mentirinhas?",
            imagem:"./imagens/paratodososgarotos.jpg"

        }
    ],
    fantasia: [
        {
            titulo: "Harry Potter e a Pedra Filosofal",
            diretor: "Chris Columbus",
            elenco: "Daniel Radcliffe, Rupert Grint, Emma Watson",
            sinopse: "Harry Potter (Daniel Radcliffe) é um garoto órfão de 10 anos que vive infeliz com seus tios, os Dursley. Até que, repentinamente, ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente Harry é impedido de ler a carta por seu tio Válter (Richard Griffiths), mas logo ele recebe a visita de Hagrid (Robbie Coltrane), o guarda-caça de Hogwarts, que chega em sua casa para levá-lo até a escola. A partir de então Harry passa a conhecer um mundo mágico que jamais imaginara, vivendo as mais diversas aventuras com seus mais novos amigos, Rony Weasley (Rupert Grint) e Hermione Granger (Emma Watson).",
            imagem: "./imagens/hppedrafilosofal.jpg"
        },
        {
            titulo: "Uma Noite no Museu",
            diretor: "Shawn Levy",
            elenco:"Ben Stiller, Carla Gugino, Dick Van Dyke",
            sinopse: "Larry Daley (Ben Stiller) é um homem de bom coração, que arranja um emprego como segurança noturno em um museu de história natural. Logo em seu 1º turno coisas estranhas começam a acontecer: esqueletos de dinossauros e estátuas de cera começam a ganhar vida. Em meio ao caos instalado no museu, a única pessoa que pode ajudá-lo é a estátua de cera de Theodore Roosevelt (Robin Williams), que, assim como os demais, também ganhou vida.",
            imagem: "./imagens/umanoitenomuseu.jpg"
        },
        {
            titulo: "Jurassic World: Reino Ameaçado",
            diretor: "Juan Antonio Bayona",
            elenco:"Chris Pratt, Bryce Dallas Howard, Rafe Spall",
            sinopse: "Em Jurassic World: Reino Ameaçado, três anos após o fechamento do Jurassic Park, um vulcão prestes a entrar em erupção põe em risco a vida na ilha Nublar. No local não há mais qualquer presença humana, com os dinossauros vivendo livremente. Diante da situação, é preciso tomar uma decisão: deve-se retornar à ilha para salvar os animais ou abandoná-los para uma nova extinção? Decidida a resgatá-los, Claire (Bryce Dallas Howard) convoca Owen (Chris Pratt) a retornar à ilha com ela.",
            imagem:"./imagens/jurassicworld.jpg"

        },
        {
            titulo: "Avatar",
            diretor: "James Cameron",
            elenco:"Sam Worthington, Zoe Saldana, Sigourney Weaver",
            sinopse: "Jake Sully (Sam Worthington) ficou paraplégico após um combate na Terra. Ele é selecionado para participar do programa Avatar em substituição ao seu irmão gêmeo, falecido. Jake viaja a Pandora, uma lua extraterrestre, onde encontra diversas e estranhas formas de vida. O local é também o lar dos Na'Vi, seres humanóides que, apesar de primitivos, possuem maior capacidade física que os humanos. Os Na'Vi têm três metros de altura, pele azulada e vivem em paz com a natureza de Pandora. Os humanos desejam explorar a lua, de forma a encontrar metais valiosos, o que faz com que os Na'Vi aperfeiçoem suas habilidades guerreiras. Como são incapazes de respirar o ar de Pandora, os humanos criam seres híbridos chamados de Avatar. Eles são controlados por seres humanos, através de uma tecnologia que permite que seus pensamentos sejam aplicados no corpo do Avatar. Desta forma Jake pode novamente voltar à ativa, com seu Avatar percorrendo as florestas de Pandora e liderando soldados. Até conhecer Neytiri (Zoe Saldana), uma feroz Na'Vi que conhece acidentalmente e que serve de tutora para sua ambientação na civilização alienígena.",
            imagem:"./imagens/avatar.jpg"

        }
    ]
}

//FUNÇÃO PARA CRIAR OS FILMES E EXIBI-LOS NO HTML

function exibirFilmes() {
    //OBTER OS CONTAINERS DE CADA CATEGORIA
    const acaoContainer = document.getElementById("acao")
    const romanceContainer = document.getElementById("romance")
    const fantasiaContainer = document.getElementById("fantasia")

    //FUNÇÃO PARA EXIBIR FILMES E EXIBI-LOS NO HTML
    function exibirCategoria(filmes, container) {
        filmes.forEach(filme => {
            const divFilme = document.createElement("div")
            divFilme.classList.add("filme")
            divFilme.innerHTML = `
            <img src = "${filme.imagem}" alt="${filme.titulo}">
            <h3>${filme.titulo}</h3>
            <p><strong>Diretor:</strong> ${filme.diretor}</p>
            <p><strong>Elenco:</strong> ${filme.elenco}</p>
            <p><strong>Sinopse:</strong> ${filme.sinopse}</p>
            `

            container.appendChild(divFilme)
            
        });

    }

    //EXIBIR FILMES PARA CADA CATEGORIA
    exibirCategoria(filmes.acao, acaoContainer)
    exibirCategoria(filmes.romance, romanceContainer)
    exibirCategoria(filmes.fantasia, fantasiaContainer)
}

//CHAMAR A FUNÇÃO PARA EXIBIR OS FILMES
exibirFilmes();



