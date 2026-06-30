function embaralharQuestoes() {

    questoesFiltradas.sort(() => Math.random() - 0.5);

}
function formatarNome(texto) {

    return texto
        .replaceAll("-", " ")
        .replace(/\b\w/g, letra => letra.toUpperCase());

}
