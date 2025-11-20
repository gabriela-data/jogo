// Variáveis do DOM (Document Object Model)
const narratorBox = document.getElementById('narrator-box');
const characterImg = document.getElementById('character-img');
const dialogBox = document.getElementById('dialog-box');
const dialogText = document.getElementById('dialog-text');
const optionsContainer = document.getElementById('options-container');
const gameOverPanel = document.getElementById('game-over-panel');
const gameOverText = document.getElementById('game-over-text');

// Estrutura do Jogo (Nível 1)
const gameData = {
    'start': {
        narrator: "A **Pe** navega tranquilamente pela internet em sua estação de trabalho, quando, de repente, um link suspeito (que ela jura nunca ter clicado) a suga para dentro do computador!",
        dialogue: null,
        character: null,
        nextState: 'level1_intro'
    },
    'level1_intro': {
        narrator: "Em um flash de luz e código, Pe aterrissa em um lugar colorido e cheio de símbolos flutuantes: o **Mundo Digital**! Ela é recebida por um pinguim sorridente...",
        dialogue: "Olá, Pe, que bom que está aqui! Eu sou Tux! Você está no Mundo Digital! Antes, era um lugar onde os programas existiam em paz e o compartilhamento do conhecimento fluía.",
        character: 'tux',
        options: [
            { text: "[Onde estou?]", next: 'level1_q1' },
            { text: "[Por que eu?]", next: 'level1_q2' },
            { text: "[Não quero ajudar]", next: 'level1_refusal' }
        ]
    },
    'level1_q1': { // Onde estou?
        narrator: null,
        dialogue: "Como eu disse, você está no Mundo Digital! Quando um programa é criado no mundo humano, seu representante digital vem parar aqui. Mas agora, um desastre: a **A.M.A.L.G.A.**, uma IA maligna, roubou as 4 Liberdades do Software Livre! Você precisa nos ajudar a recuperá-las!",
        character: 'tux',
        options: [
            { text: "Aceitar o chamado", next: 'level2_path' }, // Próximo nível de fato
            { text: "Insistir: Por que eu?", next: 'level1_q2' },
            { text: "Recusar a missão", next: 'level1_refusal' }
        ]
    },
    'level1_q2': { // Por que eu?
        narrator: null,
        dialogue: "Porque você é humana, Pe. Você tem algo que nos falta no código: **ética e pensamento crítico**. Só você pode recuperar o que foi roubado. Se as quatro liberdades continuarem perdidas, o mundo digital vai ficar totalmente nas mãos da A.M.A.L.G.A. Tudo será controlado, monitorado e limitado!",
        character: 'tux',
        options: [
            { text: "Aceitar a missão", next: 'level2_path' }, // Próximo nível de fato
            { text: "Ainda não me convenceu...", next: 'level1_q1' },
            { text: "Recusar a missão", next: 'level1_refusal' }
        ]
    },
    'level1_refusal': { // Não quero ajudar
        narrator: null,
        dialogue: "Pe, se as quatro liberdades continuarem perdidas, o mundo digital vai ficar totalmente nas mãos da IA Maligna. Tudo será controlado, monitorado e limitado. Sem criatividade, autonomia... e nem segurança. Você também seria afetada: seus dados e escolhas seriam presos nas regras da IA. Você aceita ajudar?",
        character: 'tux',
        options: [
            { text: "Sim, eu ajudo!", next: 'level2_path' }, // Conseguiu convencer!
            { text: "Não, é problema de vocês.", next: 'game_over_bad_ending' }
        ]
    },
    'game_over_bad_ending': {
        narrator: null,
        dialogue: null,
        character: null,
        gameOver: true,
        gameOverText: "“Sem a sua ajuda, Pe, a IA Maligna alcança seu objetivo. As quatro liberdades permanecem perdidas, e o mundo digital se torna completamente fechado e controlado. Seus dados são coletados sem permissão, suas escolhas são limitadas e seu próprio caminho passa a ser decidido pela IA. **Sem liberdade… não há futuro para ninguém.**”"
    },
    'level2_path': {
        narrator: "Com a ajuda de Pe garantida, Tux sorri. A primeira missão é levá-la ao **Gnu**, o mestre, para que ela entenda a gravidade da ameaça e comece a busca. **(Próximo Nível)**",
        dialogue: "Perfeito! A esperança do Mundo Digital está em você, Pe! Venha, o Gnu a espera!",
        character: 'tux',
        options: [] // Fim do Nível 1. O próximo passo seria iniciar o Nível 2
    }
    // Adicionar mais níveis aqui (level2_path, level3, etc.)
};

// Estado inicial do jogo
let currentState = 'start';

// Função principal para renderizar o estado
function renderState(state) {
    const data = gameData[state];

    // **1. NARRADOR/AMBIENTAÇÃO**
    if (data.narrator) {
        narratorBox.innerHTML = `<span class="marker-font">${data.narrator}</span>`;
        narratorBox.classList.remove('hidden');
    } else {
        narratorBox.classList.add('hidden');
    }

    // **2. DIÁLOGO E PERSONAGEM**
    if (data.dialogue) {
        dialogText.textContent = data.dialogue;
        dialogBox.classList.remove('hidden');
        characterImg.classList.remove('hidden');
        
        // Define a imagem do personagem baseado na chave (tux, pe, gnu, etc.)
        if (data.character) {
            // Remove classes antigas e adiciona a nova para carregar a imagem via CSS/JS
            characterImg.className = '';
            characterImg.classList.add(data.character);
            characterImg.setAttribute('alt', `Imagem do personagem ${data.character}`);
            // Exemplo de como forçar a imagem (se não usar o truque do CSS 'content')
            // characterImg.src = `assets/${data.character}_default.png`;
        }
    } else {
        dialogBox.classList.add('hidden');
        characterImg.classList.add('hidden');
    }

    // **3. OPÇÕES**
    optionsContainer.innerHTML = '';
    if (data.options && data.options.length > 0) {
        data.options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'bangers-font';
            button.textContent = option.text;
            button.onclick = () => chooseOption(option.next);
            optionsContainer.appendChild(button);
        });
    }

    // **4. FIM DE JOGO**
    if (data.gameOver) {
        gameOverText.textContent = data.gameOverText;
        gameOverPanel.classList.remove('hidden');
        // Esconde o resto do UI
        narratorBox.classList.add('hidden');
        dialogBox.classList.add('hidden');
        characterImg.classList.add('hidden');
        optionsContainer.classList.add('hidden');
    } else {
        gameOverPanel.classList.add('hidden');
        optionsContainer.classList.remove('hidden');
    }
    
    // **5. PROGRESSÃO AUTOMÁTICA**
    // Se não há diálogo ou opções, mas há um próximo estado, avança automaticamente (para o primeiro texto de introdução, por exemplo)
    if (!data.dialogue && !data.options && data.nextState) {
        setTimeout(() => chooseOption(data.nextState), 3000); // 3 segundos para ler o narrador
    }
}

// Função para escolher uma opção e avançar o estado
function chooseOption(nextState) {
    currentState = nextState;
    renderState(currentState);
}

// Função para reiniciar o jogo
function restartGame() {
    currentState = 'start';
    gameOverPanel.classList.add('hidden');
    optionsContainer.classList.remove('hidden');
    renderState(currentState);
}

// Iniciar o jogo
document.addEventListener('DOMContentLoaded', () => {
    // É importante que você crie a pasta 'assets/' com as imagens:
    // 1. digital_world_bg.jpg (fundo)
    // 2. tux_default.png (imagem do Tux)
    // 3. pe_default.png (imagem da Pe)
    
    renderState(currentState);
});