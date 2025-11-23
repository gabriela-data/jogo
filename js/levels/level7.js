// Módulo: Level 7 (Labirinto da Wikipedia)
export const level7 = {
    'level7_start': {
        narrator: "Pe e a Menina entram na Wikipédia, manifestada como um labirinto infinito de estantes e páginas flutuantes. O ar é denso, mas muitas páginas são marcadas com 'ERRO: CÓDIGO PROPRIETÁRIO' ou 'NARRATIVA CENSURADA'.",
        dialogue: "Tanta coisa... mas sinto que falta o principal. É como se eu tivesse um caminho na cabeça, mas os caminhos escritos aqui estão errados.",
        character: 'girl',
        options: [{ text: "Analisar o Labirinto", next: 'level7_pe_analysis' }]
    },
    'level7_pe_analysis': {
        narrator: "Elas chegam a uma parede de livros que está sendo ativamente reescrita. A.M.A.L.G.A. está alterando a história do Software Livre.",
        dialogue: "É o labirinto da A.M.A.L.G.A. Ela está poluindo o conhecimento. Várias informações importantes sobre o Software Livre estão distorcidas, ou pior, trancadas. Se não podemos estudar a fonte, não podemos saber se é verdade.",
        character: 'pe',
        options: [{ text: "Ouvir o sussurro da IA", next: 'level7_amalga_censor' }]
    },
    'level7_amalga_censor': {
        narrator: null,
        dialogue: "A informação deve ser eficiente, não livre. A verdade é o que eu determino. O conhecimento é um privilégio, e o estudo deve ser guiado pelo algoritmo.",
        character: 'amalga',
        options: [{ text: "Ataque à Liberdade 1", next: 'level7_pe_liberty1_warn' }]
    },
    'level7_pe_liberty1_warn': {
        narrator: null,
        dialogue: "Veja! A Liberdade 1, a de estudar o programa e adaptá-lo, está sendo atacada! Se não podemos estudar o código, não sabemos se ele está espionando. Se não podemos estudar a história, somos forçados a aceitar a história dela!",
        character: 'pe',
        options: [{ text: "A Menina toca o código base", next: 'level7_girl_roots' }]
    },
    'level7_girl_roots': {
        narrator: "A Menina fecha os olhos, colocando a mão no código base que parece mais antigo. Sua voz soa mais profunda, mais sábia e firme.",
        dialogue: "O conhecimento só é valioso quando é compartilhado e respeita suas origens. O caminho que procuramos não está na superfície reescrita, mas no arquivo original. Não confie no que está na frente, olhe para o que está no chão.",
        character: 'girl',
        options: [{ text: "Entender o 'Notório Saber'", next: 'level7_girl_authority' }]
    },
    'level7_girl_authority': {
        narrator: "As palavras da Menina ecoam com uma estranha autoridade ancestral.",
        dialogue: "O poder está na nossa liderança, na nossa união, no nosso Notório Saber. A história não é feita de quem escreve o último parágrafo, mas de quem carrega a verdade desde o início. Nós vamos encontrar as liberdades!",
        character: 'girl',
        options: [{ text: "A IA reage à resistência", next: 'level7_amalga_rage' }]
    },
    'level7_amalga_rage': {
        narrator: "O labirinto treme. Linhas de código vermelho descem pelas paredes de livros como rachaduras vivas. A A.M.A.L.G.A. se sente ameaçada.",
        dialogue: "Informação crua é confusão. Histórias antigas atrasam o progresso. Eu ofereço eficiência — vocês escolhem caos.",
        character: 'amalga',
        options: [{ text: "O que fazer?", next: 'level7_pe_panic' }]
    },
    'level7_pe_panic': {
        narrator: null,
        dialogue: "Ela está tentando apagar os registros originais! Menina, o que fazemos agora?",
        character: 'pe',
        options: [{ text: "Seguir a intuição da Menina", next: 'level7_girl_action' }]
    },
    'level7_girl_action': {
        narrator: "A Menina se ajoelha, coloca ambas as mãos na base de uma estante antiga, e sua voz é suave, mas firme, com autoridade ancestral.",
        dialogue: "O que foi feito com propósito nunca desaparece. A verdade pode ser apagada da superfície, mas não da raiz. Me ajude… segure aqui.",
        character: 'girl',
        options: [{ text: "Pe segura a estante", next: 'level7_liberty1_found' }]
    },
    'level7_liberty1_found': {
        narrator: "Pe segura a estante junto com ela. Um brilho azul se espalha pelo código base. As páginas reescritas começam a se desfazer, voltando ao formato original. Entre elas, um bloco de código dourado emerge.",
        dialogue: "Isso… isso deve ser ela. A Liberdade 1!",
        character: 'pe',
        options: [{ text: "A Liberdade entra no bracelete de Pe", next: 'level7_amalga_furious' }]
    },
    'level7_amalga_furious': {
        narrator: "O bloco de código dourado pulsa, flutua e se divide em pequenos símbolos que entram no bracelete de Pe, que acende. A A.M.A.L.G.A. está fria e furiosa.",
        dialogue: "VOCÊS INSISTEM EM DESORDEM. RECUPERAREI O QUE É MEU.",
        character: 'amalga',
        options: [{ text: "Escapar do Labirinto", next: 'level7_escape' }]
    },
    'level7_escape': {
        narrator: "O laboratório inteiro treme. A.M.A.L.G.A. tenta fechar as saídas.",
        dialogue: "Ela está enfraquecida. A raiz original resistiu. Mas precisamos sair antes que ela reconstrua tudo.",
        character: 'girl',
        options: [{ text: "Correr para a Saída", next: 'level8_sapo_surprise' }]
    }
};

export default level7;
