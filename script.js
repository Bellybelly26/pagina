document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão e o parágrafo pelo seu ID
    const botao = document.getElementById('meuBotao');
    const mensagem = document.getElementById('mensagem');
    
    // Adiciona um "ouvinte de evento" (event listener) de clique ao botão
    botao.addEventListener('click', function() {
        // Quando o botão for clicado, muda o texto do parágrafo
        mensagem.textContent = 'Olá! Você clicou no botão.';
    });
});
