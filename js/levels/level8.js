// Módulo: Level 8 (Praça e Sapo discursando)
export const level8 = {
    'level8_sapo_surprise': {
        narrator: "Pe e a Menina atravessam a porta luminosa ('SAÍDA: CONHECIMENTO LIVRE'). Ao sair, emergem em uma ampla praça construída por blocos de código colaborativo — a Biblioteca Comunitária Digital. Mas algo está errado: o Sapo que Lava Dinheiro está discursando para uma plateia!",
        dialogue: "A gente conseguiu salvar a Liberdade 1… Mas parece que o Sapo está tentando destruir as outras.",
        character: 'pe',
        options: [{ text: "O que o Sapo está dizendo?", next: 'level8_sapo_speech_1' }]
    },
    'level8_sapo_speech_1': {
        narrator: "O Sapo que Lava Dinheiro está em um palanque improvisado, vestindo um colete de construtor reluzente e se dirigindo a uma pequena audiência de Criaturas Digitais.",
        dialogue: "Atenção, Criaturas Digitais! Esta Biblioteca é lenta, desatualizada e cheia de bugs que vocês têm que consertar sozinhos. Vocês gastam tempo e energia mantendo tudo isso.",
        character: 'sapo',
        options: [{ text: "Ele aponta para a obra da IA", next: 'level8_sapo_pitch_2' }]
    },
    'level8_sapo_pitch_2': {
        narrator: "Ele aponta para um canteiro de obras ao lado, onde robôs com o logo da A.M.A.L.G.A. estão descarregando componentes fechados.",
        dialogue: "Mas eu tenho a solução para a sua dor de cabeça digital! Estou construindo o iVault– um repositório fechado, rápido e totalmente gerenciado. É proprietário, claro, mas vocês não precisam mais modificar nada!",
        character: 'sapo',
        options: [{ text: "Ouvir a proposta de centralização", next: 'level8_sapo_nuvem' }]
    },
    'level8_sapo_nuvem': {
        narrator: null,
        dialogue: "Eu modifico para vocês e vocês só precisam compartilhar comigo! Conveniência, lembram? Vocês economizam trabalho e eu gerencio tudo. É o conceito de ‘NuVem’ que a A.M.A.L.G.A. tanto ama! Onde tudo está ‘na nuvem’ dela e não na sua mão!",
        character: 'sapo',
        options: [{ text: "Pe percebe o ataque às liberdades", next: 'level8_pe_analysis' }]
    },
    'level8_pe_analysis': {
        narrator: null,
        dialogue: "O Sapo está atacando as Liberdades 2 (distribuir cópias) e 3 (melhorar o programa) de uma vez! Ele quer que a comunidade desista da soberania em troca da conveniência.",
        character: 'pe',
        options: [{ text: "A Menina reforça a autonomia", next: 'level8_girl_autonomy' }]
    },
    'level8_girl_autonomy': {
        narrator: null,
        dialogue: "Ele quer tirar nossa terra de novo! Entregar o trabalho para ele é entregar nossa autonomia! Nossa soberania digital está em risco. Você precisa intervir, Pe. O que faremos?",
        character: 'girl',
        options: [
            { text: "Desmascarar o Sapo publicamente", next: 'level8_choice_expose' },
            { text: "Procurar uma falha no iVault", next: 'level8_choice_flaw' }
        ]
    }
};

export default level8;
