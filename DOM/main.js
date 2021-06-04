let li = document.createElement('li');

li.className = 'list-group-item';
li.innerHTML = 'Four'

let list = document.getElementById('list')

list.appendChild(li)

let pra = document.createElement('div');
pra.innerHTML = 'my name is raihan, i am web developer from bangladesh';

let div = document.getElementById('sec')
div.appendChild(pra)

console.log(pra)