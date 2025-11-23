// Módulo: Level 9 (Apelo técnico e fuga do Sapo)
export const level9 = {
    'level8_choice_expose': {
        narrator: "Pe decide interromper o Sapo, focando na ética de privacidade e soberania. Isso é um confronto direto que pode atrair a atenção da A.M.A.L.G.A.",
        dialogue: null,
        character: 'pe',
        options: [
            { text: "ALTERAR", next: 'level9_start'}
        ]
    },
    'level9_start': {
        narrator: "A Comunidade Digital se reúne em torno de Pe, da Menina e do Sapo que Lava Dinheiro. O Sapo ergue seu iVault brilhante, inflado de confiança.",
        dialogue: "O iVault é perfeito! Seguro, prático e… exclusivo. Só quem pagar tem acesso, e ninguém mais precisa se preocupar com esses códigos complicados que só atrapalham.",
        character: 'sapo',
        options: [{ text: "Pe inicia o Apelo Técnico", next: 'level9_pe_question_backdoor' }]
    },
    'level9_pe_question_backdoor': {
        narrator: "Pe dá um passo à frente.",
        dialogue: "Seguro? Perfeito? Então responde uma coisa, Sapo... Se seu código é tão seguro… por que existe uma porta dos fundos? Uma backdoor escondida, acessível só pela A.M.A.L.G.A.?",
        character: 'pe',
        options: [{ text: "Comunidade murmura", next: 'level9_community_reaction_1' }]
    },
    'level9_community_reaction_1': {
        narrator: "A Comunidade Digital murmura: 'Backdoor? Isso é sério? Ele escondeu uma entrada secreta?!'",
        dialogue: "O problema do seu iVault é simples: ele é fechado. E o que não pode ser estudado… não pode ser confiável. Liberdade 1 existe exatamente para isso: estudar o código. Sem transparência, qualquer um pode esconder qualquer coisa.",
        character: 'pe',
        options: [{ text: "Sapo nervoso", next: 'level9_sapo_defense' }]
    },
    'level9_sapo_defense': {
        narrator: null,
        dialogue: "Vocês não entendem! Conveniência exige controle! Se abrirem demais, qualquer um pode… modificar e estragar!",
        character: 'sapo',
        options: [{ text: "Pe explica a Liberdade 3", next: 'level9_pe_liberty3_win' }]
    },
    'level9_pe_liberty3_win': {
        narrator: "Pe sorri vitoriosa.",
        dialogue: "Ou… qualquer um pode melhorar. É por isso que existe a Liberdade 3: para corrigir falhas, aprimorar, proteger. O código livre se corrige em comunidade.",
        character: 'pe',
        options: [{ text: "O Sapo Foge", next: 'level9_sapo_flee' }]
    },
    'level9_sapo_flee': {
        narrator: "A Comunidade Digital está em choque: 'Ele enganou a gente… Se não podemos ver o código, estamos na mão dele!' O Sapo fica furioso.",
        dialogue: "Seus fuçadores de código malditos! Vocês vão se arrepender de recusar a conveniência! Eu voltarei, e mais lucrativo do que nunca!",
        character: 'sapo',
        options: [{ text: "O Sapo foge, saltando pelos cabos de dados.", next: 'level9_liberty3_secured' }]
    },
    'level9_liberty3_secured': {
        narrator: "A comunidade comemora a restauração da soberania. Um bloco de código dourado emerge do iVault abandonado e se insere no bracelete de Pe.",
        dialogue: "Pe, você conseguiu! Eles viram a verdade. Recuperamos a Liberdade 3! Mas o Sapo ainda vai tentar corromper a ideia de compartilhamento…",
        character: 'girl',
        options: [{ text: "Preparar-se para o Nível 10", next: 'level10_start' }]
    }
};

export default level9;
