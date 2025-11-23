// Módulo: Level 4 (continuação após Pidinho; introdução a É-tikara)
export const level4 = {
    'level4_start_no_freedom': {
        narrator: "Você seguiu em frente, deixando Pidinho e a Liberdade 0 para trás. A jornada continua, mas a A.M.A.L.G.A. ganhou uma pequena vantagem...",
        dialogue: "Nossa próxima parada é o Lago de Dados Obscuros. Vamos, Pe!",
        character: 'tux',
        options: [{ text: "Ir para o Nível 4", next: 'level4_start' }]
    },
    'level4_start': {
        narrator: "Pe e Tux se despedem de Pidinho e continuam seguindo o caminho. O ar fica mais tenso.",
        dialogue: "Muito obrigado por ajudar o Pidinho, Pe! Ele agora está bem melhor.",
        character: 'tux',
        options: [{ text: "Por nada!", next: 'level4_name' }]
    },
    'level4_name': {
        narrator: null,
        dialogue: "Por nada! Mas por que vocês me chamam de 'Pe'? Este não é meu nome.",
        character: 'pe',
        options: [{ text: "Ouvir resposta", next: 'level4_name_reveal' }]
    },
    'level4_name_reveal': {
        narrator: null,
        dialogue: "Ah, nós nem te contamos. Fazemos isto para proteger seus dados, a A.M.A.L.G.A. já sabe muito sobre todos nós, mas sobre você ela não sabe muito. Quanto menos ela te conhece, menos poder ela tem.",
        character: 'tux',
        options: [{ text: "Ouvir mais sobre a IA", next: 'level4_etikara_reveal' }]
    },
    'level4_etikara_reveal': {
        narrator: "Tux cochicha, inclinando-se para Pe.",
        dialogue: "Há mais algo que ela não sabe sobre você: você carrega o poder da ética. Você pode usá-lo como um poder físico contra a IA e seu exército, se chama **É-tikara**! No momento certo você aprenderá a utilizá-lo.",
        character: 'tux',
        options: [{ text: "O céu escurece...", next: 'level4_drones_approach' }]
    },
    'level4_drones_approach': {
        narrator: "O céu digital começa a escurecer. Linhas de código vermelho descem como chuva. O som de drones de vigilância se aproxima.",
        dialogue: "O que é aquilo no céu?",
        character: 'pe',
        options: [{ text: "É o exército da IA!", next: 'level4_tux_seizes' }]
    },
    'level4_tux_seizes': {
        narrator: null,
        dialogue: "Oh não, são drones da A.M.A.L.G.A.! Pe… não temos mais tempo. O exército está atrás de mim. Se ficarmos juntos, vamos ser pegos.",
        character: 'tux',
        options: [{ text: "Insistir em lutar junto", next: 'level4_pe_insists' }]
    },
    'level4_pe_insists': {
        narrator: null,
        dialogue: "Tux, não! Podemos enfrentar isso juntos! Vou usar o poder da É-tikara que você disse que eu tenho!",
        character: 'pe',
        options: [{ text: "Tux a impede...", next: 'level4_tux_sacrifice' }]
    },
    'level4_tux_sacrifice': {
        narrator: "Tux coloca a mão no ombro dela, firme. O estrondo de passos metálicos ecoa na estrada digital, meia dúzia de robôs aparecem ao longe.",
        dialogue: "Dessa vez não, é muito cedo para isso. Eu vou chamar a atenção deles, é a única forma de você escapar em segurança.",
        character: 'tux',
        options: [{ text: "Mas e você?", next: 'level4_tux_farewell' }]
    },
    'level4_tux_farewell': {
        narrator: null,
        dialogue: "Eu vou me esconder por um tempo. Prometo que vou encontrar um jeito de me comunicar. Não é uma despedida… é um atraso estratégico. Confio em você, Pe. Continue.",
        character: 'tux',
        options: [{ text: "Receber as instruções", next: 'level4_tux_instructions' }]
    },
    'level4_tux_instructions': {
        narrator: null,
        dialogue: "Pe! Vá para a Wikipedia, a biblioteca livre do mundo digital! Há rumores de que ela se transformou em um labirinto. Pegue o atalho do Beco Digital, mas cuidado, não fale com ninguém do beco!",
        character: 'tux',
        options: [{ text: "Tux ativa uma rajada de códigos luminosos. Agora vá! Rápido!", next: 'level5_start' }]
    }
};

export default level4;
