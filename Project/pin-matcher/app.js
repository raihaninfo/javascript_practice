// pin generate
let generatePin = document.getElementById('generate-btn')
let pin = document.getElementById('pin-box')
generatePin.addEventListener('click', () => {
    let random = Math.round(1000 + Math.random() * 9000)
    pin.value = random
})

// pin matching section
let screen = document.getElementById('pin-screen')
button = document.querySelectorAll('.button')
//let screenText = '';
for (items of button) {
    items.addEventListener('click', function (e) {
        let buttonText = e.target.innerHTML
        if (buttonText == 'C') {
            //screenText = '';
            //screenText += buttonText = ''
            //screen.value = screenText
            screen.value = ''
        } else if (buttonText == '&lt;') {
            screen.value = screen.value.slice(0, -1)
        } else {
            //screenText += buttonText
            //screen.value = screenText
            screen.value += buttonText
        }
    })
}