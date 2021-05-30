// title : to do aplication js dom
// 

// select element 
let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoul = document.querySelector('#items')
let completeUl = document.querySelector('.complete-list ul');

// function
let createTask = function (task) {
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkBox.type = 'checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

let addTask = function (event) {
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoul.appendChild(listItem);
    newTask.value = "";
    // bind 
    bindInCompleteItem(listItem, completeTask)
}

let completeTask = function () {
    let listItem = this.parentNode;
    let deletebtn = document.createElement('button');
    deletebtn.innerText = 'Delete';
    deletebtn.className = 'delete';
    listItem.appendChild(deletebtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUl.appendChild(listItem);
    // bine
    bindCompleteItem(listItem, deleteTask);
}

let deleteTask = function () {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

let bindInCompleteItem = function (taskItem, checkBoxClick) {
    let checkBox = taskItem.querySelector('input[type="checkbox"');
    checkBox.onchange = checkBoxClick;
}

let bindCompleteItem = function (taskItem, deletebuttonClick) {
    let deleteButton = taskItem.querySelector(".delete");
    deleteButton.onclick = deletebuttonClick;
}

for (let i = 0; i < todoul.children.length; i++) {
    bindInCompleteItem(todoul.children[i], completeTask);
}

for (let i = 0; i < completeUl.children.length; i++) {
    bindCompleteItem(completeUl.children[i], deleteTask);
}

form.addEventListener('submit', addTask)