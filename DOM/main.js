let li = createElement('li', 'list-group-item', 'Four')

let li2 = createElement('li', 'list-group-item' ,'Five')

let list = document.getElementById('list')
list.appendChild(li)

let list2 = document.getElementById('list')
list.appendChild(li2)

let p1 = createElement('p', 'lead', 'my name is riahan')

let div = createElement('div')

document.getElementsByClassName('container')

function createElement(tagName,className, innerHtml) {
    let tag = document.createElement('tagname')
    tag.innerHTML = innerHtml || ''
    tag.className = className || ''
    return tag
}

// function append(parend, chilren){
//     chilren.forEach(child =>parent.appendChild(child))
// }