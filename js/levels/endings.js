// Módulo: Endings (finais e painéis de game over/reflexão)
export const endings = {
    'game_over_bad_ending': {
        narrator: null,
        dialogue: null,
        character: null,
        gameOver: true,
        gameOverText: "“Sem a sua ajuda, Pe, a IA Maligna alcança seu objetivo. As quatro liberdades permanecem perdidas, e o mundo digital se torna completamente fechado e controlado. Seus dados são coletados sem permissão, suas escolhas são limitadas e seu próprio caminho passa a ser decidido pela IA. Sem liberdade… não há futuro para ninguém.”"
    },
    'level3_reflection_panel': {
        narrator: null,
        dialogue: null,
        character: null,
        gameOver: true,
        gameOverText: "Pe, a pressa é uma armadilha. Ao ignorar o perigo que o Pidinho corre, você não só o abandona, como também permite que a A.M.A.L.G.A. fique mais forte. Ignorando a segurança e a privacidade, você está dando à IA mais poder sobre todos. A liberdade só existe quando todos são responsáveis.",
        options: [{ text: "Aceitar a perda e seguir em frente", next: 'level4_start_no_freedom' }]
    },
    'level5_reflection_accept': {
        narrator: "O Sapo que Lava Dinheiro gargalha ao receber os dados da heroína. A poção desaparece em fumaça.",
        dialogue: null,
        character: null,
        gameOver: true,
        gameOverText: "**FALHA!** Pateta! Acha mesmo que eu lavo dinheiro com água? Eu lavo é com os seus dados! A.M.A.L.G.A. vai amar isso! Você reforçou o poder da IA, perdeu a confiança e terá que recomeçar o nível.",
        options: [{ text: "Tentar novamente", next: 'level5_start' }]
    },
    'game_over_win': {
        narrator: "FIM. Parabéns! Você restaurou as Quatro Liberdades do Software Livre e garantiu a Soberania Digital. A luta continua na educação e na comunidade, mas o caminho está livre!",
        dialogue: "**VITÓRIA!**",
        character: null,
        gameOver: true,
        gameOverText: "Você garantiu um Mundo Digital livre, ético e colaborativo. A liberdade é uma escolha diária.",
        options: [{ text: "Jogar Novamente", next: 'start' }]
    }
};

export default endings;
