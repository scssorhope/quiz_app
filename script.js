const quizData = [
  {
    question: "When will Indonesian get independence?",
    a: "17 August",
    b: "15 August",
    c: "14 August",
    d: "16 August",
    correct: "a",
  },
  {
    question: "What is the most used programming language in 2021?",
    a: "Java",
    b: "Python",
    c: "JavaScript",
    d: "C",
    corret: "b",
  },
  {
    question: "Who is he President of Indonesian?",
    a: "Joko Widodo",
    b: "Prabowo Sugianto",
    c: "Luhut Panjaitan",
    d: "Susi Pudjiastuti",
    correct: "a",
  },
  {
    question: "What does css stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Natation",
    d: "Helicopters Terminal Motoboarts",
    correct: "b",
  },
  {
    question: "What year was JavaScript Launched?",
    a: "1994",
    b: "1995",
    c: "1996",
    d: "None of the above",
    correct: "d",
  },
];

const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  console.log(answer);

  if (answer) {
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      // Show Results
      alert("Your Finish");
    }
  }
});
