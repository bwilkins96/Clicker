let clickCount = 0
let clicker = document.getElementById('main')

const handleClick = () => {
    clickCount++;

    console.log('hey!')

    if (clickCount === 1) {
        clicker.innerText = 'You have clicked 1 time!'
    } else {
        clicker.innerText = `You have clicked ${clickCount} times!`
    }  
}

const run = () => {
    document.addEventListener('click', handleClick)
}

run()