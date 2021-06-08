let title = document.getElementById('title')

title.style.color = '#f00'
title.style.fontSize = '2.4rem'
title.style.background = "black"

let btn = document.getElementById('btn')

// btn.onclick = function(e){
//     console.log(e)
// }

btn.addEventListener('click', function (e) {
    console.log(e)
})

let box = document.getElementById('box')
box.addEventListener('mousemove', function(e){
    document.getElementById('x-value').innerHTML = e.clientX
    document.getElementById('y-value').innerHTML = e.clientY
})
// console.log(btn)