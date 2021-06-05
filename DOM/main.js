function createEl(tagName, className2, innarHtml) {
    let tag = document.createElement(tagName)
    tag.className = className2
    tag.innerHTML = innarHtml
    return tag
}

let four = createEl('ul', 'list-group-item', 'Four')
let five = createEl('ul', 'list-group-item', 'Five')
let six = createEl('ul', 'list-group-item', 'Six')


let ptag = createEl('p', 'text-center', 'my name is raihan')


let list = document.getElementById('list')
list.appendChild(four)
list.appendChild(five)
list.appendChild(six)


setTimeout(() => {
    list.lastChild.style.background = 'red';
    list.lastChild.style.color = 'black';
}, 5000);