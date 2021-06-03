let list = document.getElementById('list')
console.log(list)

// let parent = list.parentElement
// console.log(parent)

// let children = list.children
// console.log(children)

// let li = document.querySelector('li')
// console.log(li)

// console.log(list.firstElementChild)
// console.log(list.lastElementChild)

let listitem = document.getElementsByTagName('li')

// let listitems = Array.from(listitem)
let listitems = [...listitem]

listitems.forEach((li, ind)=>{
    let text = li.innerHTML
    li.innerHTML= `(${ind + 1}) ${text}`
})