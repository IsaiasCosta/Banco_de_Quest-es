// O Banco de Dados Completo (Lista de Array de Objetos)
const bancoDeQuestoes = [
    {

        concurso: "Caixa"
    },
    // ==========================================
    // OUTROS CONCURSOS MANTIDOS
   


   {
        concurso: "Banco do Brasil",
        materia: "Conhecimentos Bancários",
        enunciado: "Sobre o Sistema de Pagamentos Instantâneos (PIX), criado pelo Banco Central, é correto afirmar que:",
        alternativas: [
            "A) Funciona apenas em dias úteis, das 06h às 22h.",
            "B) Tem liquidação em tempo real e está disponível 24 horas por dia, 7 dias por semana.",
            "C) É um serviço exclusivo para transferências entre contas do mesmo banco.",
            "D) Substituiu obrigatoriamente as modalidades TED e DOC no mercado."
        ],
        respostaCorreta: 1, 
        explicacao: "O PIX funciona 24/7, com liquidação (transferência do valor) em poucos segundos. Ele não substituiu o TED/DOC obrigatoriamente, sendo apenas mais uma opção."
    },
    {
        concurso: "Banco do Brasil",
        materia: "Língua Portuguesa",
        enunciado: "De acordo com as regras de regência e uso da crase, assinale a alternativa correta:",
        alternativas: [
            "A) O gerente referiu-se à regras antigas do banco.",
            "B) O atendimento é feito de segunda à sexta-feira.",
            "C) Entregamos o contrato à cliente que estava aguardando.",
            "D) O banco está disposto à negociar a dívida."
        ],
        respostaCorreta: 2, 
        explicacao: "A) Incorreta (a singular + palavra plural não tem crase). B) Incorreta (de... a não leva crase, apenas de... para a). D) Incorreta (não se usa crase antes de verbo). C) Correta (Quem entrega, entrega algo A alguém + A cliente)."
    },
    {
        concurso: "Banco do Brasil",
        materia: "Matemática",
        enunciado: "Um cliente obteve um desconto de 15% ao quitar uma dívida antecipadamente. Se o valor original da dívida era de R$ 1.200,00, qual foi o valor pago?",
        alternativas: [
            "A) R$ 1.050,00",
            "B) R$ 1.020,00",
            "C) R$ 1.000,00",
            "D) R$ 1.185,00"
        ],
        respostaCorreta: 1, 
        explicacao: "10% de 1200 é 120. 5% é 60. Logo, 15% é 180. O valor pago foi 1200 - 180 = R$ 1.020,00."
    },
    {
        concurso: "Banco do Brasil",
        materia: "Matemática Financeira",
        enunciado: "O sistema de amortização em que o valor da prestação (parcela) é constante do início ao fim do financiamento é o:",
        alternativas: [
            "A) SAC (Sistema de Amortização Constante)",
            "B) Sistema Misto",
            "C) Tabela Price (Sistema Francês)",
            "D) Sistema Americano"
        ],
        respostaCorreta: 2, 
        explicacao: "Na Tabela Price (Sistema Francês), as prestações são iguais/constantes. No SAC, o que é constante é a Amortização, fazendo a prestação ser decrescente."
    },
    {
        concurso: "Banco do Brasil",
        materia: "Vendas e Negociação",
        enunciado: "A estratégia de marketing de relacionamento e fidelização que busca aumentar a venda oferecendo um produto de valor superior (premium) ao que o cliente pretendia comprar originalmente é chamada de:",
        alternativas: [
            "A) Cross-selling",
            "B) Up-selling",
            "C) Benchmarking",
            "D) Inbound Marketing"
        ],
        respostaCorreta: 1, 
        explicacao: "Up-selling = Vender uma versão mais cara/premium do mesmo produto. Cross-selling = Venda cruzada (oferecer um seguro junto com o cartão)."
    },

    // ==========================================
    // BANCO DO BRASIL - PRIORIDADE MÉDIA/BAIXA
    // ==========================================
    {
        concurso: "Banco do Brasil",
        materia: "Atualidades do Mercado Financeiro",
        enunciado: "A taxa básica de juros da economia brasileira, definida pelo COPOM e que serve de referência para as demais taxas do mercado, é a:",
        alternativas: [
            "A) Taxa CDI",
            "B) Taxa TR",
            "C) Taxa IPCA",
            "D) Taxa Selic"
        ],
        respostaCorreta: 3, 
        explicacao: "A Taxa Selic é a taxa básica de juros da economia brasileira, sendo o principal instrumento de política monetária utilizado pelo Banco Central (via COPOM) para controlar a inflação."
    },
    {
        concurso: "Banco do Brasil",
        materia: "Informática",
        enunciado: "No contexto da segurança da informação, a prática criminosa que consiste em enviar e-mails falsos passando-se por uma instituição confiável (como um banco) para roubar dados do usuário é conhecida como:",
        alternativas: [
            "A) Ransomware",
            "B) Phishing",
            "C) Keylogger",
            "D) Adware"
        ],
        respostaCorreta: 1, 
        explicacao: "Phishing (pescaria) é a técnica de enganar o usuário com mensagens falsas para 'pescar' senhas e dados bancários."
    },
    {
        concurso: "Banco do Brasil",
        materia: "Probabilidade e Estatística",
        enunciado: "Em um conjunto de dados ordenados (ex: idades de clientes), o valor que ocupa a posição central, dividindo a amostra em duas metades iguais, é chamado de:",
        alternativas: [
            "A) Média",
            "B) Mediana",
            "C) Moda",
            "D) Desvio Padrão"
        ],
        respostaCorreta: 1, 
        explicacao: "A Mediana é a medida de tendência central que separa a metade maior da metade menor de uma amostra. A Moda é o valor mais frequente, e a Média é a soma dividida pela quantidade."
    },
    {
        concurso: "Banco do Brasil",
        materia: "Língua Inglesa",
        enunciado: "In a banking context, the term 'loan' translates to:",
        alternativas: [
            "A) Conta Corrente",
            "B) Saque",
            "C) Empréstimo",
            "D) Investimento"
        ],
        respostaCorreta: 2, 
        explicacao: "O termo 'Loan' significa Empréstimo. 'Conta Corrente' é Checking Account, 'Saque' é Withdrawal e 'Investimento' é Investment."
    },

    // ==========================================
    // CAIXA ECONÔMICA (Mantida)
    // ==========================================
    {
        concurso: "Caixa",
        materia: "Conhecimentos Bancários",
        enunciado: "Qual instituição financeira atua como Agente Operador do FGTS?",
        alternativas: [
            "A) Banco do Brasil",
            "B) Banco Central",
            "C) Caixa Econômica Federal"
        ],
        respostaCorreta: 2, 
        explicacao: "A Caixa é a gestora e agente operador do FGTS por lei."
    },

    // ==========================================
    // CAIXA ECONÔMICA FEDERAL - PRIORIDADE ALTA
    // ==========================================
    {
        concurso: "Caixa",
        materia: "Conhecimentos Bancários",
        enunciado: "O Open Finance (Sistema Financeiro Aberto) é uma iniciativa do Banco Central que tem como principal objetivo:",
        alternativas: [
            "A) Centralizar todos os dados financeiros dos cidadãos em um único banco estatal.",
            "B) Permitir o compartilhamento padronizado de dados e serviços por meio de abertura e integração de sistemas (APIs), mediante o consentimento do cliente.",
            "C) Acabar com as tarifas bancárias em todas as instituições financeiras privadas.",
            "D) Substituir o PIX para transferências internacionais."
        ],
        respostaCorreta: 1, 
        explicacao: "O Open Finance permite que os clientes autorizem o compartilhamento de seus dados financeiros entre diferentes instituições, estimulando a concorrência e a oferta de melhores produtos."
    },
    {
        concurso: "Caixa",
        materia: "Tecnologia da Informação",
        enunciado: "No contexto da Lei Geral de Proteção de Dados (LGPD), o dado pessoal sobre origem racial ou étnica, convicção religiosa e dados referentes à saúde ou à vida sexual é classificado como:",
        alternativas: [
            "A) Dado anonimizado.",
            "B) Dado pessoal sensível.",
            "C) Dado público.",
            "D) Dado criptografado."
        ],
        respostaCorreta: 1, 
        explicacao: "A LGPD classifica informações que podem gerar discriminação (saúde, biometria, religião, etnia, política) como 'dados pessoais sensíveis', exigindo maior rigor na sua proteção."
    },
    {
        concurso: "Caixa",
        materia: "Matemática Financeira",
        enunciado: "O conceito de 'Taxas Equivalentes' em juros compostos significa que:",
        alternativas: [
            "A) São taxas que, aplicadas ao mesmo capital inicial durante o mesmo período de tempo, produzem o mesmo montante final.",
            "B) São taxas proporcionais obtidas através da simples divisão ou multiplicação pelo prazo.",
            "C) São taxas definidas anualmente pelo Banco Central para equiparar a inflação.",
            "D) São taxas que geram descontos iguais em sistemas de amortização diferentes."
        ],
        respostaCorreta: 0, 
        explicacao: "Em juros compostos, taxas equivalentes (ex: uma mensal e outra anual) produzem o mesmo montante final se aplicadas sobre o mesmo capital e pelo mesmo tempo total."
    },
    {
        concurso: "Caixa",
        materia: "Língua Portuguesa",
        enunciado: "A crase é o fenômeno da fusão da preposição 'a' com o artigo definido feminino 'a'. Assinale a alternativa onde a crase é obrigatória:",
        alternativas: [
            "A) Entregou o documento a ele.",
            "B) Começou a chover forte.",
            "C) Fomos à agência da Caixa bem cedo.",
            "D) O prêmio será pago a qualquer pessoa."
        ],
        respostaCorreta: 2, 
        explicacao: "Utiliza-se crase porque o verbo 'Fomos' exige a preposição 'a', e 'agência' é um substantivo feminino que admite o artigo 'a'. Não se usa crase antes de verbo (B) ou pronomes (A, D)."
    },

    // ==========================================
    // CAIXA ECONÔMICA FEDERAL - OUTRAS DISCIPLINAS
    // ==========================================
    {
        concurso: "Caixa",
        materia: "Atendimento Bancário",
        enunciado: "A inclusão financeira e a educação financeira no atendimento bancário são importantes porque:",
        alternativas: [
            "A) Aumentam exclusivamente o endividamento da população para gerar lucro ao banco.",
            "B) Visam garantir que os cidadãos tenham acesso a serviços financeiros adequados e compreendam como gerir seus recursos de forma saudável.",
            "C) São obrigações voltadas apenas para clientes de alta renda.",
            "D) Substituem a necessidade de análise de crédito pelo gerente."
        ],
        respostaCorreta: 1, 
        explicacao: "A inclusão e a educação financeira buscam democratizar o acesso a serviços (conta, crédito) e promover o uso consciente do dinheiro, trazendo benefícios tanto para o cliente quanto para a estabilidade do SFN."
    },
    {
        concurso: "Caixa",
        materia: "Ética, Compliance e Governança",
        enunciado: "No ambiente corporativo, o termo 'Compliance' significa:",
        alternativas: [
            "A) A estratégia de marketing para captar novos clientes através de redes sociais.",
            "B) O processo de inovação tecnológica e migração para a computação em nuvem.",
            "C) O conjunto de disciplinas a fim de cumprir e se fazer cumprir as normas legais e regulamentares, além de políticas e diretrizes da instituição.",
            "D) A área de recursos humanos focada exclusivamente na diversidade."
        ],
        respostaCorreta: 2, 
        explicacao: "Compliance vem do verbo inglês 'to comply' (agir de acordo com uma regra). Significa estar em conformidade com leis, regulamentos e códigos de ética da empresa."
    },
    {
        concurso: "Caixa",
        materia: "Vendas e Negociação",
        enunciado: "O momento do 'Pós-venda' em uma instituição bancária é considerado fundamental para:",
        alternativas: [
            "A) Encerrar o relacionamento com o cliente, pois o produto já foi adquirido.",
            "B) Fidelizar o cliente, garantir a satisfação com o produto adquirido e criar oportunidades para novos negócios.",
            "C) Realizar exclusivamente cobranças de clientes inadimplentes.",
            "D) Substituir a necessidade de um bom atendimento inicial."
        ],
        respostaCorreta: 1, 
        explicacao: "O pós-venda foca na retenção e fidelização. Um cliente satisfeito tem maior probabilidade de realizar novas compras (cross-selling/up-selling)."
    },
    {
        concurso: "Caixa",
        materia: "Probabilidade e Estatística",
        enunciado: "Ao lançarmos um dado comum de 6 faces, não viciado, qual é a probabilidade de obtermos um número par?",
        alternativas: [
            "A) 25%",
            "B) 33,3%",
            "C) 50%",
            "D) 75%"
        ],
        respostaCorreta: 2, 
        explicacao: "Um dado tem 6 faces. Três são pares (2, 4, 6) e três são ímpares (1, 3, 5). Probabilidade = Casos Favoráveis (3) / Casos Possíveis (6) = 3/6 = 1/2 = 50%."
    }
];

