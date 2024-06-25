function verificarResposta(idPergunta, botao) {
    var inputs = document.getElementsByName(idPergunta);
    var respostaCorreta = false;

    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        if (input.checked && input.value === 'correto') {
            respostaCorreta = true;
            break;
        }
    }

    var resultado = botao.nextElementSibling;
    if (respostaCorreta) {
        resultado.textContent = "Resposta correta!";
        resultado.style.color = "#2ecc71";
    } else {
        resultado.textContent = "Resposta incorreta. Tente novamente.";
        resultado.style.color = "#e74c3c";
    }
}
