
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

        const dados = await resposta.json();

        if (tipo === "questoes") {

            if (!Array.isArray(dados) || dados.length === 0) {

                alert("Nenhum conteúdo encontrado.");
                return;

            }

            questoesFiltradas = dados;

            embaralharQuestoes();

            questaoAtual = 0;
            acertos = 0;
            erros = 0;
            respondeu = false;

            document.getElementById("total-filtradas").innerText =
                questoesFiltradas.length;

            atualizarDashboard();

            mostrarQuestoes();
            renderizarQuestao();

        } else if (tipo === "estudos") {

            mostrarEstudos();
            renderizarEstudo(dados, materia);

        }

    }

    catch (erro) {

        if (tipo === "estudos") {
            mostrarEstudos();
            document.getElementById("titulo-estudo").innerText =
                formatarNome(materia);
            document.getElementById("conteudo-estudo").innerHTML =
                `<p>Conteúdo de estudo ainda não disponível para <strong>${formatarNome(materia)}</strong>.</p>`;
            return;
        }

        alert(
            `Arquivo não encontrado:\n\ndata/${concurso}/${tipo}/${materia}.json`
        );

    }

}

function iniciarQuestoes(){

    mostrarQuestoes();
    carregarConteudo("questoes");

}

function iniciarEstudos(){

    mostrarEstudos();
    carregarConteudo("estudos");

}

function renderizarEstudo(dados, materia) {

    const titulo = dados?.titulo || formatarNome(materia);
    const conteudo = document.getElementById("conteudo-estudo");

    document.getElementById("titulo-estudo").innerText = titulo;

    if (!dados) {
        conteudo.innerHTML = `<p>Conteúdo de estudo não encontrado.</p>`;
        return;
    }

    if (typeof dados === "string") {
        conteudo.innerHTML = `<p>${dados}</p>`;
        return;
    }

    if (Array.isArray(dados)) {
        conteudo.innerHTML = dados
            .map(item => `<p>${item}</p>`)
            .join("");
        return;
    }

    if (typeof dados === "object") {
        if (dados.conteudo) {
            conteudo.innerHTML = `<p>${dados.conteudo}</p>`;
            return;
        }

        if (dados.secoes && Array.isArray(dados.secoes)) {
            conteudo.innerHTML = dados.secoes
                .map(secao => `<h3>${secao.titulo || ""}</h3><p>${secao.texto || ""}</p>`)
                .join("");
            return;
        }

        conteudo.innerHTML = `<pre>${JSON.stringify(dados, null, 2)}</pre>`;
        return;
    }

    conteudo.innerHTML = `<p>Conteúdo de estudo inválido.</p>`;

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



