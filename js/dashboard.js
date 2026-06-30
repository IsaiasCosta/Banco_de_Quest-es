
function atualizarDashboard() {

    const respondidas = acertos + erros;

    document.getElementById("total-respondidas").innerText = respondidas;

    document.getElementById("total-acertos").innerText = acertos;

    document.getElementById("total-erros").innerText = erros;

    document.getElementById("pct-acertos").innerText =
        respondidas === 0
            ? "0%"
            : `${Math.round(acertos / respondidas * 100)}%`;

}