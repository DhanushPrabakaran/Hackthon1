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

const Form = document.getElementById("quizForm");
const quizForm = document.getElementById("questions");

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
window.addEventListener("load", datafeed());

function logSubmit(event) {
  log.textContent = `Form Submitted! Timestamp: ${event.timeStamp}`;
  event.preventDefault();
}

const form = document.getElementById("form");
const log = document.getElementById("log");
Form.addEventListener("submit", logSubmit);

function shuffle() {
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }
  datafeed();
}
