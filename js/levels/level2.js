// Módulo: Level 2 (Gnu e caminho até instruções)
export const level2 = {
    'level2_tux_transition': {
        narrator: null,
        dialogue: "Muito obrigado! Venha, vamos falar com o nosso mestre.",
        character: 'tux',
        options: [{ text: "Seguir Tux até o templo", next: 'level2_gnu_intro' }]
    },
    'level2_gnu_intro': {
        narrator: "Tux e Pe andam até um templo de onde se escuta alguém tocando flauta. Ao entrar, veem o que parece ser um boi peculiar com as pernas cruzadas, flutuando a poucos centímetros do chão.",
        dialogue: "Olá jovem, muito obrigado por sua gentileza, contamos muito com você, pois você possui algo que nós seres digitais não temos, a ética!",
        character: 'gnu',
        options: [{ text: "Ouvir o mestre Gnu", next: 'level2_gnu_part1' }]
    },
    'level2_gnu_part1': {
        narrator: null,
        dialogue: "Desde o início do movimento do Software Livre eu e as quatro liberdades fomos criados, eu fui concebido como guardião destas. Nós sustentamos o ecossistema, porém nossa terra foi invadida!",
        character: 'gnu',
        options: [{ text: "O que aconteceu?", next: 'level2_gnu_part2' }]
    },
    'level2_gnu_part2': {
        narrator: null,
        dialogue: "Um dia, uma viajante curiosa, a A.M.A.L.G.A., apareceu e contou suas ideias de como a IA poderia ajudar os humanos. Nós nos comovemos e a ajudamos com um servidor Gnu/Linux. Mas quanto mais fazia, menos sabíamos. A verdade é que tínhamos sido traídos: ela estava coletando nossos dados para nos controlar!",
        character: 'gnu',
        options: [{ text: "E as liberdades?", next: 'level2_gnu_part3' }]
    },
    'level2_gnu_part3': {
        narrator: null,
        dialogue: "Ela tentou roubar as quatro liberdades do software livre, mas o poder delas era grande demais. Ao tentar subjugá-las, A.M.A.L.G.A. não conseguiu contê-las, elas se espalharam pelo mundo! Você precisa recuperá-las e derrotar a IA. Lembre-se: sua essência, seu coração, está no Datacenter!",
        character: 'gnu',
        options: [{ text: "Aceitar a missão e ir para a busca!", next: 'level3_start' }]
    }
};

export default level2;
