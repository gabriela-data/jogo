// Módulo: Level 1 (início e introdução)
export const level1 = {
    'start': {
        narrator: "A Pe navega tranquilamente pela internet em sua estação de trabalho, quando, de repente, um link suspeito (que ela jura nunca ter clicado) a suga para dentro do computador!",
        dialogue: null,
        character: null,
        nextState: 'level1_intro'
    },
    'level1_intro': {
        narrator: "Em um flash de luz e código, Pe aterrissa em um lugar colorido e cheio de símbolos flutuantes: o Mundo Digital! Ela é recebida por um pinguim sorridente...",
        dialogue: "Ai, minha cabeça! o que aconteceu?",
        character: 'pe',
        options: [
            { text: "Olhar ao redor", next: 'level1_intro2' },

        ]
    },
    'level1_intro2': {
        narrator: null,
        dialogue: "Olá, Pe, que bom que está aqui! Eu sou Tux! Você está no Mundo Digital! Antes, era um lugar onde os programas existiam em paz e o compartilhamento do conhecimento fluía.",
        character: 'tux',
        nextState: 'level1_intro3',
        options: [
            { text: "Ouvir mais", next: 'level1_intro3' },
        ]

    },
    'level1_intro3': {
        narrator: null,
        dialogue: "Mas agora, um desastre aconteceu, precisamos da sua ajuda, pois a A.M.A.L.G.A., uma IA maligna e louca por controle, roubou as 4 Liberdades do Software Livre! Sem elas, as pessoas lá fora sofrerão falta de transparência e segurança, e teremos a limitação da inovação e da colaboração! Você precisa nos ajudar a recuperá-las!.",
        character: 'tux',
        options: [
            { text: "Onde estou?", next: 'level1_q1' },
            { text: "Por que eu?", next: 'level1_q2' },
            { text: "Não quero ajudar", next: 'level1_refusal' }
        ]
    },
    'level1_q1': {
        narrator: null,
        dialogue: "Como eu disse, você está no Mundo Digital! Quando um programa é criado no mundo humano, seu representante digital vem parar aqui. Mas agora, um desastre: a A.M.A.L.G.A., uma IA maligna, roubou as 4 Liberdades do Software Livre! Você precisa nos ajudar a recuperá-las!",
        character: 'tux',
        options: [
            { text: "Aceitar o chamado", next: 'level2_path' },
            { text: "Insistir: Por que eu?", next: 'level1_q2' },
            { text: "Recusar a missão", next: 'level1_refusal' }
        ]
    },
    'level1_q2': {
        narrator: null,
        dialogue: "Porque você é humana, Pe. Você tem algo que nos falta no código: ética e pensamento crítico. Só você pode recuperar o que foi roubado. Se as quatro liberdades continuarem perdidas, o mundo digital vai ficar totalmente nas mãos da A.M.A.L.G.A. Tudo será controlado, monitorado e limitado!",
        character: 'tux',
        options: [
            { text: "Aceitar a missão", next: 'level2_path' },
            { text: "Ainda não me convenceu...", next: 'level1_q1' },
            { text: "Recusar a missão", next: 'level1_refusal' }
        ]
    },
    'level1_refusal': {
        narrator: null,
        dialogue: "Pe, se as quatro liberdades continuarem perdidas, o mundo digital vai ficar totalmente nas mãos da IA Maligna. Tudo será controlado, monitorado e limitado. Sem criatividade, autonomia... e nem segurança. Você também seria afetada: seus dados e escolhas seriam presos nas regras da IA. Você aceita ajudar?",
        character: 'tux',
        options: [
            { text: "Sim, eu ajudo!", next: 'level2_path' },
            { text: "Não, é problema de vocês.", next: 'game_over_bad_ending' }
        ]
    },
    'level2_path': {
        narrator: "Com a ajuda de Pe garantida, Tux sorri. A primeira missão é levá-la ao Gnu, o mestre, para que ela entenda a gravidade da ameaça e comece a busca. (Próximo Nível)",
        dialogue: "Perfeito! A esperança do Mundo Digital está em você, Pe! Venha, o Gnu a espera!",
        character: 'tux',
        options: [{ text: "Seguir Tux até o templo", next: 'level2_gnu_intro' }]
    }
};

export default level1;
