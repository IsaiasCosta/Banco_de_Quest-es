function ativarAba(tipo) {

    document.getElementById("btn-questoes").classList.toggle(
        "ativa",
        tipo === "questoes"
    );

    document.getElementById("btn-estudos").classList.toggle(
        "ativa",
        tipo === "estudos"
    );

}

function mostrarQuestoes(){

    document
        .getElementById("pagina-questoes")
        .classList.remove("oculto");

    document
        .getElementById("pagina-estudos")
        .classList.add("oculto");

    ativarAba("questoes");

}


function mostrarEstudos(){

    document
        .getElementById("pagina-estudos")
        .classList.remove("oculto");

    document
        .getElementById("pagina-questoes")
        .classList.add("oculto");

    ativarAba("estudos");

}

window.addEventListener("load", () => {
    const btnQuestoes = document.getElementById("btn-questoes");
    const btnEstudos = document.getElementById("btn-estudos");

    if (btnQuestoes) {
        btnQuestoes.addEventListener("click", mostrarQuestoes);
    }

    if (btnEstudos) {
        btnEstudos.addEventListener("click", mostrarEstudos);
    }
});
