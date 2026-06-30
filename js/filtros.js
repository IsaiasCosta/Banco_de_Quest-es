
async function carregarConfiguracoes() {

    try {

        const resposta = await fetch("config/concursos.json");

        if (!resposta.ok)
            throw new Error("Erro ao carregar concursos.");

        concursos = await resposta.json();

        carregarOpcoesDeFiltro();

    } catch (erro) {

        console.error(erro);

        alert("Erro ao carregar configurações.");

    }

}

function carregarOpcoesDeFiltro() {

    const select = document.getElementById("select-concurso");

    select.innerHTML =
        "<option value=''>Selecione um concurso</option>";

    concursos.forEach(concurso => {

        const option = document.createElement("option");

        option.value = concurso.id;

        option.textContent = concurso.nome;

        select.appendChild(option);

    });

}

function atualizarMaterias() {

    const concurso = document.getElementById("select-concurso").value;

    const select = document.getElementById("select-materia");

    select.innerHTML =
        "<option value=''>Selecione a matéria</option>";

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