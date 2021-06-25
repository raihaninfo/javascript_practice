let header = document.querySelector('h2');
let span = document.getElementById('span')

header.addEventListener('click', function (e) {
    console.log('Click hoyse re...')
    span.innerHTML = 'ey tumi click korle kano ?'
})

let body = document.getElementById('body')



let btn = document.getElementById('btn')
let btn2 = document.getElementById('btn2')

btn.addEventListener('click', function () {
    body.style.backgroundColor = 'black';
    body.style.color = 'white'
})

btn2.addEventListener('click', function () {
    body.style.backgroundColor = 'white';
    body.style.color = 'black'
})
