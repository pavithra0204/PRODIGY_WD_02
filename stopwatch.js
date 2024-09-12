// Stopwatch variables
let timer;
let isRunning = false;
let time = 0;

// Get display and buttons
const display = document.getElementById('display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

// Start button
startButton.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTime, 1000);
    }
});

// Pause button
pauseButton.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
});

// Reset button
resetButton.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    time = 0;
    displayTime();
});

// Update the time display every second
function updateTime() {
    time++;
    displayTime();
}

// Format and display the time
function displayTime() {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    display.textContent = ${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)};
}

// Format time to always show two digits
function formatTime(time) {
    return time < 10 ? 0${time} : time;
}