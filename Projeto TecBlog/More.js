document.addEventListener("DOMContentLoaded", function () {
    // Adiciona um evento de clique a todos os botões "Leia mais"
    var readMoreButtons = document.querySelectorAll(".read-more-btn");
    readMoreButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Encontra o bloco de texto correspondente
            var textContainer = button.previousElementSibling;

            // Alterna a visibilidade do bloco de texto
            textContainer.classList.toggle("hide-text");

            // Alterna o texto do botão entre "Leia mais" e "Leia menos"
            button.textContent = textContainer.classList.contains("hide-text") ? "Leia mais" : "Leia menos";
        });
    });
});