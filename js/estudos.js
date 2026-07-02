// =====================================
// ESTUDOS
// =====================================

let textoAtual = null;
let concursoAtual = null;

// =====================================
// ABRIR TEXTO
// =====================================

async function iniciarEstudos() {

    concursoAtual =
        document.getElementById("select-concurso-e").value;

    textoAtual =
        document.getElementById("select-texto").value;

    if (!concursoAtual || !textoAtual) {

        alert("Selecione um concurso e um texto.");

        return;

    }

    try {

        const resposta = await fetch(
            `data/${concursoAtual}/estudos/${textoAtual}.json`
        );

        if (!resposta.ok)
            throw new Error();

        const estudo =
            await resposta.json();

        document.getElementById("titulo-estudo").innerText =
            estudo.titulo;

        document.getElementById("conteudo-estudo").innerHTML =
            estudo.conteudo;

        mostrarEstudos();

    }

    catch {

        alert("Material de estudo não encontrado.");

    }

}

// =====================================
// RESOLVER QUESTÕES DO TEXTO
// =====================================

function resolverQuestoesTexto() {

    if (!concursoAtual || !textoAtual) {

        alert("Abra um texto primeiro.");

        return;

    }

    iniciarQuestoesTexto(
        concursoAtual,
        textoAtual
    );

}

// =====================================
// LIMPAR ESTUDO
// =====================================

function limparEstudo() {

    textoAtual = null;

    concursoAtual = null;

    document.getElementById("titulo-estudo").innerText =
        "Área de Estudos";

    document.getElementById("conteudo-estudo").innerHTML =
        "Escolha um texto para iniciar.";

}