// --- FIM DO BANCO DE QUESTÕES ---

let questoesFiltradas = [];
let questaoAtual = 0;
let acertos = 0;
let erros = 0;
let respondeu = false;

// O script.js agora busca o arquivo
async function carregarQuestoes(inss) {
    try {
        const resposta = await fetch(`data/${inss}.json`);
        const dados = await resposta.json();
        questoesFiltradas = dados; // Atualiza a lista com o JSON que veio da pasta
        renderizarQuestao();
    } catch (erro) {
        console.error("Erro ao carregar o arquivo:", erro);
    }
}

// Prepara as caixas de seleção automaticamente
function carregarOpcoesDeFiltro() {
    const selectConcurso = document.getElementById("select-concurso");
    // Extrai nomes únicos sem repetição
    const concursosUnicos = [...new Set(bancoDeQuestoes.map(q => q.concurso))];
    
    concursosUnicos.forEach(concurso => {
        const option = document.createElement("option");
        option.value = concurso;
        option.innerText = concurso;
        selectConcurso.appendChild(option);
    });
}

function atualizarMaterias() {
    const concursoSelecionado = document.getElementById("select-concurso").value;
    const selectMateria = document.getElementById("select-materia");
    
    selectMateria.innerHTML = '<option value="todas">Todas as Matérias</option>';

    let questoes = bancoDeQuestoes;
    if (concursoSelecionado !== "todos") {
        questoes = bancoDeQuestoes.filter(q => q.concurso === concursoSelecionado);
    }

    const materiasUnicas = [...new Set(questoes.map(q => q.materia))];
    materiasUnicas.forEach(materia => {
        const option = document.createElement("option");
        option.value = materia;
        option.innerText = materia;
        selectMateria.appendChild(option);
    });
}

function iniciarEstudos() {
    const concursoSelecionado = document.getElementById("select-concurso").value;
    const materiaSelecionada = document.getElementById("select-materia").value;

    // Lógica principal do filtro
    questoesFiltradas = bancoDeQuestoes.filter(q => {
        const matchConcurso = (concursoSelecionado === "todos") || (q.concurso === concursoSelecionado);
        const matchMateria = (materiaSelecionada === "todas") || (q.materia === materiaSelecionada);
        return matchConcurso && matchMateria;
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

// Inicia as configurações quando você abre o HTML
window.onload = () => {
    carregarOpcoesDeFiltro();
    atualizarMaterias();
    // Inicia com todos os concursos já carregados por padrão
    iniciarEstudos();
};