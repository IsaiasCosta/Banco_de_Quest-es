// =======================================
// CARREGA CONFIGURAÇÕES
// =======================================

async function carregarConfiguracoes() {

    try {

        const resposta = await fetch("config/concursos.json");

        if (!resposta.ok)
            throw new Error("Erro ao carregar concursos.");

        concursos = await resposta.json();

        carregarConcursosQuestoes();
        carregarConcursosEstudos();

    } catch (erro) {

        console.error(erro);

        alert("Erro ao carregar configurações.");

    }

}


// =======================================
// QUESTÕES
// =======================================

function carregarConcursosQuestoes() {

    const select = document.getElementById("select-concurso-q");

    if (!select) return;

    select.innerHTML = `
        <option value="">Selecione um concurso</option>
    `;

    concursos.forEach(concurso => {

        const option = document.createElement("option");

        option.value = concurso.id;

        option.textContent = concurso.nome;

        select.appendChild(option);

    });

}


function atualizarMaterias() {

    const concurso = document.getElementById("select-concurso-q").value;

    const select = document.getElementById("select-materia-q");

    if (!select) return;

    select.innerHTML = `
        <option value="">Selecione a matéria</option>
    `;

    if (!concurso) return;

    const dados = concursos.find(c => c.id === concurso);

    if (!dados) return;

    dados.materias.forEach(materia => {

        const option = document.createElement("option");

        option.value = materia;

        option.textContent = formatarNome(materia);

        select.appendChild(option);

    });

}


// =======================================
// ESTUDOS
// =======================================

function carregarConcursosEstudos() {

    const select = document.getElementById("select-concurso-e");

    if (!select) return;

    select.innerHTML = `
        <option value="">Selecione um concurso</option>
    `;

    concursos.forEach(concurso => {

        const option = document.createElement("option");

        option.value = concurso.id;

        option.textContent = concurso.nome;

        select.appendChild(option);

    });

}


function atualizarTextos() {
    const concurso = document.getElementById("select-concurso-e").value;
    const select = document.getElementById("select-texto");
    
    select.innerHTML = `<option value="">Selecione um texto...</option>`;
    
    if (!concurso) return;

    const dados = concursos.find(c => c.id === concurso);
    
    // IMPORTANTE: Aqui deve ser 'dados.textos' para casar com o seu JSON
    if (!dados || !dados.estudos) return; 

    dados.estudos.forEach(texto => {
        const option = document.createElement("option");
        option.value = texto.id;
        option.textContent = texto.titulo;
        select.appendChild(option);
    });
}


// =======================================
// EVENTOS
// =======================================

document.addEventListener("DOMContentLoaded", () => {

    carregarConfiguracoes();

    document
        .getElementById("select-concurso-q")
        ?.addEventListener("change", atualizarMaterias);

    document
        .getElementById("select-concurso-e")
        ?.addEventListener("change", atualizarTextos);

});