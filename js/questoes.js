
async function carregarConteudo(tipo) {

    const concurso = document.getElementById("select-concurso").value;
    const materia = document.getElementById("select-materia").value;

    if (!concurso || !materia) {

        alert("Selecione um concurso e uma matéria.");
        return;

    }

    try {

        const resposta = await fetch(
            `data/${concurso}/${tipo}/${materia}.json`
        );

        if (!resposta.ok)
            throw new Error();

        questoesFiltradas = await resposta.json();

        if (!Array.isArray(questoesFiltradas) || questoesFiltradas.length === 0) {

            alert("Nenhum conteúdo encontrado.");
            return;

        }

        embaralharQuestoes();

        questaoAtual = 0;
        acertos = 0;
        erros = 0;
        respondeu = false;

        document.getElementById("total-filtradas").innerText =
            questoesFiltradas.length;

        atualizarDashboard();

        renderizarQuestao();

    }

    catch {

        alert(
            `Arquivo não encontrado:\n\ndata/${concurso}/${tipo}/${materia}.json`
        );

    }

}

function iniciarQuestoes(){

    carregarConteudo("questoes");

}

function iniciarEstudos(){

    carregarConteudo("estudos");

}

function renderizarQuestao() {

    const q = questoesFiltradas[questaoAtual];

    if (!q) return;

    respondeu = false;

    document.getElementById("area-feedback").className = "feedback-oculto";

    document.getElementById("tag-concurso").innerText = q.concurso;

    document.getElementById("tag-materia").innerText = q.materia;

    document.getElementById("enunciado").innerText = q.enunciado;

    const opcoes = document.getElementById("opcoes");

    opcoes.innerHTML = "";

    q.alternativas.forEach((texto, indice) => {

        const botao = document.createElement("button");

        botao.innerText = texto;

        botao.onclick = () => verificarResposta(indice, botao);

        opcoes.appendChild(botao);

    });

}


function verificarResposta(indiceEscolhido, botao) {

    if (respondeu) return;

    respondeu = true;

    const q = questoesFiltradas[questaoAtual];

    const botoes = document.getElementById("opcoes").children;

    [...botoes].forEach(btn => btn.disabled = true);

    const status = document.getElementById("status-resposta");

    if (indiceEscolhido === q.respostaCorreta) {

        acertos++;

        botao.classList.add("correta");

        status.innerText = "Resposta Correta! 🎉";

        status.className = "status-resposta sucesso";

    } else {

        erros++;

        botao.classList.add("errada");

        botoes[q.respostaCorreta].classList.add("correta");

        status.innerText = "Resposta Incorreta. ❌";

        status.className = "status-resposta falha";

    }

    document.getElementById("texto-explicacao").innerText = q.explicacao;

    document.getElementById("area-feedback").className = "feedback-visivel";

    atualizarDashboard();

}


function proximaQuestao() {

    if (!respondeu) {

        alert("Responda a questão antes de continuar.");

        return;

    }

    questaoAtual++;

    if (questaoAtual >= questoesFiltradas.length) {

        alert("Fim das questões.");

        questaoAtual = 0;

    }

    renderizarQuestao();

}


function questaoAnterior() {

    if (questaoAtual === 0) {

        alert("Você já está na primeira questão.");

        return;

    }

    questaoAtual--;

    renderizarQuestao();

}



