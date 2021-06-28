// pin generate
let generatePin = document.getElementById('generate-btn')
let pin = document.getElementById('pin-box')
generatePin.addEventListener('click', () => {
    let random = Math.round(1000 + Math.random() * 9000)
    pin.value = random
})


let screen = document.getElementById('pin-screen')
button = document.querySelectorAll('.button')
let screenText = '';
for (items of button) {
    items.addEventListener('click', function (e) {
        let buttonText = e.target.innerHTML
        if (buttonText == 'C') {
            screenText = '';
            screenText += buttonText = ''
            screen.value = screenText
        } else if (buttonText == '&lt;') {
            
        } else {
            screenText += buttonText
            screen.value = screenText
        }
    })
}