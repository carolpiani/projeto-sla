const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: `Se em 2049 a inteligência artificial pudesse criar obras de arte, como você enxergaria os artistas humanos?`,
    alternativas: [
      {
        texto: "Acreditaria que os artistas humanos seriam substituídos pela IA.",
        afirmacao: "Refletiu sobre como a inteligência artificial pode transformar o mundo artístico e criativo."
      },
      {
        texto: "Acreditaria que a criatividade humana continuaria sendo importante.",
        afirmacao: "Reconhece que a criatividade, a expressão e a originalidade humana possuem grande valor."
      }
    ]
  },
  {
    enunciado: `Se a IA pudesse acompanhar o desenvolvimento das crianças desde o nascimento, você apoiaria essa ideia?`,
    alternativas: [
      {
        texto: "Sim, pois a tecnologia poderia acompanhar tudo.",
        afirmacao: "Percebeu as possibilidades da inteligência artificial no acompanhamento do desenvolvimento humano."
      },
      {
        texto: "Não completamente, pois a convivência humana é fundamental.",
        afirmacao: "Valoriza a importância do afeto, da convivência e do acompanhamento humano."
      }
    ]
  },
  {
    enunciado: `Imagine que em 2049 os livros físicos sejam substituídos por conteúdos produzidos por IA. O que você escolheria?`,
    alternativas: [
      {
        texto: "Preferiria consumir conteúdos criados automaticamente pela IA.",
        afirmacao: "Reconhece que a tecnologia pode transformar as formas de produzir e consumir conhecimento."
      },
      {
        texto: "Defenderia a preservação dos livros e das produções humanas.",
        afirmacao: "Valoriza a cultura, a literatura e a preservação do conhecimento produzido pelas pessoas."
      }
    ]
  },
  {
    enunciado: `Se uma IA pudesse escolher sua profissão com base nas suas habilidades, você aceitaria?`,
    alternativas: [
      {
        texto: "Aceitaria a escolha feita pela inteligência artificial.",
        afirmacao: "Refletiu sobre a possibilidade de utilizar a tecnologia para orientar escolhas profissionais."
      },
      {
        texto: "Preferiria decidir meu próprio futuro profissional.",
        afirmacao: "Valoriza a autonomia e a liberdade individual na construção do próprio futuro."
      }
    ]
  },
  {
    enunciado: `Como você reagiria se a inteligência artificial começasse a influenciar as eleições?`,
    alternativas: [
      {
        texto: "Acreditaria que a IA poderia escolher os melhores representantes.",
        afirmacao: "Percebeu que a inteligência artificial pode influenciar processos políticos e sociais."
      },
      {
        texto: "Defenderia que as escolhas políticas continuassem sendo responsabilidade dos cidadãos.",
        afirmacao: "Reconhece a importância da participação democrática e da autonomia dos cidadãos."
      }
    ]
  },
  {
    enunciado: `Se em 2049 fosse possível conversar com uma versão digital de alguém que já morreu, você utilizaria essa tecnologia?`,
    alternativas: [
      {
        texto: "Sim, pois seria uma oportunidade de manter uma conexão digital.",
        afirmacao: "Refletiu sobre as possibilidades emocionais e tecnológicas das simulações digitais."
      },
      {
        texto: "Não, pois acredito que a memória das pessoas deve ser preservada de outra forma.",
        afirmacao: "Valoriza as memórias, os sentimentos e os limites éticos das tecnologias de simulação."
      }
    ]
  },
  {
    enunciado: `Qual deveria ser a maior prioridade no desenvolvimento da inteligência artificial até 2049?`,
    alternativas: [
      {
        texto: "Criar tecnologias cada vez mais avançadas e independentes.",
        afirmacao: "Reconhece a importância da inovação e do desenvolvimento científico para o futuro."
      },
      {
        texto: "Garantir que os avanços tecnológicos beneficiem toda a humanidade.",
        afirmacao: "Defende que o progresso tecnológico deve estar acompanhado de ética, inclusão e responsabilidade social."
      }
    ]
  }
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }

  const perguntaAtual = perguntas[atual];

  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";

  mostraAlternativas(perguntaAtual);
}

function mostraAlternativas(perguntaAtual) {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document.createElement("button");

    botaoAlternativa.textContent = alternativa.texto;

    botaoAlternativa.addEventListener("click", () => {
      respostaSelecionada(alternativa);
    });

    caixaAlternativas.appendChild(botaoAlternativa);
  }
}

function respostaSelecionada(alternativa) {
  historiaFinal += alternativa.afirmacao + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "Em 2049...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

mostraPergunta();

