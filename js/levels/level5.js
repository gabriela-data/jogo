// Módulo: Level 5 (Beco Digital e o Sapo que Lava Dinheiro)
export const level5 = {
    'level5_start': {
        narrator: "A heroína, Pe, chega no Beco Digital, uma área decadente e nebulosa. Em um canto, o Sapo que Lava Dinheiro, com um chapéu de sol, esfrega moedas de ouro falsas em uma bacia.",
        dialogue: "Ora, ora! Se não é a nova celebridade do pedaço! Qual é seu nome, jovem?",
        character: 'sapo',
        options: [{ text: "Responder cautelosamente", next: 'level5_pe_answer' }]
    },
    'level5_pe_answer': {
        narrator: null,
        dialogue: "Não te interessa!",
        character: 'pe',
        options: [
            { text: "Continuar a conversa...", next: 'level5_sapo_pitch' }
        ]
    },
    'level5_sapo_pitch': {
        narrator: "O Sapo sorri, revelando dentes de ouro.",
        dialogue: "Eu sou só um empresário que gosta de ajudar jovens promissores! Você parece estar com pressa. Que tal um pequeno investimento para acelerar sua jornada?",
        character: 'sapo',
        options: [
            { text: "Responder ao sapo", next: 'level5_sapo_pitch_1' }
        ]
    },
    'level5_sapo_pitch_1': {
        narrator: "O sapo não parece contente com a resposta de Pe.",
        dialogue: "Sou apenas um trabalhador, vivo fazendo negócios por aqui e acolá. Me diga, jovem, você sabe o que quer?",
        character: 'sapo',
        options: [{ text: "Ignorar a pergunta e se manter em silêncio", next: 'level5_sapo_freedom_cynicism' }]
    },
    'level5_sapo_freedom_cynicism': {
        narrator: "Pe achou a pergunta estranha e não respondeu. O Sapo que Lava Dinheiro aperta o charuto.",
        dialogue: "Ouvi dizer que você está por aí resgatando uns 'códigos perdidos', não é? Que bobagem, não é mesmo? Liberdade... que canseira!",
        character: 'sapo',
        options: [{ text: "Defender as liberdades", next: 'level5_pe_defense' }]
    },
    'level5_pe_defense': {
        narrator: null,
        dialogue: "Não é bobagem! As liberdades do software livre são essenciais para que as pessoas não se tornem escravas da A.M.A.L.G.A.",
        character: 'pe',
        options: [{ text: "Ouvir a contra-proposta", next: 'level5_sapo_shortcut' }]
    },
    'level5_sapo_shortcut': {
        narrator: "O Sapo tira um pequeno frasco com um líquido brilhante e reluzente. O líquido é atraente, mas tem um cheiro estranho de lixo.",
        dialogue: "Escravas? Mas que palavra forte! Ela apenas garante que tudo funcione perfeitamente. E, a propósito, tudo tem um preço... e eu posso te dar um atalho. Com esta 'Poção da Conveniência', você pode ter acesso direto ao Datacenter. Você poupa esforço, e a gente divide o lucro.",
        character: 'sapo',
        options: [{ text: "Perguntar sobre a troca", next: 'level5_pe_ask_price' }]
    },
    'level5_pe_ask_price': {
        narrator: null,
        dialogue: "Que lucro? E o que você quer em troca?",
        character: 'pe',
        options: [{ text: "Ouvir o preço do sapo", next: 'level5_sapo_data_price' }]
    },
    'level5_sapo_data_price': {
        narrator: "O sapo sorri de orelha a orelha, tentando parecer inofensivo.",
        dialogue: "Apenas me diga o seu nome. E só mais algumas informações básicas, sabe? Seus gostos, seus hábitos... nada demais! Só para sabermos como a 'Poção' está funcionando.",
        character: 'sapo',
        options: [{ text: "Questionar a privacidade", next: 'level5_pe_data_question' }]
    },
    'level5_pe_data_question': {
        narrator: "O Sapo tenta entregar o frasco para a personagem, sorrindo com avareza.",
        dialogue: "Meus dados? Para que você quer meus dados?",
        character: 'pe',
        options: [{ text: "Última tentativa de convencimento", next: 'level5_sapo_final_pitch' }]
    },
    'level5_sapo_final_pitch': {
        narrator: null,
        dialogue: "Para fazer negócios, é claro! Informação vale ouro, minha cara! Você entrega um pouquinho de si, e em troca ganha praticidade. O que vale mais? Um ideal abstrato ou a vida fácil?",
        character: 'sapo',
        options: [
            { text: "Aceitar a Poção da Conveniência", next: 'level5_choice_accept' },
            { text: "Rejeitar a Poção da Conveniência", next: 'level5_choice_reject' }
        ]
    },
    'level5_choice_accept': {
        narrator: null,
        dialogue: null,
        character: null,
        nextState: 'level5_reflection_accept'
    },
    'level5_reflection_accept': {
        narrator: "O Sapo que Lava Dinheiro gargalha ao receber os dados da heroína. A poção desaparece em fumaça.",
        dialogue: null,
        character: null,
        gameOver: true,
        gameOverText: "Pateta! Acha mesmo que eu lavo dinheiro com água? Eu lavo é com os seus dados! A.M.A.L.G.A. vai amar isso! Você reforçou o poder da IA, perdeu a confiança e terá que recomeçar o nível.",
        options: [{ text: "Tentar novamente", next: 'level5_start' }]
    },
    'level5_choice_reject': {
        narrator: null,
        dialogue: "Não, eu não confio em você. Você está tentando me controlar.",
        character: 'pe',
        options: [{ text: "O Sapo reage", next: 'level5_sapo_threat' }]
    },
    'level5_sapo_threat': {
        narrator: "A expressão amigável do sapo vacila por um instante, revelando um brilho de irritação nos olhos. Ele recolhe o frasco, que desaparece na névoa.",
        dialogue: "Ah, que pena. Não sabe o que está perdendo. Mas a A.M.A.L.G.A. tem uma memória excelente, sabe? Você vai aprender do jeito difícil que a liberdade tem um preço alto. E o de vocês está subindo a cada minuto.",
        character: 'sapo',
        options: [{ text: "O Sapo desaparece", next: 'level5_transition_win' }]
    },
    'level5_transition_win': {
        narrator: "O Sapo desaparece na névoa, soltando uma gargalhada rouca. Pe sente um arrepio e percebe que sua recusa teve um custo. O caminho para recuperar as liberdades será mais desafiador, mas ela manteve sua integridade.",
        dialogue: "Eu fiz a escolha certa. Mas preciso encontrar o caminho para a Wikipedia.",
        character: 'pe',
        options: [{ text: "Continuar no Beco Digital", next: 'level6_start' }]
    }
};

export default level5;
