let clickCount = 0
let clicker = document.getElementById('main')

const handleClick = (increment=true) => {
    if (increment) {
        clickCount++;
    }
    
    if (clickCount === 1) {
        clicker.innerText = 'You have clicked 1 time!'
    } else {
        clicker.innerText = `You have clicked ${clickCount} times!`
    }
    
    save()
}

const save = () => {
    localStorage.setItem('clickCount', clickCount)
}

const restore = () => {
    clickCount = Number(localStorage.getItem('clickCount'))
    handleClick(false)
}

const run = () => {
    document.addEventListener('click', handleClick)

    if (localStorage.getItem('clickCount')) {
        restore()
    }
}

run()