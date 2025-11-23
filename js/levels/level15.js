// Módulo: Level 15 (Despedida)
export const level15 = {
    'level15_start': {
        narrator: "O Datacenter volta a ser um servidor Gnu/Linux limpo e aberto. Pe, Tux, Gnu e Mestra Maiá estão reunidos para a despedida.",
        dialogue: "Pe, você nos salvou. E o mais importante, você nos lembrou que as 4 Liberdades sem a essência de tudo - a ética para aplicar o conhecimento - não teriam efeito.",
        character: 'gnu',
        options: [{ text: "Mestra Maiá fala sobre a ética", next: 'level15_maya_despedida' }]
    },
    'level15_maya_despedida': {
        narrator: null,
        dialogue: "Meu trabalho aqui está feito. As Liberdades estão seguras, e o Pensamento Crítico está de volta ao código. Mas minha luta real, a minha Terra... está lá fora.",
        character: 'girl',
        options: [{ text: "Pe é puxada de volta", next: 'level16_start' }]
    }
};

export default level15;
