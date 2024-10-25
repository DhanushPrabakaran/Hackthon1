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
const resultDiv = document.getElementById("result");

window.addEventListener("load", datafeed());
Form.addEventListener("submit", logSubmit);

function datafeed() {
  let quizHTML = "";
  data.forEach((item, index) => {
    quizHTML += `
            <div class="flex flex-col mb-4">
                <label for="q${index + 1}" class="text-lg text-gray-800 mb-2">
                    ${index + 1}. ${item.question}
                </label>
        `;
    item.options.forEach((option, i) => {
      quizHTML += `
                <div class="flex items-center space-x-4">
                    <input type="radio" id="q${index + 1}a${i}" name="q${
        index + 1
      }" value="${option}" class="mr-2">
                    <label for="q${index + 1}a${i}" class="text-gray-700">
                        ${String.fromCharCode(97 + i)}) ${option}
                    </label>
                </div>
            `;
    });
    quizHTML += `</div>`;
  });
  quizForm.innerHTML = quizHTML;
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

  // Show the result section by removing the 'hidden' class
  resultDiv.classList.remove("hidden");

  Title.textContent = "Quiz Result";
  Score.textContent = `${score}/${data.length}`;
  Feedback.textContent = `"${feedbackres[score]}"`;
}

function shuffle() {
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }
  datafeed();
}
