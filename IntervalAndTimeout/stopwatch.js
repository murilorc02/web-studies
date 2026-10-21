const timer = document.querySelector('#timer');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const resetButton = document.querySelector('#reset');

pauseButton.disabled = true;
resetButton.disabled = true;

let seconds = 0;
let counting = 0;

function countTimer(state) {
    if (!counting) {
        counting = setInterval(function () {
            seconds++;
            updateTimer(seconds);
        }, 1000);

        pauseButton.disabled = false;
        startButton.classList.add('startToggled');
        resetButton.disabled = false;
        timer.classList.remove('paused');
    }
}

function updateTimer(seconds) {
    const date = new Date(seconds * 1000);
    timer.textContent = date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

startButton.addEventListener('click', function (e) {
    paused = 0;
    countTimer('run');
})

pauseButton.addEventListener('click', function (e) {
    clearInterval(counting);
    counting = 0;

    pauseButton.classList.add('pauseToggled');
    pauseButton.disabled = true;
    timer.classList.add('paused');
})

resetButton.addEventListener('click', function (e) {
    seconds = 0;
    clearInterval(counting);
    counting = 0;
    updateTimer(0);

    timer.classList.remove('paused');
    pauseButton.disabled = true;
    resetButton.disabled = true;
})