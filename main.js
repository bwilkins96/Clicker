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
let updateAmount = 15;

// Game logic functions
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

// Background changing functions
const changeColor = () => {
    let style = document.body.style;
    let rgb = '';

    if (rgbArray[rgbIdx] === 'g') {
        rgb = `rgb(0, ${rgbVal}, 0)`;
    } else if (rgbArray[rgbIdx] === 'b') {
        rgb = `rgb(0, ${rgbMax}, ${rgbVal})`;
    } else if (rgbArray[rgbIdx] === 'r') {
        rgb = `rgb(${rgbVal}, ${rgbMax}, ${rgbMax})`;
    } else if (rgbArray[rgbIdx] === 'gr') {
        rgb = `rgb(${rgbMax}, ${rgbVal}, ${rgbMax})`;
    } else if (rgbArray[rgbIdx] === 'rr') {
        rgb = `rgb(${rgbVal}, 0, ${rgbMax})`;
    } else if (rgbArray[rgbIdx] === 'br') {
        rgb = `rgb(0, 0, ${rgbVal})`;
    }

    style.backgroundColor = rgb;
    console.log(rgbIdx);
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

const textColorCorrection = () => {
    let style = document.body.style;

    if (rgbIdx < 3) {

    } else {

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