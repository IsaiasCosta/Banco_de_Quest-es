
// ==============================
// INICIALIZAÇÃO
// ==============================

window.onload = () => {

    carregarConfiguracoes();

    // ==========================
    // QUESTÕES
    // ==========================

    document
        .getElementById("select-concurso-q")
        .addEventListener("change", atualizarMaterias);

    // ==========================
    // ESTUDOS
    // ==========================

    document
        .getElementById("select-concurso-e")
        .addEventListener("change", atualizarTextos);

    // ==========================
    // ABAS
    // ==========================

    document
        .getElementById("btn-questoes")
        .addEventListener("click", mostrarQuestoes);

    document
        .getElementById("btn-estudos")
        .addEventListener("click", mostrarEstudos);

    mostrarQuestoes();

};
function mostrarQuestoes() {

    document
        .getElementById("pagina-questoes")
        .classList.remove("oculto");

    document
        .getElementById("pagina-estudos")
        .classList.add("oculto");

    document
        .getElementById("btn-questoes")
        .classList.add("ativa");

    document
        .getElementById("btn-estudos")
        .classList.remove("ativa");

}

function mostrarEstudos() {

    document
        .getElementById("pagina-estudos")
        .classList.remove("oculto");

    document
        .getElementById("pagina-questoes")
        .classList.add("oculto");

    document
        .getElementById("btn-estudos")
        .classList.add("ativa");

    document
        .getElementById("btn-questoes")
        .classList.remove("ativa");

}