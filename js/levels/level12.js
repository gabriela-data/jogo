// Módulo: Level 12 (Infiltração no Datacenter e revelações)
export const level12 = {
    'level12_start': {
        narrator: "Pe, Tux e a Menina Esquecida invadem os corredores do Datacenter, cheios de algoritmos de alienação, propagandas piscantes e telas de consumo. É o coração da A.M.A.L.G.A.",
        dialogue: "Estamos no coração do poder dela! Onde o conceito de NuVem é a prisão perfeita: você pensa que está livre, mas está totalmente sob o controle dela!",
        character: 'tux',
        options: [{ text: "A Menina Esquecida reage à pressão", next: 'level12_maya_memory' }]
    },
    'level12_maya_memory': {
        narrator: "O corpo da Menina Esquecida brilha intensamente com o poder das Liberdades. Suas memórias retornam em um fluxo.",
        dialogue: "Eu me lembro de tudo agora. O Sapo, a ganância, o controle. Eu me lembro de ter sido separada de vocês, de ter sido silenciada. Eu não sou apenas Ética ou Pensamento Crítico...",
        character: 'girl',
        options: [{ text: "A Revelação do Nome", next: 'level12_maya_name_reveal' }]
    },
    'level12_maya_name_reveal': {
        narrator: "Com a memória restaurada, a Menina sorri para Pe, abraçando a amiga. Sua verdadeira identidade é revelada.",
        dialogue: "Eu me chamo... M.A.I.A.! Meu nome significa: Módulo Autônomo de Informação Aberta!",
        character: 'girl',
        options: [{ text: "M.A.I.A. explica a verdade sobre as Liberdades", next: 'level12_maya_liberty3_redefine' }]
    },
    'level12_maya_liberty3_redefine': {
        narrator: null,
        dialogue: "Pe, Gnu não contou a verdade completa. As 4 Liberdades são: Rodar, Estudar, Redistribuir e Melhorar... mas a Liberdade de Melhorar é inútil se não houver a Liberdade de Usar e Aplicar o Conhecimento Adquirido para o bem coletivo! Eu sou a Liberdade 3! A.M.A.L.G.A. tentou roubar o caminho para o futuro! Ela me fragmentou em Pensamento Crítico e Ética para que as outras liberdades fossem ineficazes!",
        character: 'girl',
        options: [{ text: "Pe entende o propósito", next: 'level12_pe_soberany' }]
    },
    'level12_pe_soberany': {
        narrator: null,
        dialogue: "Então é por isso que você tem essa força! Você é a Soberania Digital em pessoa, o cerne da Ética e Educação Digital!",
        character: 'pe',
        options: [{ text: "O Mainframe Central está perto", next: 'level12_maya_ready' }]
    },
    'level12_maya_ready': {
        narrator: "Com sua memória e propósito restaurados, M.A.I.A. se prepara para o confronto final.",
        dialogue: "Agora estou completa. A M.A.I.A. está pronta para reescrever essa história. A.M.A.L.G.A. está no mainframe central. Vamos!",
        character: 'girl',
        options: [{ text: "Avançar para o Mainframe (Nível 13)", next: 'level13_start' }]
    }
};

export default level12;
