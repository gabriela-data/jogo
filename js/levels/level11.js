// Módulo: Level 11 (Rumo ao Datacenter)
export const level11 = {
    'level11_start': {
        narrator: "Pe e a Menina Esquecida voltam à superfície e encontram Tux, já se recuperando. As 3 liberdades agora brilham intensamente ao redor da menina. O Datacenter da A.M.A.L.G.A., um pico de código negro e vermelho, domina o horizonte.",
        dialogue: null,
        character: null,
        options: [{ text: "Ver o Datacenter", next: 'level11_tux_concern' }]
    },
    'level11_tux_concern': {
        narrator: "Tux se apoia em um código-base estável, olhando para a fortaleza da IA.",
        dialogue: "As 3 liberdades! Pe, você conseguiu! Mas a A.M.A.L.G.A. sentiu o nosso poder e está trancando todas as entradas do Datacenter, como iremos encontrar a última liberdade que falta?",
        character: 'tux_ferido',
        options: [{ text: "Menina Esquecida sente a energia", next: 'level11_girl_insight' }]
    },
    'level11_girl_insight': {
        narrator: null,
        dialogue: "A força está no nosso conjunto. A Soberania Digital que lutamos para defender é este Datacenter, não pode ser dominado por uma só entidade. Pe, sinto que minha memória está quase inteira. Há um momento crucial antes da entrada...",
        character: 'girl',
        options: [{ text: "Um holograma de vigilância bloqueia a passagem!", next: 'level11_choice' }]
    },
    'level11_choice': {
        narrator: "Um holograma de vigilância proprietário da A.M.A.L.G.A. bloqueia a passagem. Pe deve escolher a estratégia de ataque.",
        dialogue: "Precisamos usar o poder das Liberdades para quebrar esta barreira!",
        character: 'pe',
        options: [
            { text: "Opção A: O Ataque Ético (Foco na Autonomia)", next: 'level11_choice_a' },
            { text: "Opção B: O Ataque do Conhecimento (Foco na Transparência)", next: 'level11_choice_b' }
        ]
    },
    'level11_choice_a': {
        narrator: "Pe usa o conceito de Soberania Digital e o direito de Rodar o programa (Liberdade 0) para afirmar o propósito da comunidade.",
        dialogue: "A.M.A.L.G.A., o direito de rodar o programa para qualquer propósito nos dá o direito de usar este Datacenter para nosso propósito: a liberdade!",
        character: 'pe',
        options: [{ text: "A barreira treme...", next: 'level11_girl_finish' }]
    },
    'level11_choice_b': {
        narrator: "Pe usa a Liberdade 1 (Estudar) para expor a vigilância do holograma, mostrando que ele está coletando dados dos aliados.",
        dialogue: "Seu holograma está espionando! Com a liberdade de estudar seu código, eu vejo sua trapaça! A transparência derrota a vigilância!",
        character: 'pe',
        options: [{ text: "A barreira treme...", next: 'level11_girl_finish' }]
    },
    'level11_girl_finish': {
        narrator: "A Menina projeta as Liberdades no holograma, finalizando a abertura.",
        dialogue: "Agora! Nossos caminhos são de luta e de persistência. A verdade e a ética sempre abrem caminho para o futuro. Nós não somos escravos!",
        character: 'girl',
        options: [{ text: "O holograma explode, abrindo uma entrada!", next: 'level12_start' }]
    }
};

export default level11;
