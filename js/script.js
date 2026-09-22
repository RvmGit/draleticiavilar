const perguntas = document.querySelectorAll(".faq-pergunta");

perguntas.forEach(function (pergunta) {

    pergunta.addEventListener("click", function () {

        const item = pergunta.parentElement;

        item.classList.toggle("ativo");

    });

});