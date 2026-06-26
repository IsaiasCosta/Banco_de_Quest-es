// O script.js agora é APENAS o motor lógico. Sem banco de dados fixo aqui.
let questoesFiltradas = [];
let questaoAtual = 0;
let acertos = 0;
let erros = 0;
let respondeu = false;

// Configuração dos concursos disponíveis na pasta 'data'
const arquivosConcursos = [
    { arquivo: "inss", nome: "INSS" },
    { arquivo: "bb", nome: "Banco do Brasil" },
    { arquivo: "caixa", nome: "Caixa" }
];

// Prepara as caixas de seleção automaticamente
function carregarOpcoesDeFiltro() {
    const selectConcurso = document.getElementById("select-concurso");
    selectConcurso.innerHTML = '<option value="todos">Selecione um Concurso</option>'; // Força o usuário a escolher
    
    arquivosConcursos.forEach(c => {
        const option = document.createElement("option");
        option.value = c.arquivo; // Valor é o nome do arquivo JSON
        option.innerText = c.nome;
        selectConcurso.appendChild(option);
    });
}

// Quando mudar o concurso, busca o arquivo JSON correspondente
async function atualizarMaterias() {
    const concursoSelecionado = document.getElementById("select-concurso").value;
    const selectMateria = document.getElementById("select-materia");
    
    selectMateria.innerHTML = '<option value="todas">Todas as Matérias</option>';
    
    if (concursoSelecionado === "todos") return; // Sai se não tiver escolhido

    try {
        // A MÁGICA DO FETCH ACONTECE AQUI
        const resposta = await fetch(`data/${concursoSelecionado}.json`);
        
        if (!resposta.ok) throw new Error("Arquivo JSON não encontrado.");
        
        const questoes = await resposta.json();
        
        // Extrai as matérias daquele JSON específico
        const materiasUnicas = [...new Set(questoes.map(q => q.materia))];
        
        materiasUnicas.forEach(materia => {
            const option = document.createElement("option");
            option.value = materia;
            option.innerText = materia;
            selectMateria.appendChild(option);
        });
        
        // Já salva as questões do arquivo selecionado na memória para o filtro
        window.questoesTemporarias = questoes; 

    } catch (erro) {
        console.error("Erro ao carregar matérias:", erro);
        alert(`Não foi possível carregar o arquivo data/${concursoSelecionado}.json. Você está usando o Live Server?`);
    }
}

function iniciarEstudos() {
    const concursoSelecionado = document.getElementById("select-concurso").value;
    const materiaSelecionada = document.getElementById("select-materia").value;

    if (concursoSelecionado === "todos" || !window.questoesTemporarias) {
        alert("Por favor, selecione um concurso primeiro!");
        return;
    }

    // Lógica principal do filtro em cima do JSON carregado
    questoesFiltradas = window.questoesTemporarias.filter(q => {
        const matchMateria = (materiaSelecionada === "todas") || (q.materia === materiaSelecionada);
        return matchMateria;
    });

    if (questoesFiltradas.length === 0) {
        alert("Nenhuma questão encontrada com esses filtros!");
        return;
    }

    // Limpa o placar a cada nova sessão
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
document.getElementById('select-concurso').addEventListener('change', atualizarMaterias);

window.onload = () => {
    carregarOpcoesDeFiltro();
};