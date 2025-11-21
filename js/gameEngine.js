import { gameData } from './gameData.js';

let currentState = 'start';

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

    renderState(currentState);
}

export function renderState(state) {
    const data = gameData[state];
    if (!data) {
        console.warn('Estado desconhecido:', state);
        return;
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
            // fallback para evitar imagem quebrada
            characterImg.onerror = () => { characterImg.src = '../assets/tux.png'; };
        }
    } else {
        dialogBox.classList.add('hidden');
        characterImg.classList.add('hidden');
    }

    // OPÇÕES
    optionsContainer.innerHTML = '';
    if (data.options && data.options.length > 0) {
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
        gameOverText.textContent = data.gameOverText;
        gameOverPanel.classList.remove('hidden');
        narratorBox.classList.add('hidden');
        dialogBox.classList.add('hidden');
        characterImg.classList.add('hidden');
        optionsContainer.classList.add('hidden');
    } else {
        gameOverPanel.classList.add('hidden');
        optionsContainer.classList.remove('hidden');
    }

    // PROGRESSÃO AUTOMÁTICA
    if (!data.dialogue && (!data.options || data.options.length === 0) && data.nextState) {
        setTimeout(() => chooseOption(data.nextState), 3000);
    }
}

export function chooseOption(nextState) {
    currentState = nextState;
    renderState(currentState);
}

export function restartGame() {
    currentState = 'start';
    if (gameOverPanel) gameOverPanel.classList.add('hidden');
    if (optionsContainer) optionsContainer.classList.remove('hidden');
    renderState(currentState);
}
