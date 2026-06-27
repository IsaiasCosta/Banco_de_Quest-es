// O script.js agora é APENAS o motor lógico. Sem banco de dados fixo aqui.
let concursos = []; // Array para armazenar os concursos carregados do JSON // Array para armazenar as matérias carregadas do JSON

let questoesFiltradas = [];
let questaoAtual = 0;
let acertos = 0;
let erros = 0;
let respondeu = false;


async function carregarConfiguracoes() {

    const respostaConcursos = await fetch("config/concursos.json");
    concursos = await respostaConcursos.json();

        console.log(concursos);
        
    carregarOpcoesDeFiltro();

}

// Prepara as caixas de seleção automaticamente
function carregarOpcoesDeFiltro() {

    const select = document.getElementById("select-concurso");
    select.innerHTML = "<option value=''>Selecione um concurso</option>";
    concursos.forEach(c => {
        const option = document.createElement("option");
        option.value = c.id;
        option.textContent = c.nome;
        select.appendChild(option);

    });

}
// Quando mudar o concurso, busca o arquivo JSON correspondente
function atualizarMaterias() {

    const concurso = document.getElementById("select-concurso").value;

    const select = document.getElementById("select-materia");

    select.innerHTML = "<option value=''>Selecione a matéria</option>";

    if (!concurso) return;

    const dados = concursos.find(c => c.id === concurso);

    if (!dados) return;

    dados.materias.forEach(materia => {

        const option = document.createElement("option");

        option.value = materia;

        option.textContent = materia
            .replaceAll("-", " ")
            .replace(/\b\w/g, letra => letra.toUpperCase());

        select.appendChild(option);

    });

}

async function iniciarEstudos() {

    const concurso = document.getElementById("select-concurso").value;
    const materia = document.getElementById("select-materia").value;
    if (!concurso || !materia) {

        alert("Selecione o concurso e a matéria.");
        return;

    }

    const resposta = await fetch(`data/${concurso}/${materia}.json`);

    if (!resposta.ok) {
        alert(`Arquivo não encontrado:\ndata/${concurso}/${materia}.json`);
        return;
    }

    questoesFiltradas = await resposta.json();
    questaoAtual = 0;
    acertos = 0;
    erros = 0;

    document.getElementById("total-filtradas").innerText = questoesFiltradas.length;
    atualizarDashboard();
    renderizarQuestao();

}

function renderizarQuestao() {
    respondeu = false;
    const q = questoesFiltradas[questaoAtual];

    if (!q) {
        alert("Nenhuma questão encontrada.");
        return;
    }

    document.getElementById("area-feedback").className = "feedback-oculto";
    document.getElementById("tag-concurso").innerText = q.concurso;
    document.getElementById("tag-materia").innerText = q.materia;
    document.getElementById("enunciado").innerText = q.enunciado;

    const divOpcoes = document.getElementById("opcoes");
    divOpcoes.innerHTML = "";

    q.alternativas.forEach((texto, index) => {
        const btn = document.createElement("button");
        btn.innerText = texto;
        btn.onclick = () => verificarResposta(index, btn);
        divOpcoes.appendChild(btn);
    });
}

function verificarResposta(indiceEscolhido, botaoClicado) {
    if (respondeu) return;
    respondeu = true;

    const q = questoesFiltradas[questaoAtual];
    const botoes = document.getElementById("opcoes").children;

    for (let btn of botoes) btn.disabled = true;

    const statusTxt = document.getElementById("status-resposta");

    if (indiceEscolhido === q.respostaCorreta) {
        botaoClicado.classList.add("correta");
        acertos++;
        statusTxt.innerText = "Resposta Correta! 🎉";
        statusTxt.className = "status-resposta sucesso";
    } else {
        botaoClicado.classList.add("errada");
        botoes[q.respostaCorreta].classList.add("correta");
        erros++;
        statusTxt.innerText = "Resposta Incorreta. ❌";
        statusTxt.className = "status-resposta falha";
    }

    document.getElementById("texto-explicacao").innerText = q.explicacao;
    document.getElementById("area-feedback").className = "feedback-visivel";
    atualizarDashboard();
}

function atualizarDashboard() {
    const respondidas = acertos + erros;
    document.getElementById("total-respondidas").innerText = respondidas;
    document.getElementById("total-acertos").innerText = acertos;
    document.getElementById("total-erros").innerText = erros;

    const pct = respondidas > 0 ? Math.round((acertos / respondidas) * 100) : 0;
    document.getElementById("pct-acertos").innerText = `${pct}%`;
}

function proximaQuestao() {

    if (!respondeu) {
        alert("Responda a questão antes de continuar.");
        return;
    }

    questaoAtual++;

    questaoAtual++;

    if (questaoAtual >= questoesFiltradas.length) {
        alert("Fim das questões para este filtro! Vamos recomeçar a rodada.");
        questaoAtual = 0;
    }
    renderizarQuestao();
}

function questaoAnterior() {
    if (questaoAtual > 0) { questaoAtual--; renderizarQuestao(); atualizarDashboard(); }
}

// O evento onChange para atualizar matérias quando mudar o concurso

window.onload = () => {
    carregarConfiguracoes();
    document
        .getElementById("select-concurso")
        .addEventListener("change", atualizarMaterias);
};