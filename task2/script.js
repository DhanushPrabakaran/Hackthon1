const data = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Markup Language",
      "Hyperlink and Text Markup Language",
      "High-level Text Markup Language",
    ],
    correct_answer: "Hyper Text Markup Language",
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-size", "text-size", "font-style", "text-style"],
    correct_answer: "font-size",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    correct_answer: "Cascading Style Sheets",
  },
  {
    question: "Which of the following is a JavaScript framework?",
    options: ["React", "Django", "Ruby on Rails", "Flask"],
    correct_answer: "React",
  },
  {
    question: "What is the purpose of the <head> tag in HTML?",
    options: [
      "To define the main content of the page",
      "To link external resources like CSS and JavaScript",
      "To create a footer section",
      "To display images",
    ],
    correct_answer: "To link external resources like CSS and JavaScript",
  },
];

const feedbackres = [
  "Well, this is a bold statement! You’ve managed to completely avoid all correct answers—truly an impressive level of consistency. Maybe coding isn’t your calling, but at least you're really good at finding the wrong path!",
  "Well, someone clearly tried! It's nice to see such… *creative* interpretations of syntax. Maybe code isn’t your best friend, but hey, practice makes… fewer errors.",
  "At least you got a couple right. I can see you understand *some* of the basics… or perhaps just have a knack for educated guessing. Either way, points for effort!",
  "You’ve hit the ‘could be worse, could be better’ zone. Some solid answers mixed with a sprinkle of uncertainty. Maybe next time, flip fewer mental coins?",
  "So close! Looks like you know your stuff, or you're just excellent at pretending. Either way, impressive… but we’re still not giving out bonus points for *almost*.",
  "Wow, look at that—a perfect score! Either you're a coding genius, or you've mastered the fine art of multiple-choice strategy. Kudos, though—we might actually trust you with a codebase now!",
];

const Form = document.getElementById("quizForm");
const quizForm = document.getElementById("questions");
const Score = document.getElementById("score");
const Feedback = document.getElementById("feedback");
const Title = document.getElementById("title");
const resultModal = document.getElementById("resultModal");

// function
window.addEventListener("load", () => {
  datafeed();
});
Form.addEventListener("submit", logSubmit);

function saveAnswer(questionIndex, answer) {
  localStorage.setItem(`question${questionIndex}`, answer);
}

function loadSavedAnswers() {
  data.forEach((item, index) => {
    const savedAnswer = localStorage.getItem(`question${index}`);
    if (savedAnswer) {
      const option = document.querySelector(
        `input[name="q${index + 1}"][value="${savedAnswer}"]`
      );
      if (option) {
        option.checked = true;
      }
    }
  });
}

function clearSavedAnswers() {
  data.forEach((_, index) => {
    localStorage.removeItem(`question${index}`);
  });
}

function datafeed() {
  let quizHTML = "";
  data.forEach((item, index) => {
    quizHTML += `
      <div class="flex flex-col mb-4">
        <label for="q${index + 1}" class="text-2xl text-gray-100 mb-2">
          ${index + 1}. ${item.question}
        </label>
    `;
    item.options.forEach((option, i) => {
      quizHTML += `
        <div class="flex items-center space-x-4">
          <input type="radio" id="q${index + 1}a${i}" name="q${
        index + 1
      }" value="${option}"
            class="mr-2" onchange="saveAnswer(${index}, '${option}')" required>
          <label for="q${index + 1}a${i}" class="text-gray-200 text-lg">
            ${String.fromCharCode(97 + i)}) ${option}
          </label>
        </div>
      `;
    });
    quizHTML += `</div>`;
  });
  quizForm.innerHTML = quizHTML;
  loadSavedAnswers();
}
function logSubmit(event) {
  event.preventDefault();
  let score = 0;

  data.forEach((item, index) => {
    const userans = document.querySelector(
      `input[name="q${index + 1}"]:checked`
    );
    if (userans && userans.value === item.correct_answer) {
      score++;
    }
  });

  Title.textContent = "Quiz Result";
  Score.textContent = `${score}/${data.length}`;
  Feedback.textContent = `"${feedbackres[score]}"`;

  resultModal.classList.remove("hidden");

  clearSavedAnswers();
  Form.reset();
}

function shuffle() {
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }
  datafeed();
  clearSavedAnswers();
}

function closeModal() {
  resultModal.classList.add("hidden");
}

var sec = 15;
var time = setInterval(myTimer, 1000);

function myTimer() {
  document.getElementById("timer").innerHTML = sec + "sec left";
  sec--;
  if (sec == -1) {
    clearInterval(time);
    let score = 0;

    data.forEach((item, index) => {
      const userans = document.querySelector(
        `input[name="q${index + 1}"]:checked`
      );
      if (userans && userans.value === item.correct_answer) {
        score++;
      }
    });

    Title.textContent = "Quiz Result";
    Score.textContent = `${score}/${data.length}`;
    Feedback.textContent = `"${feedbackres[score]}"`;

    resultModal.classList.remove("hidden");

    clearSavedAnswers();
    Form.reset();
  }
}
