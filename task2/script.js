const data=[
    {
        "question": "What does HTML stand for?",
        "options": [
            "Hyper Text Markup Language",
            "High Text Markup Language",
            "Hyperlink and Text Markup Language",
            "High-level Text Markup Language"
        ],
        "correct_answer": "Hyper Text Markup Language"
    },
    {
        "question": "Which CSS property controls the text size?",
        "options": [
            "font-size",
            "text-size",
            "font-style",
            "text-style"
        ],
        "correct_answer": "font-size"
    },
    {
        "question": "What does CSS stand for?",
        "options": [
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets"
        ],
        "correct_answer": "Cascading Style Sheets"
    },
    {
        "question": "Which of the following is a JavaScript framework?",
        "options": [
            "React",
            "Django",
            "Ruby on Rails",
            "Flask"
        ],
        "correct_answer": "React"
    },
    {
        "question": "What is the purpose of the <head> tag in HTML?",
        "options": [
            "To define the main content of the page",
            "To link external resources like CSS and JavaScript",
            "To create a footer section",
            "To display images"
        ],
        "correct_answer": "To link external resources like CSS and JavaScript"
    }
]

window.addEventListener('load',()=>{
    const quizForm = document.getElementById('quizForm');
    data.forEach((item, index) => {
        const question = `<div class="flex flex-col mb-4">
                                <label for="q1" class="text-lg text-gray-800 mb-2">
                            
                                
                                </label>

                        </div>`


        // const questionDiv = document.createElement('div');
        // questionDiv.classList.add('flex', 'flex-col', 'mb-4');

        // const label = document.createElement('label');
        // label.textContent = `${index + 1}. ${item.question}`;
        // label.classList.add('text-lg', 'text-gray-800', 'mb-2');
        // questionDiv.appendChild(label);

        item.options.forEach((option, i) => {
            const optionDiv = document.createElement('div');
            optionDiv.classList.add('flex', 'items-center', 'space-x-4');

            const input = document.createElement('input');
            input.type = 'radio';
            input.id = `q${index + 1}a${i}`;
            input.name = `q${index + 1}`;
            input.value = option;
            input.classList.add('mr-2');
            optionDiv.appendChild(input);

            const optionLabel = document.createElement('label');
            optionLabel.htmlFor = input.id;
            optionLabel.classList.add('text-gray-700');
            optionLabel.textContent = `${String.fromCharCode(97 + i)}) ${option}`;
            optionDiv.appendChild(optionLabel);

            questionDiv.appendChild(optionDiv);
        });

        quizForm.appendChild(questionDiv);
    });
})
