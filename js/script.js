

window.onload = () => {

    carregarConfiguracoes();

    document
        .getElementById("select-concurso")
        .addEventListener("change", atualizarMaterias);

};