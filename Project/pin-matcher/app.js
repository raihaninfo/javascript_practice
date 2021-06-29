// pin generate
const generatePin = document.getElementById('generate-btn')
const pin = document.getElementById('pin-box')
const tryNum = document.getElementById('try')
const notMatched = document.getElementById('dont-match-msg')
const matched = document.getElementById('match-msg')
const screen = document.getElementById('pin-screen')
const button = document.querySelectorAll('.button')
const submitBtn = document.querySelector('.submit-btn')


generatePin.addEventListener('click', () => {
    let random = Math.round(1000 + Math.random() * 9000)
    pin.value = random

    tryNum.innerHTML = 3

    screen.value = ''

    submitBtn.classList.remove('disabled-btn')
    for (item of button)
        item.classList.remove('disabled-btn')
})

// pin matching section
for (items of button) {
    items.addEventListener('click', function (e) {
        let buttonText = e.target.innerHTML
        if (buttonText == 'C') {
            screen.value = ''
        } else if (buttonText == '&lt;') {
            screen.value = screen.value.slice(0, -1)
        } else {
            screen.value += buttonText
        }
    })
}

submitBtn.addEventListener('click', e => {
    if (screen.value === pin.value) {
        matched.style.display = 'block'
        notMatched.style.display = 'none'
    } else {
        notMatched.style.display = 'block'
        matched.style.display = 'none'
        tryNum.innerHTML > 0 && (tryNum.innerHTML -= 1)
        if (tryNum.innerHTML === '0') {
            e.target.classList.add('disabledbtn')
            for (item of button)
                item.classList.add('disabledbtn')
        }
    }
})