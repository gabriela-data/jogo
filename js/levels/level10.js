// Módulo: Level 10 (Rio de Dados e Liberdade 2)
export const level10 = {
    'level10_start': {
        narrator: "Pe e a Menina Esquecida chegam à beira de um vasto Rio de Dados. A água, que deveria ser limpa, é escura e densa. Elas encontram Tux, ferido, perto da margem.",
        dialogue: "Pe! Que bom que chegou! Eu tentei mergulhar… mas a pressão é demais. Esta era a Área de Subsistência do Sapo. A Liberdade 2 (Redistribuir) está no fundo, escondida.",
        character: 'tux_ferido',
        options: [{ text: "Analisar a água escura", next: 'level10_girl_memory' }]
    },
    'level10_girl_memory': {
        narrator: "A Menina Esquecida toca na água, sua memória se aprofunda.",
        dialogue: "Pe, olha, tocando na água consigo sentir… a tristeza do Sapo. Antes dele ser Sapo que Lava Dinheiro, ele era um Protocolo Simples de Compartilhamento (PSP). Ele distribuía dados de forma ética e livre. Mas a ambição… a ganância transformaram ele.",
        character: 'girl',
        options: [{ text: "Tux explica a corrupção", next: 'level10_tux_corruption' }]
    },
    'level10_tux_corruption': {
        narrator: null,
        dialogue: "A A.M.A.L.G.A. prometeu a ele a exclusividade sobre o fluxo de dados. Ele se tornou um Monopolista, cobrando por cada dado que passava. Assim, ele corrompeu a Redistribuição e se tornou um Lava Dinheiro.",
        character: 'tux_ferido',
        options: [{ text: "Escolher a estratégia de mergulho", next: 'level10_choice' }]
    },
    'level10_choice': {
        narrator: "Pe deve escolher como chegar à Liberdade 2 no fundo do oceano, atravessando a barreira proprietária do Sapo.",
        dialogue: "A Liberdade 2 está no fundo. Como vamos quebrar a barreira do Monopólio para alcançá-la?",
        character: 'pe',
        options: [
            { text: "Opção A: Confiar na Força e Ética da Menina", next: 'level10_choice_a' },
            { text: "Opção B: Construir Submarino com Código Aberto", next: 'level10_choice_b' }
        ]
    },
    'level10_choice_a': {
        narrator: "Pe escolhe confiar na força instintiva e nos conhecimentos ancestrais da Menina Esquecida.",
        dialogue: "Menina esquecida, você tem uma força que não é código, é ética! Me guie! Vamos usar nosso Pensamento Crítico para atravessar essa ganância!",
        character: 'pe',
        options: [{ text: "Menina usa 'Canto de Código Puro'", next: 'level10_diving_success' }]
    },
    'level10_choice_b': {
        narrator: "Pe escolhe usar as Liberdades 1 e 3 para construir uma cápsula de mergulho segura, revisada pela comunidade.",
        dialogue: "Vamos usar o que aprendemos! Tux, use o resto de suas forças para me ajudar a montar um submarino com o código livre que temos! Vamos Melhorar o que a natureza proprietária tenta barrar!",
        character: 'pe',
        options: [{ text: "Construção bem-sucedida", next: 'level10_diving_success' }]
    },
    'level10_diving_success': {
        narrator: "Ambas as escolhas levam Pe e sua aliada ao fundo do Rio de Dados, onde encontram a Liberdade 2 manifestada como um Vórtice de Dados em Espiral.",
        dialogue: "Vocês vieram ao meu berço! Eu sou o Monopólio! Não podem me derrotar aqui! A redistribuição é CAOS! Só eu posso dar ordem e, claro, cobrar por isso!",
        character: 'sapo',
        options: [{ text: "A Menina o confronta", next: 'level10_girl_confronts_sapo' }]
    },
    'level10_girl_confronts_sapo': {
        narrator: "A Menina Esquecida, mais forte, sua aparência agora mais definida, confronta o Sapo.",
        dialogue: "Você não é ordem, é opressão. A água sempre flui, Sapo. O conhecimento sempre se compartilha. Você esqueceu o ensinamento do cuidado com o outro!",
        character: 'girl',
        options: [{ text: "Pe realiza a Redistribuição", next: 'level10_liberty2_secured' }]
    },
    'level10_liberty2_secured': {
        narrator: "Pe absorve o Vórtice da Liberdade 2. O Sapo que Lava Dinheiro tem sua voz abafada e desaparece, neutralizado pela ética inegável das Liberdades reunidas. Liberdade 2 Recuperada!",
        dialogue: "Quase… Eu lembro de uma luta no Datacenter... A chave está lá!",
        character: 'girl',
        options: [{ text: "Avançar para o Nível 11", next: 'level11_start' }]
    }
};

export default level10;
