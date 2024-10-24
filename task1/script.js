let milliseconds = 0, seconds = 0, minutes = 0, hours = 0;
let timer = null;

const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

function updateTimeDisplay() {
    let formattedHours = String(hours).padStart(2, '0');
    let formattedMinutes = String(minutes).padStart(2, '0');
    let formattedSeconds = String(seconds).padStart(2, '0');
    let formattedMilliseconds = String(Math.floor(milliseconds / 10)).padStart(2, '0');  // Display hundredths of a second

    timeDisplay.innerText = `${formattedHours}:${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
}

function startTimer() {
    if (timer !== null) return;

    timer = setInterval(() => {
        milliseconds += 10;
        if (milliseconds >= 1000) {
            milliseconds = 0;
            seconds += 1;
        }
        if (seconds >= 60) {
            seconds = 0;
            minutes += 1;
        }
        if (minutes >= 60) {
            minutes = 0;
            hours += 1;
        }
        updateTimeDisplay(); 
    }, 10);

    startBtn.disabled = true;
    stopBtn.disabled = false; 
    resetBtn.disabled = false; 
}

function stopTimer() {
    clearInterval(timer);
    timer = null;  
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function resetTimer() {
    stopTimer(); 
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateTimeDisplay(); 
    resetBtn.disabled = true;
}


startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
