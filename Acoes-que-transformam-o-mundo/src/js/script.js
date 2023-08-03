const quizData = [
  {
    question: "Quais são as chaves para resolver importantes desafios globais?",
    choices: [
      "Tecnologia inovadora",
      "Responsabilidade Social Corporativa",
      "Educação para todos e desenvolvimento sustentável"
    ],
    correct: "Educação para todos e desenvolvimento sustentável",
  },
  {
    question: "Por que quebrar o ciclo da pobreza por meio da educação?",
    choices: [
      "A educação é uma ferramenta poderosa para quebrar o ciclo da pobreza",
      "A educação não tem efeito na redução da pobreza",
      "A pobreza não pode ser resolvida através da educação"
    ],
    correct: "A educação é uma ferramenta poderosa para quebrar o ciclo da pobreza",
  },
  {
    question: "Quais fontes de energia renovável são mencionadas no texto?",
    choices: [
      "Energia solar e eólica",
      "Energia nuclear e hidrelétrica",
      "Energia de carvão e gás natural"
    ],
    correct: "Energia solar e eólica",
  },
  {
    question: "Qual é o objetivo de proteger o meio ambiente?",
    choices: [
      "Proporcionar um lar bonito e saudável para as gerações futuras",
      "Desesperados para promover o desenvolvimento econômico",
      "Melhorar a eficiência energética, aumentar a poluição"
    ],
    correct: "Proporcionar um lar bonito e saudável para as gerações futuras",
  },
  {
    question: "O que é igualdade de gênero?",
    choices: [
      "Discriminação de gênero e desigualdade de oportunidades",
      "Garantir a igualdade de oportunidades e direitos, independentemente do sexo",
      "A igualdade de gênero não é importante para o progresso social"
    ],
    correct: "Garantir a igualdade de oportunidades e direitos, independentemente do sexo",
  },
  {
    question: "Qual o papel das empresas no desenvolvimento social?",
    choices: [
      "Buscar apenas ganho econômico",
      "Assumir responsabilidade social e ambiental",
      "Promover apenas o desenvolvimento pessoal"
    ],
    correct: "Assumir responsabilidade social e ambiental",
  },
  {
    question: "O que o voluntariado e a solidariedade contribuem para a sociedade?",
    choices: [
      "Pouco impacto na sociedade",
      "É uma forma importante de alcançar a harmonia social",
      "Criar divisão e desunião na sociedade"
    ],
    correct: "É uma forma importante de alcançar a harmonia social",
  },
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElements = document.querySelectorAll(".choice-btn");
const scoreElement = document.getElementById("score");
const questionCountElement = document.getElementById("question-count");

function showQuestion() {
  const currentQuestionData = quizData[currentQuestion];
  questionElement.textContent = currentQuestionData.question;

  for (let i = 0; i < choicesElements.length; i++) {
    choicesElements[i].textContent = currentQuestionData.choices[i];
    choicesElements[i].addEventListener("click", handleChoiceClick);
  }

  questionCountElement.textContent = `Pergunta ${currentQuestion + 1} de ${quizData.length}`;
}

function handleChoiceClick(event) {
  const selectedChoice = event.target.textContent;
  const correctChoice = quizData[currentQuestion].correct;

  if (selectedChoice === correctChoice) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  questionElement.textContent = "Quiz concluído!";
  for (let i = 0; i < choicesElements.length; i++) {
    choicesElements[i].style.display = "none";
  }
  scoreElement.textContent = `Você acertou ${score} de ${quizData.length} perguntas.`;
  questionCountElement.style.display = "none";
}


showQuestion();