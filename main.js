// Variable instatiation
let clickCount = 0;
let clicker = document.getElementById('main');
let resetBtn = document.getElementById('reset');
let highScore = 0;
let highScoreDisplay = document.getElementById('highScore');

let rgbArray = ['g', 'b', 'r', 'gr', 'rr', 'br'];
let rgbVal = 0;
let rgbIdx = 0;
let rgbMax = 255;
let updateAmount = 5;

// Functions
const handleClick = (increment=true) => {
    if (increment) {
        clickCount++;
        updateRgb();
    }
    
    if (clickCount === 1) {
        clicker.innerText = 'You have clicked 1 time!';
    } else {
        clicker.innerText = `You have clicked ${clickCount} times!`;
    }

    if (clickCount > highScore) {
        updateHighScore(true);
    }
    
    changeColor();
    save();
}

const save = () => {
    localStorage.setItem('clickCount', clickCount);
    localStorage.setItem('highScore', highScore);
    localStorage.setItem('rgbVal', rgbVal);
    localStorage.setItem('rgbIdx', rgbIdx);
}

const restore = () => {
    clickCount = Number(localStorage.getItem('clickCount'));
    highScore = Number(localStorage.getItem('highScore'));
    rgbVal = Number(localStorage.getItem('rgbVal'));
    rgbIdx = Number(localStorage.getItem('rgbIdx'));

    handleClick(false);
    updateHighScore(false);
}

const resetScore = () => {
    clickCount = -1;
    rgbIdx = 0;
    rgbVal = -updateAmount;
    handleClick(false);
}

const updateHighScore = larger => {
    if (larger) { highScore = clickCount }
    highScoreDisplay.innerText = `High Score: ${highScore}`
}

const changeColor = () => {
    if (rgbArray[rgbIdx] === 'g') {
        document.body.style.backgroundColor = `rgb(0, ${rgbVal}, 0)`;
    } else if (rgbArray[rgbIdx] === 'b') {
        document.body.style.backgroundColor = `rgb(0, 255, ${rgbVal})`;
    } else if (rgbArray[rgbIdx] === 'r') {
        document.body.style.backgroundColor = `rgb(${rgbVal}, 255, 255)`;
    } else if (rgbArray[rgbIdx] === 'gr') {
        document.body.style.backgroundColor = `rgb(255, ${rgbVal}, 255)`;
    } else if (rgbArray[rgbIdx] === 'rr') {
        document.body.style.backgroundColor = `rgb(${rgbVal}, 0, 255)`;
    } else if (rgbArray[rgbIdx] === 'br') {
        document.body.style.backgroundColor = `rgb(0, 0, ${rgbVal})`;
    }
}

const updateRgb = () => {
    if (rgbIdx < 3) {
        rgbVal += updateAmount;
    } else {
        rgbVal -= updateAmount;
    }

    if (rgbVal > rgbMax) {
        rgbIdx = (rgbIdx + 1) % rgbArray.length;
        updateRgbVal();
    } else if (rgbVal < 0) {
        rgbIdx = (rgbIdx + 1) % rgbArray.length;
        updateRgbVal();
    }
}

const updateRgbVal = () => {
    if (rgbIdx < 3) {
        rgbVal = 0;
    } else {
        rgbVal = rgbMax;
    }
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