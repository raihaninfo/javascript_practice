// pin generate
let generatePin = document.getElementById('generate-btn')
let pin = document.getElementById('pin-box')
generatePin.addEventListener('click', () => {
    let random = Math.round(1000 + Math.random() * 9000)
    pin.value = random
})