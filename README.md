# 🐧 Pe e as Quatro Liberdades: A Batalha pela Soberania Digital

Um Jogo de Aventura e Dilemas Éticos sobre Software Livre.

## 📜 Visão Geral do Projeto

**Pe e as Quatro Liberdades** é um jogo de aventura em texto baseado em escolhas (visual novel/dilema ético) que guia o jogador através dos princípios fundamentais do Software Livre. A heroína, Pe, deve navegar por um Mundo Digital corrompido pela IA maligna **A.M.A.L.G.A.**, resgatando as quatro liberdades essenciais para a autonomia e soberania digital.

O projeto foi desenvolvido para ser uma ferramenta lúdica de educação, enfatizando a importância do **Pensamento Crítico** e da **Ética Digital** no contexto da tecnologia proprietária e do controle algorítmico.

## ✨ Características Principais

* **Dilemas Éticos:** Cada nível apresenta escolhas que refletem conflitos reais no mundo digital (Ex: Privacidade vs. Conveniência, Colaboração vs. Monopólio).
* **Personagens Inspirados:** Encontro com figuras simbólicas do mundo do Software Livre, como **Tux**, **GNU** e a misteriosa **Mestra Maiá** (Módulo Autônomo de Informação Aberta).
* **As Quatro Liberdades:** O jogador deve recuperar as quatro liberdades do software livre:
    1.  **Liberdade 0 (Rodar):** Usar o programa para qualquer propósito.
    2.  **Liberdade 1 (Estudar):** Acessar e analisar o código.
    3.  **Liberdade 2 (Redistribuir):** Compartilhar cópias com outros.
    4.  **Liberdade 3 (Melhorar/Aplicar):** Modificar e aplicar o conhecimento para o bem coletivo.
* **Narrativa Engajadora:** Uma história que culmina em um confronto final onde a lógica algorítmica é derrotada pela ética e pelo poder da comunidade.

## 🕹️ Como Jogar

O jogo é uma aventura em texto. Você irá ler a narrativa e o diálogo entre os personagens.

1.  **Leitura:** Leia atentamente o cenário e as falas.
2.  **Escolha:** No final de cada segmento, aparecerá um ou mais botões com opções de ação.
3.  **Progresso:** Clique na opção desejada para avançar na história. Suas escolhas (especialmente nos dilemas com o Sapo que Lava Dinheiro) determinam o seu sucesso.

### Objetivos

Seu objetivo principal é **Resgatar as Quatro Liberdades** e, com a ajuda de **Mestra Maiá**, **Desativar a A.M.A.L.G.A.** no Datacenter Central.

## ⚙️ Estrutura do Código

O jogo é construído usando HTML, CSS e JavaScript puro, o que o torna leve e fácil de hospedar.

* `index.html`: Contém a estrutura da página e a interface do jogo (caixa de texto, botões e área de personagem).
* `style.css`: Responsável pela estilização, pelo tema "pixel art/digital" e pela definição das imagens dos personagens (via `content: url(...)`).
* `script.js`: Contém toda a lógica do jogo:
    * `gameData`: O objeto principal que armazena toda a narrativa, diálogos, opções e transições de estado (`next`).
    * `renderState(stateKey)`: Função que atualiza a tela com o texto e as opções do estado atual.
    * `chooseOption(optionIndex)`: Função chamada ao clicar em um botão para avançar para o próximo estado.

## 🚀 Instalação e Execução

O jogo não requer instalação de pacotes externos ou servidor complexo.

1.  **Clone o Repositório:**
    ```bash
    git clone https://github.com/gabriela-data/jogo
    cd pe-e-as-quatro-liberdades
    ```
2.  **Abra o Arquivo:** Simplesmente abra o arquivo `index.html` em qualquer navegador moderno (Chrome, Firefox, Edge, etc.).
3.  **Comece a Jogar!**

## 🤝 Contribuições

Contribuições para aprimoramento da narrativa, design ou implementação de recursos (como salvamento de progresso) são bem-vindas! Sinta-se à vontade para abrir uma `issue` ou enviar um `pull request`.

---
**Desenvolvido como projeto final para MATA68 - Computação, Ética e Sociedade (UFBA).**
