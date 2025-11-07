var jogadorNome = prompt('Qual é o seu nome?');
const campoNome = document.getElementById('player-name');
var pontuacaoJogador = document.getElementById('player-points');
var pontuacaoComputador = document.getElementById('computer-points');
var jogadaComputador = 0;
var escolhaJogador = 0;
var jogadorPontos = 0;
var computadorPontos = 0;

if (!jogadorNome) {
    campoNome.innerText = 'Coisinha';
    mensagem('Que falta de educação... Escolha uma das opções para jogar...');
} else {
    campoNome.textContent = jogadorNome;
    mensagem('Está preparado(a), ' + jogadorNome + '? Escolha uma das opções para jogar...')
}

// muda texto
function mensagem(texto) {
    document.getElementById('msg').innerHTML = texto;
}

// sorteia entre dois números
function sorteador(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// calcula o ganhador
function calculaEscolha(jogador, computador) {
    if (jogador === computador) {
        return 0; // empate
    } else if ((jogador == 1 && computador == 3) || (jogador == 2 && computador == 1) || (jogador == 3 && computador == 2)) {
        return 1; // jogador ganha
    } else {
        return 2; // computador ganha
    }
}

// soma pontos para o jogador
function somaPontoJogador() {
    jogadorPontos++;
    pontuacaoJogador.innerHTML = jogadorPontos;
}

// soma pontos para o computador
function somaPontoComputador() {
    computadorPontos++;
    pontuacaoComputador.innerHTML = computadorPontos;
}
// adiciona classe selecionado
function selecionar(tipo, escolha) {
    document.getElementById(tipo + '-choice-' + escolha).classList.add('selecionado');
}

// remove classe selecionado
function deselecionar(tipo, escolha) {
    document.getElementById(tipo + '-choice-' + escolha).classList.remove('selecionado');
}

// 1 - pedra
// 2 - papel
// 3 - tesoura
function jogar(escolha) {
    escolhaJogador = escolha;
    selecionar('player', escolhaJogador);

    // sortear jogada do computador
    jogadaComputador = sorteador(1, 3);
    selecionar('computer', jogadaComputador);

    // ganhador
    var ganhador = calculaEscolha(escolhaJogador, jogadaComputador);

    if (ganhador == 1) {
        somaPontoJogador();
        var mensagensJogador = ['Aí sim!', 'Boa jogada!', 'Continue assim!', 'É isso aí!', 'Você mandou bem!', 'Essa foi certeira!', 'Jogada de mestre!', 'Imbatível!', 'Você está com sorte!', 'Que reflexo!', 'Ele odeia perder, mas você não liga!', 'Essa foi épica!', 'Eba! Você ganhou!', 'Ele deixou você ganhar... dessa vez.', 'ninguém vence para sempreParabénS!'];
        mensagem(mensagensJogador[Math.floor(Math.random() * mensagensJogador.length)]);
    } else if (ganhador == 2) {
        somaPontoComputador();
        var mensagensComputador = ['Ele venceu!', 'Não foi dessa vez!', 'Tente novamente!', 'Ele mandou bem!', 'Derrota amarga!', 'Ele foi mais rápido!', 'Ele está afiado!', 'HA! Ele aprende com seus erros...', 'Você caiu na armadilha!', 'Essa doeu!', 'Ele levou essa!', 'Ele está te estudando...', 'Ele já sabia que você ia jogar isso.', 'HA! Tá ficando previsível!'
        ];
        mensagem(mensagensComputador[Math.floor(Math.random() * mensagensComputador.length)]);
    } else {
        var mensagensEmpate = ['Empate!', 'Vocês pensaram igual... legal, né? :)', 'Ninguém venceu dessa vez!', 'Foi por pouco!', 'Empate técnico!', 'Sincronia total! É como se ele estivesse dentro da sua mente!', 'Que coincidência!', 'Empate inesperado!', 'Nada feito!', 'Equilíbrio perfeito!', 'Empate... mas só dessa vez!', 'Vocês pensaram igual. De novo.', 'HA! Tá ficando previsível!'
        ];
        mensagem(mensagensEmpate[Math.floor(Math.random() * mensagensEmpate.length)]);
    }

    setTimeout(() => {
        deselecionar('player', escolhaJogador);
        deselecionar('computer', jogadaComputador);
        mensagem('Escolha uma opção...');
    }, 2500);
}

