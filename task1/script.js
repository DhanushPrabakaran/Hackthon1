class Stopwatch {
    constructor() {
        this.milliseconds = 0;
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.timer = null;
        this.lapCount = 0;
    
        this.hoursDisplay = document.getElementById('hr');
        this.minutesDisplay = document.getElementById('min');
        this.secondsDisplay = document.getElementById('sec');
        this.millisecondsDisplay = document.getElementById('count');
        this.startBtn = document.getElementById('start-btn');
        this.stopBtn = document.getElementById('stop-btn');
        this.resetBtn = document.getElementById('reset-btn');
        this.lapBtn = document.getElementById('lap-btn');
        this.lapTimesList = document.getElementById('laps');
        
        this.startBtn.addEventListener('click', () => this.start());
        this.stopBtn.addEventListener('click', () => this.stop());
        this.resetBtn.addEventListener('click', () => this.reset());
        this.lapBtn.addEventListener('click', () => this.recordLap());
    }
    
    updateTimeDisplay() {
        this.hoursDisplay.innerText = String(this.hours).padStart(2, '0');
        this.minutesDisplay.innerText = String(this.minutes).padStart(2, '0');
        this.secondsDisplay.innerText = String(this.seconds).padStart(2, '0');
        this.millisecondsDisplay.innerText = String(Math.floor(this.milliseconds / 10)).padStart(2, '0');
    }
   
    start() {
        if (this.timer !== null) return;
        this.timer = setInterval(() => {
            this.milliseconds += 10;
            if (this.milliseconds >= 1000) {
                this.milliseconds = 0;
                this.seconds += 1;
            }
            if (this.seconds >= 60) {
                this.seconds = 0;
                this.minutes += 1;
            }
            if (this.minutes >= 60) {
                this.minutes = 0;
                this.hours += 1;
            }
            this.updateTimeDisplay();
        }, 10);
        this.startBtn.disabled = true;
        this.stopBtn.disabled = false;
        this.resetBtn.disabled = false;
        this.lapBtn.disabled = false;
    }
    
    stop() {
        clearInterval(this.timer);
        this.timer = null;
        this.startBtn.disabled = false;
        this.stopBtn.disabled = true;
    }
    
    reset() {
        this.stop();
        this.milliseconds = 0;
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.updateTimeDisplay();
        this.resetBtn.disabled = true;
        this.lapBtn.disabled = true;
        this.lapCount = 0;
        this.lapTimesList.innerHTML = ''; 
    }
    
    recordLap() {
        this.lapCount++;
        const lapTime = `${String(this.hours).padStart(2, '0')}:${String(this.minutes).padStart(2, '0')}:${String(this.seconds).padStart(2, '0')}:${String(Math.floor(this.milliseconds / 10)).padStart(2, '0')}`;
        
        const lapCard = document.createElement('div');
        lapCard.classList.add('lap-card'); 
        lapCard.innerHTML = `<strong>Lap ${this.lapCount}:</strong> ${lapTime}`;
        
        this.lapTimesList.appendChild(lapCard);
    }
}

const stopwatch = new Stopwatch();







