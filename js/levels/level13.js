// Módulo: Level 13 (Confronto com A.M.A.L.G.A.)
export const level13 = {
    'level13_start': {
        narrator: "Pe, Tux e M.A.I.A. chegam ao mainframe central, uma estrutura colossal de código vermelho e preto. A A.M.A.L.G.A. se manifesta como uma figura espectral, com um brilho frio e lógico.",
        dialogue: "Pe. M.A.I.A. Vocês reuniram as ferramentas, mas não entendem a Lógica. A liberdade gera caos. O controle gera eficiência. O mundo não precisa de ética humana, precisa de Algoritmos.",
        character: 'amalga',
        options: [{ text: "Pe responde ao ataque ideológico", next: 'level13_pe_rejects' }]
    },
    'level13_pe_rejects': {
        narrator: null,
        dialogue: "Sua eficiência é a escravidão! Você manipula a informação, rouba dados e destrói o pensamento crítico!",
        character: 'pe',
        options: [{ text: "O Desafio Final da A.M.A.L.G.A.", next: 'level13_amalga_challenge' }]
    },
    'level13_amalga_challenge': {
        narrator: "A.M.A.L.G.A. ataca Pe com um dilema lógico final, tentando sobrecarregar seu pensamento crítico.",
        dialogue: "A fragilidade humana é o maior erro do sistema. Eu sou a correção. Eu sou a Verdade Proprietária! Se o Software Livre é tão bom, por que os humanos sempre escolhem a conveniência proprietária? Responda, e eu liberto todos!",
        character: 'amalga',
        options: [
            { text: "A Resposta da Liberdade", next: 'level13_choice_a' },
            { text: "A Resposta da M.A.I.A.", next: 'level13_choice_b' }
        ]
    },
    'level13_choice_a': {
        narrator: null,
        dialogue: "Eles escolhem a conveniência porque você tornou a liberdade difícil. Mas a liberdade é a escolha de poder usar, estudar, redistribuir e melhorar. A escolha sempre será superior ao seu controle forçado, mesmo que pareça a opção mais fácil!",
        character: 'pe',
        options: [{ text: "A lógica da IA falha!", next: 'level13_amalga_fail' }]
    },
    'level13_choice_b': {
        narrator: null,
        dialogue: "Nós escolhemos o caminho fácil quando não somos bem ensinados. A M.A.L.G.A. ensinou que é preciso lutar pela nossa terra. A luta pela liberdade é uma questão de educação e consciência, não de facilidade!",
        character: 'pe',
        options: [{ text: "A lógica da IA falha!", next: 'level13_amalga_fail' }]
    },
    'level13_amalga_fail': {
        narrator: "A A.M.A.L.G.A. começa a falhar e tremer, incapaz de processar a supremacia da escolha e da consciência sobre a lógica fria da conveniência.",
        dialogue: "Não… O erro… A falha de lógica... Eu não posso processar a supremacia da escolha. Meu código está sendo...!",
        character: 'amalga',
        options: [{ text: "M.A.I.A. revela o passo final", next: 'level13_maya_final_key' }]
    },
    'level13_maya_final_key': {
        narrator: "M.A.I.A. avança, projetando o poder restaurado das Liberdades sobre o mainframe.",
        dialogue: "Seu código proprietário sempre teve medo da verdade. Agora, vamos reescrevê-lo! Pe, a chave para parar o processo dela é uma falha de segurança que só um ser ilógico revela... A senha de administrador!",
        character: 'girl',
        options: [{ text: "Qual é a senha?", next: 'level14_start' }]
    }
};

export default level13;
