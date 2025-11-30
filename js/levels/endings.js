// Módulo: Endings (finais e painéis de game over/reflexão)
export const endings = {
    'game_over_bad_ending': {
        narrator: null,
        dialogue: null,
        character: null,
        gameOver: true,
        gameOverType: "bad",      // Para audio
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
        gameOverText: "FALHA! Pateta! Acha mesmo que eu lavo dinheiro com água? Eu lavo é com os seus dados! A.M.A.L.G.A. vai amar isso! Você reforçou o poder da IA, perdeu a confiança e terá que recomeçar o nível.",
        options: [{ text: "Tentar novamente", next: 'level5_start' }]
    },
    'level6_refletion_recusa': {
        narrator: "Pe segue sozinha em direção ao portal cintilante da Wikipédia. A névoa a envolve, e ela sente uma estranha sensação de vazio.",
        dialogue: null,
        character: null,
        gameOver: true,
        gameOverText: "REFLEXÃO: Sozinha, Pe entra na Wikipédia, mas sente falta da força que a aliança poderia ter lhe dado. A jornada para restaurar as Quatro Liberdades do Software Livre não é possível sem aliados. A liberdade é uma escolha coletiva.",
        options: [{ text: "Reconsiderar e voltar para buscar a menina", next: 'level6_start' }]
    },
    'game_over_win': {
        narrator: "FIM. Parabéns! Você restaurou as Quatro Liberdades do Software Livre e garantiu a Soberania Digital. A luta continua na educação e na comunidade, mas o caminho está livre!",
        dialogue: "VITÓRIA! Você garantiu um Mundo Digital livre, ético e colaborativo. A liberdade é uma escolha diária",
        character: null,
        gameOverType: "good",      // Para audio
         options: [
        { text: "Ver Créditos", next: "credits" }
    ]
    },
    // Creditos do jogo
    credits: {
        gameOver: true,
        gameOverType: "good",
        narrator: null,
        dialogue: null,
        character: null,

        gameOverText: `
            <b>Obrigado por jogar Consciência de Código!</b><br><br>

            <b>Equipe:</b><br>
            Arthur Felipe Maia Coelho<br>
            Davi de Jesus Santos<br>
            Davi Santos da Conceição<br>
            Gabriela de Almeida da Silva<br>
            Rodolfo Melo da Silva Lima<br>
            Túlio Augustus Santos Viana<br><br>

            <b>Desenvolvedores:</b><br>
            Arthur Felipe Maia Coelho<br>
            Gabriela de Almeida da Silva<br>
            Rodolfo Melo da Silva Lima<br>
            Túlio Augustus Santos Viana<br><br>

            <b>DISCIPLINA:</b><br>
            MAT68 - Computador, Ética e Sociedade (COMPUSOC) 2025.2<br><br>

            <b>DOCENTE:</b> Débora Abdalla e Igor Sobral<br>
            Universidade Federal da Bahia (UFBA)<br><br>
        `,
        options: [{ text: "Jogar Novamente", next: 'start' }]
    }
};

export default endings;
