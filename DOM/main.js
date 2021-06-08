let title = document.getElementById('title')

title.style.color = '#f00'
title.style.fontSize = '2.4rem'
title.style.background = "black"

let btn = document.getElementById('btn')

// btn.onclick = function(e){
//     console.log(e)
// }
let list = document.getElementById('list')


btn.addEventListener('click', function (e) {
    let item = list.lastElementChild.cloneNode(true)
    item.innerHTML = 'Newly Created Item'
    list.appendChild(item)
})


let box = document.getElementById('box')
box.addEventListener('mousemove', function (e) {
    document.getElementById('x-value').innerHTML = e.clientX
    document.getElementById('y-value').innerHTML = e.clientY
    if (e.clientY == 400 || e.clientX == 400) {
        alert('Your position 400')
    }
})


// remove list in click
list.addEventListener('click', function (e) {
    if (this.contains(e.target)) {
        e.target.remove()
    }
})



// console.log(btn)