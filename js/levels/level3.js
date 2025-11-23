// Módulo: Level 3 (Pidinho - pombo mensageiro)
export const level3 = {
    'level3_start': {
        narrator: "Com a missão clara, Pe e Tux partem por um caminho movimentado que vai até o Datacenter. No centro do caminho, um pombo com seu ninho no chão, pia alegremente para cada 'notificação' que recebe.",
        dialogue: "Que curioso este pombo com um ninho no chão, isto me parece perigoso.",
        character: 'pe',
        options: [{ text: "Verificar o ninho", next: 'level3_tux_reaction' }]
    },
    'level3_tux_reaction': {
        narrator: null,
        dialogue: "Oh não, Pidinho… olha só o estado em que ele se encontra, ele era um grande mensageiro que trabalhava com protocolos abertos e seguros, e hoje está viciado em redes sociais!",
        character: 'tux',
        options: [{ text: "Falar com o Pidinho", next: 'level3_pidgin_line1' }]
    },
    'level3_pidgin_line1': {
        narrator: null,
        dialogue: "Olha só, mais um like na foto do meu ninho! A vida é tão boa e eu não tenho nada a esconder.",
        character: 'pidgin',
        options: [{ text: "Continuar a conversa", next: 'level3_pe_warn' }]
    },
    'level3_pe_warn': {
        narrator: "Tux suspira. Pe se aproxima para alertar o pombo.",
        dialogue: "Olá Pidinho, me chamo Pe. o que você está fazendo? No meio dessa estrada seu ninho corre perigo! Suas informações estão expostas a qualquer um que passe por aqui.",
        character: 'pe',
        options: [{ text: "Tux reforça o alerta", next: 'level3_tux_warn' }]
    },
    'level3_tux_warn': {
        narrator: null,
        dialogue: "Pe tem razão, Pidinho. A A.M.A.L.G.A. está sempre observando. Ela usa essa sua falta de cuidado para monitorar e roubar dados. Essa estrada está sob o controle dela, e você está entregando seus dados de bandeja.",
        character: 'tux',
        options: [{ text: "Como Pidinho reage?", next: 'level3_pidgin_line2' }]
    },
    'level3_pidgin_line2': {
        narrator: null,
        dialogue: "Relaxem! Todos os meus contatos são meus amigos. Quem iria querer me fazer mal? E desde que a A.M.A.L.G.A. chegou tudo tem ficado mais fácil!",
        character: 'pidgin',
        options: [{ text: "Algo está errado...", next: 'level3_amalga_shadow' }]
    },
    'level3_amalga_shadow': {
        narrator: "Uma sombra se forma no céu digital. É a presença sutil e assustadora da A.M.A.L.G.A., pairando sobre a estrada. O som de dados sendo 'coletados' eletronicamente se torna audível.",
        dialogue: "Que ótimo, o Pidinho. Ele compartilha cada detalhe... as fraquezas dele me dão uma vantagem tão agradável. Tão fofo e tão descuidado.",
        character: 'amalga',
        options: [{ text: "Pidinho se alarma!", next: 'level3_pidgin_panic' }]
    },
    'level3_pidgin_panic': {
        narrator: null,
        dialogue: "O que é isso? Minhas mensagens estão sumindo! Meu ninho está sendo invadido!",
        character: 'pidgin',
        options: [{ text: "Intervir!", next: 'level3_final_choice_intro' }]
    },
    'level3_final_choice_intro': {
        narrator: "Tux e Pe chegam à conclusão: eles precisam de um mensageiro seguro, não de um que prioriza a conveniência em detrimento da privacidade.",
        dialogue: "Nós precisamos recuperar o controle! Precisamos de um mensageiro seguro e livre, não de um que prioriza a conveniência em detrimento da privacidade.",
        character: 'pe',
        options: [
            { text: "1. Ajudar Pidinho", next: 'level3_choice1_win' },
            { text: "2. Apressar-se", next: 'level3_choice2_fail' }
        ]
    },
    'level3_choice1_win': {
        narrator: "O jogador escolhe ajudar Pidinho. Juntos, ensinam-no a usar senhas fortes, a não compartilhar informações sensíveis e a construir um ninho digital mais seguro, no topo de uma árvore. Pidinho, agora mais responsável, se junta à causa.",
        dialogue: "A Liberdade 0 (Liberdade de executar o programa como você desejar) estava oculta no ninho de Pidinho, sendo usada para fins que ele não desejava. Você a recuperou! A A.M.A.L.G.A. perdeu um ponto de vigilância. Liberdade 0 Recuperada!",
        character: 'pidgin',
        options: [{ text: "Continuar a aventura...", next: 'level4_start' }]
    },
    'level3_choice2_fail': {
        narrator: null,
        dialogue: null,
        character: null,
        nextState: 'level3_reflection_panel'
    },
    'level3_reflection_panel': {
        narrator: null,
        dialogue: null,
        character: null,
        gameOver: true,
        gameOverText: "Pe, a pressa é uma armadilha. Ao ignorar o perigo que o Pidinho corre, você não só o abandona, como também permite que a A.M.A.L.G.A. fique mais forte. Ignorando a segurança e a privacidade, você está dando à IA mais poder sobre todos. A liberdade só existe quando todos são responsáveis.",
        options: [{ text: "Aceitar a perda e seguir em frente", next: 'level4_start_no_freedom' }]
    }
};

export default level3;
