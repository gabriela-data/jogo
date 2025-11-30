import { gameData } from './gameData.js';

const bgMusic = new Audio('assets.audio/bg.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.4;

const victoryMusic = new Audio('assets.audio/victory.mp3');
victoryMusic.loop = false;
victoryMusic.volume = 0.5;

const gameOverMusic = new Audio('assets.audio/gameover.mp3');
gameOverMusic.loop = false;
gameOverMusic.volume = 0.5;

let currentState = 'start';
let history = [];

let narratorBox, characterImg, dialogBox, dialogText, optionsContainer, gameOverPanel, gameOverText;

export function init() {

    narratorBox = document.getElementById('narrator-box');
    characterImg = document.getElementById('character-img');
    dialogBox = document.getElementById('dialog-box');
    dialogText = document.getElementById('dialog-text');
    optionsContainer = document.getElementById('options-container');
    gameOverPanel = document.getElementById('game-over-panel');
    gameOverText = document.getElementById('game-over-text');

    const restartButton = document.getElementById('restart-button');
    if (restartButton) restartButton.addEventListener('click', restartGame);

    const backButton = document.getElementById('back-button');
    if (backButton) backButton.addEventListener('click', goBack);

    // ativar música ao primeiro clique
    document.addEventListener("click", () => {
        if (bgMusic.paused) bgMusic.play();
    }, { once: true });

    renderState(currentState);
}

// RENDERIZAR ESTADO
export function renderState(state) {

    const data = gameData[state];
    if (!data) return;

    // Verificar música de vitória/derrota
    if (data.gameOverType === "bad") {
        bgMusic.pause();
        victoryMusic.pause();
        gameOverMusic.currentTime = 0;
        gameOverMusic.play();
    }

    if (data.gameOverType === "good") {
        bgMusic.pause();
        gameOverMusic.pause();
        victoryMusic.currentTime = 0;
        victoryMusic.play();
    }

    // NARRADOR
    if (data.narrator) {
        narratorBox.innerHTML = `<span class="marker-font">${data.narrator}</span>`;
        narratorBox.classList.remove('hidden');
    } else {
        narratorBox.classList.add('hidden');
    }

    // DIÁLOGO E PERSONAGEM
    if (data.dialogue) {
        dialogText.textContent = data.dialogue;
        dialogBox.classList.remove('hidden');
        characterImg.classList.remove('hidden');

        if (data.character) {

             // Correção de imagem quebrada
            characterImg.className = '';
            characterImg.classList.add(data.character);
            characterImg.setAttribute('alt', `Imagem do personagem ${data.character}`);

            // Ajuste de caminho das imagens: mapeia nomes de personagem para arquivos em /assets
            const charMap = {
                tux: '../assets/tux.png',
                tux_ferido: '../assets/tux_ferido.png',
                pidgin: '../assets/pidinho.png',
                pidginho: '../assets/pidinho.png',
                // outros personagens podem usar um fallback
                pe: '../assets/pe.png'
            };
            const src = charMap[data.character] || `../assets/${data.character}.png`;
    characterImg.src = src;
}
    } else {
        dialogBox.classList.add('hidden');
        characterImg.classList.add('hidden');
    }

    // OPÇÕES
    optionsContainer.innerHTML = '';
    if (data.options) {
        data.options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'bangers-font';
            button.textContent = option.text;
            button.addEventListener('click', () => chooseOption(option.next));
            optionsContainer.appendChild(button);
        });
    }

    // FIM DE JOGO
    if (data.gameOver) {
        gameOverText.innerHTML = data.gameOverText;
        gameOverPanel.classList.remove('hidden');
        narratorBox.classList.add('hidden');
        dialogBox.classList.add('hidden');
        characterImg.classList.add('hidden');
        optionsContainer.classList.add('hidden');
    } else {
        gameOverPanel.classList.add('hidden');
        optionsContainer.classList.remove('hidden');
    }

    // AUTO-PROGRESSÃO
    if (!data.dialogue && (!data.options || data.options.length === 0) && data.nextState) {
        setTimeout(() => chooseOption(data.nextState), 7000);
    }
}

// OPÇÕES
export function chooseOption(nextState) {
    history.push(currentState);
    currentState = nextState;
    renderState(currentState);
}

// VOLTAR
export function goBack() {
    if (history.length === 0) return;
    currentState = history.pop();
    renderState(currentState);
}

// REINICIAR
export function restartGame() {
    currentState = 'start';

    victoryMusic.pause();
    gameOverMusic.pause();
    bgMusic.currentTime = 0;
    bgMusic.play();

    gameOverPanel.classList.add('hidden');
    optionsContainer.classList.remove('hidden');

    renderState(currentState);
}
