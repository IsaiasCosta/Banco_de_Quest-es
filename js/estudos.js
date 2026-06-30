function mostrarQuestoes(){

    document
        .getElementById("pagina-questoes")
        .classList.remove("oculto");

    document
        .getElementById("pagina-estudos")
        .classList.add("oculto");

}


function mostrarEstudos(){

    document
        .getElementById("pagina-estudos")
        .classList.remove("oculto");

    document
        .getElementById("pagina-questoes")
        .classList.add("oculto");

}
