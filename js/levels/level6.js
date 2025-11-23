// Módulo: Level 6 (Portal para a Wikipédia e Menina)
export const level6 = {
    'level6_start': {
        narrator: "Pe deixa o beco digital. A névoa se abre, revelando uma estrada de terra batida com postes piscando em código. À frente, um grande letreiro cintilante vibra: WIKIPÉDIA – A BIBLIOTECA LIVRE DO MUNDO DIGITAL",
        dialogue: null,
        character: null,
        options: [{ text: "Seguir em direção ao portal", next: 'level6_girl_appears' }]
    },
    'level6_girl_appears': {
        narrator: "Quando está quase chegando, uma menina surge do nada, como se tivesse acabado de aparecer entre um piscar de olho e outro. Ela parece normal, mas tem um olhar perdido.",
        dialogue: "Ei, o que você está fazendo aqui?",
        character: 'girl',
        options: [{ text: "Responder à garota", next: 'level6_pe_question' }]
    },
    'level6_pe_question': {
        narrator: null,
        dialogue: "Eu? Eu tô tentando chegar à Wikipédia. ",
        character: 'pe',
        options: [{ text: "Perguntar o que ela está fazendo aqui?", next: 'level6_girl_no_name' }]
    },
    'level6_girl_no_name': {
        narrator: "A menina olha para os lados, confusa, e fecha os olhos como se buscasse algo dentro de si.",
        dialogue: "Não sei.",
        character: 'girl',
        options: [{ text: "Oxe, menina… mas... e qual o seu nome?", next: 'level6_girl_instinct' }]
    },
    'level6_girl_instinct': {
        narrator: null,
        dialogue: "Não sei… Mas meu instinto me manda ir pra lá. Para Wikipédia. Como se… como se algo lá estivesse chamando por mim.",
        character: 'girl',
        options: [{ text: "KRZHHH! Um ruído metálico rasga o silêncio!", next: 'level6_combatant_appears' }]
    },
    'level6_combatant_appears': {
        narrator: "Um Combatente da IA salta da mata ao lado, com visor vermelho pulsante. Ele avança direto para Pe.",
        dialogue: "Elemento não autorizado detectado.",
        character: 'combatant',
        options: [{ text: "Tentar usar o É-tikara!", next: 'level6_pe_fail' }]
    },
    'level6_pe_fail': {
        narrator: "Pe estica o braço dramaticamente. Nada acontece. Nenhuma luz. Nenhum poder. Nada.",
        dialogue: "Vá, poder da É-tikará! Vaaai! Poxa, não funcionou... Ah, só agora que eu queria parecer “MASSA”...",
        character: 'pe',
        options: [{ text: "Desviar do ataque!", next: 'level6_girl_attack' }]
    },
    'level6_girl_attack': {
        narrator: "O combatente ergue o braço para atacar. Pe se joga para o lado, desviando por pouco. Antes que ele ataque de novo, a menina aparece atrás do combatente. PÁ! Ela o acerta com um soco poderoso, que o lança longe.",
        dialogue: "Ahhh!",
        character: 'girl',
        options: [{ text: "Pe fica boquiaberta", next: 'level6_pe_shock' }]
    },
    'level6_pe_shock': {
        narrator: null,
        dialogue: "Menina… você… Você fez isso?",
        character: 'pe',
        options: [{ text: "A garota pisca", next: 'level6_girl_confirm' }]
    },
    'level6_girl_confirm': {
        narrator: null,
        dialogue: "Eu só… senti que precisava.",
        character: 'girl',
        options: [{ 
            text: "Fazer uma aliança", next: 'level6_pe_alliance' },
            { text: "Ignorar a menina e seguir para o portal", next: 'level6_refletion_recusa' }
        ]
    },
    'level6_pe_alliance': {
        narrator: "Pe a observa por um instante. Uma estranha sem nome, sem memória, com força absurda.",
        dialogue: "Certo… acho melhor a gente entrar juntas no labirinto. Você pode me ajudar… e eu posso te ajudar a descobrir quem você é.",
        character: 'pe',
        options: [{ text: "A menina aceita", next: 'level6_girl_accept' }]
    },
    'level6_girl_accept': {
        narrator: "Juntas, elas dão o primeiro passo rumo ao portal cintilante da Wikipédia.",
        dialogue: "Tá.",
        character: 'girl',
        options: [{ text: "Entrar na Wikipedia", next: 'level7_start' }]
    },
};

export default level6;
