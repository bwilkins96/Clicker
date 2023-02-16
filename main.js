// Variable instatiation
let clickCount = 0;
let clicker = document.getElementById('main');
let resetBtn = document.getElementById('reset');
let highScore = 0;
let highScoreDisplay = document.getElementById('highScore');

// Functions
const handleClick = (increment=true) => {
    if (increment) {
        clickCount++;
    }
    
    if (clickCount === 1) {
        clicker.innerText = 'You have clicked 1 time!';
    } else {
        clicker.innerText = `You have clicked ${clickCount} times!`;
    }

    if (clickCount > highScore) {
        updateHighScore(true);
    }
    
    save();
}

const save = () => {
    localStorage.setItem('clickCount', clickCount);
    localStorage.setItem('highScore', highScore);
}

const restore = () => {
    clickCount = Number(localStorage.getItem('clickCount'));
    highScore = Number(localStorage.getItem('highScore'));
    handleClick(false);
    updateHighScore(false)
}

const resetScore = () => {
    clickCount = -1;
    handleClick(false);
}

const updateHighScore = larger => {
    if (larger) { highScore = clickCount }
    highScoreDisplay.innerText = `High Score: ${highScore}`
}

// Main program function
const run = () => {
    document.addEventListener('click', handleClick);
    resetBtn.addEventListener('click', resetScore);

    if (localStorage.getItem('clickCount')) {
        restore();
    }
}

run();