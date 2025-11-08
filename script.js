let jogadorNome = prompt('Qual é o seu nome?');
const campoNome = document.getElementById('player-name');
const pontuacaoJogador = document.getElementById('player-points');
const pontuacaoComputador = document.getElementById('computer-points');
const campoMsg = document.getElementById('msg');

let jogadaComputador = 0;
let escolhaJogador = 0;
let jogadorPontos = 0;
let computadorPontos = 0;
let bloqueado = false;

const msgPadrao = 'Escolha uma opção...';
const mensagens = {
    jogador: [
        'Aí sim!', 'Boa jogada!', 'Continue assim!', 'É isso aí!', 'Você mandou bem!', 'Essa foi certeira!', 'Jogada de mestre!', 'Imbatível!', 'Você está com sorte!', 'Que reflexo!', 'Ele odeia perder, mas você não liga!', 'Essa foi épica!', 'Eba! Você ganhou!', 'Ele deixou você ganhar... dessa vez.', 'ninguém vence para sempreParabénS!'
    ],
    computador: [
        'Ele venceu!', 'Não foi dessa vez!', 'Tente novamente!', 'Ele mandou bem!', 'Derrota amarga!', 'Ele foi mais rápido!', 'Ele está afiado!', 'HA! Ele aprende com seus erros...', 'Você caiu na armadilha!', 'Essa doeu!', 'Ele levou essa!', 'Ele está te estudando...', 'Ele já sabia que você ia jogar isso.', 'HA! Tá ficando previsível!'
    ],
    empate: [
        'Empate!', 'Vocês pensaram igual... legal, né? :)', 'Ninguém venceu dessa vez!', 'Foi por pouco!', 'Empate técnico!', 'Sincronia total! É como se ele estivesse dentro da sua mente!', 'Que coincidência!', 'Empate inesperado!', 'Nada feito!', 'Equilíbrio perfeito!', 'Empate... mas só dessa vez!', 'Vocês pensaram igual. De novo.', 'HA! Tá ficando previsível!'
    ]
};

if (!jogadorNome) {
    campoNome.innerText = 'Coisinha';
    mensagem('Que falta de educação... Escolha uma das opções para jogar...');
} else {
    campoNome.textContent = jogadorNome;
    mensagem('Está preparado(a), ' + jogadorNome + '? Escolha uma das opções para jogar...')
}

// muda texto
function mensagem(texto) {
    campoMsg.innerHTML = texto;
}

// sorteia entre dois números
function sorteador(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// sorteia mensagem
function mensagemAleatoria(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
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

// jogar rodada
function jogar(escolha) {
    if (bloqueado) {
        return;
    }
    bloqueado = true;

    escolhaJogador = escolha;
    selecionar('player', escolhaJogador);

    // sortear jogada do computador
    jogadaComputador = sorteador(1, 3);
    selecionar('computer', jogadaComputador);

    // define ganhador
    let ganhador = calculaEscolha(escolhaJogador, jogadaComputador);

    if (ganhador == 1) {
        somaPontoJogador();
        mensagem(mensagemAleatoria(mensagens.jogador));
    } else if (ganhador == 2) {
        somaPontoComputador();
        mensagem(mensagemAleatoria(mensagens.computador));
    } else {
        mensagem(mensagemAleatoria(mensagens.empate));
    }

    setTimeout(() => {
        deselecionar('player', escolhaJogador);
        deselecionar('computer', jogadaComputador);
        mensagem(msgPadrao);
        bloqueado = false;
    }, 1000);
}