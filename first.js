let timer;
let timeLeft = 100;
let score = 0;
let currentQuestionIndex = 0;
const questions = document.querySelectorAll('.question');

document.addEventListener("DOMContentLoaded", function () {
  startTimer();
  
 
  showQuestion(currentQuestionIndex);

  document.getElementById("submit-btn").addEventListener("click", function () {
    calculateScore();
    showResults();
  });
});

function startTimer() {
  timer = setInterval(function () {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      calculateScore();
      showResults();
    }
  }, 1000);
}

function navigateQuestion(direction) {
 
  questions[currentQuestionIndex].style.display = 'none';
  
 
  currentQuestionIndex += direction;

 
  if (currentQuestionIndex < 0) {
    currentQuestionIndex = 0;
  } else if (currentQuestionIndex >= questions.length) {
    currentQuestionIndex = questions.length - 1;
  }

 
  showQuestion(currentQuestionIndex);
}

function showQuestion(index) {
  questions[index].style.display = 'block';
}

function calculateScore() {
  
}

function showResults() {
    score = 0;

  const answers = {
    q1: "b", 
    q2: "a", 
    q3: "a", 
    q4: "c",
    q5: "b",
    q6: "c",
    q7: "a",
    q8: "b",
  };

  for (let question in answers) {
    const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
    if (userAnswer && userAnswer.value === answers[question]) {
      score++;
    }
  }

  document.getElementById("quiz-container").classList.add("hidden");
  const resultMessage = `You scored ${score} out of ${Object.keys(answers).length}`;
  document.getElementById("score").textContent = resultMessage;
  document.getElementById("results-container").style.display = "block";
}
function submitbtn(){
      showResults();
}