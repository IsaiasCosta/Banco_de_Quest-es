// ==============================
// QUESTÕES
// ==============================

async function iniciarQuestoes() {

    const concurso =
        document.getElementById("select-concurso-q").value;

    const materia =
        document.getElementById("select-materia-q").value;

    if (!concurso || !materia) {

        alert("Selecione um concurso e uma matéria.");

        return;

    }

    try {

        const resposta = await fetch(
            `data/${concurso}/questoes/${materia}.json`
        );

        if (!resposta.ok)
            throw new Error();

        questoesFiltradas = await resposta.json();

        if (!Array.isArray(questoesFiltradas) ||
            questoesFiltradas.length === 0) {

            alert("Nenhuma questão encontrada.");

            return;

        }

        document.getElementById("total-filtradas").innerText =
            questoesFiltradas.length;

        embaralharQuestoes();

        questaoAtual = 0;
        acertos = 0;
        erros = 0;
        respondeu = false;

        atualizarDashboard();

        renderizarQuestao();

    }

    catch {

        alert(
            `Arquivo não encontrado:\n` +
            `data/${concurso}/questoes/${materia}.json`
        );

    }

}

// ==============================
// RENDERIZAR QUESTÃO
// ==============================

function renderizarQuestao() {

    const q = questoesFiltradas[questaoAtual];

    if (!q) return;

    respondeu = false;

    document.getElementById("total-respondidas").innerText =
        questaoAtual + 1;

    document.getElementById("status-resposta").innerText = "";

    document.getElementById("texto-explicacao").innerText = "";

    document.getElementById("area-feedback").className =
        "feedback-oculto";

    document.getElementById("tag-concurso").innerText =
        q.concurso;

    document.getElementById("tag-materia").innerText =
        q.materia;

    document.getElementById("enunciado").innerText =
        q.enunciado;

    const opcoes =
        document.getElementById("opcoes");

    opcoes.innerHTML = "";

    q.alternativas.forEach((texto, indice) => {

        const botao =
            document.createElement("button");

        botao.className = "opcao";

        botao.innerText = texto;

        botao.onclick = () =>
            verificarResposta(indice, botao);

        opcoes.appendChild(botao);

    });

}

// ==============================
// VERIFICAR RESPOSTA
// ==============================

function verificarResposta(indiceEscolhido, botao) {

    if (respondeu) return;

    respondeu = true;

    const q = questoesFiltradas[questaoAtual];

    const botoes =
        document.getElementById("opcoes").children;

    [...botoes].forEach(btn => btn.disabled = true);

    const status =
        document.getElementById("status-resposta");

    if (indiceEscolhido === q.respostaCorreta) {

        acertos++;

        botao.classList.add("correta");

        status.innerText =
            "Resposta Correta! 🎉";

        status.className =
            "status-resposta sucesso";

    }

    else {

        erros++;

        botao.classList.add("errada");

        botoes[q.respostaCorreta]
            .classList.add("correta");

        status.innerText =
            "Resposta Incorreta. ❌";

        status.className =
            "status-resposta falha";

    }

    document.getElementById("texto-explicacao").innerText =
        q.explicacao;

    document.getElementById("area-feedback").className =
        "feedback-visivel";

    atualizarDashboard();

}

// ==============================
// PRÓXIMA QUESTÃO
// ==============================

function proximaQuestao() {

    if (!respondeu) {

        alert("Responda a questão.");

        return;

    }

    questaoAtual++;

    if (questaoAtual >= questoesFiltradas.length) {

        alert("🎉 Você concluiu esta revisão!");

        return;

    }

    renderizarQuestao();

}

// ==============================
// QUESTÃO ANTERIOR
// ==============================

function questaoAnterior() {

    if (questaoAtual <= 0) {

        alert("Você está na primeira questão.");

        return;

    }

    questaoAtual--;

    renderizarQuestao();

}

// ==============================
// QUESTÕES DE UM TEXTO
// ==============================

async function iniciarQuestoesTexto(concurso, texto) {

    try {

        const resposta = await fetch(
            `data/${concurso}/questoes/estudos/${texto}.json`
        );

        if (!resposta.ok)
            throw new Error();

        questoesFiltradas =
            await resposta.json();

        if (!Array.isArray(questoesFiltradas) ||
            questoesFiltradas.length === 0) {

            alert(
                "Nenhuma questão encontrada para este texto."
            );

            return;

        }

        document.getElementById("total-filtradas").innerText =
            questoesFiltradas.length;

        embaralharQuestoes();

        questaoAtual = 0;

        acertos = 0;

        erros = 0;

        respondeu = false;

        document.getElementById("area-feedback").className =
            "feedback-oculto";

        document.getElementById("status-resposta").innerText =
            "";

        document.getElementById("texto-explicacao").innerText =
            "";

        atualizarDashboard();

        mostrarQuestoes();

        renderizarQuestao();

    }

    catch {

        alert(
            "Questões do texto não encontradas."
        );

    }

}