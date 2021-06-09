let Name = document.getElementById('name')
Name.addEventListener('keypress', function (event) {
    if (event.key == 'Enter') {
        document.getElementById('showName').innerHTML = `Your Name is : ${event.target.value}`
        event.target.value = ''
    }
})

let skills = document.getElementsByName('skills');
let result = document.getElementById('result');

let checkedSkills = [];
[...skills].forEach(skill => {
    skill.addEventListener('change', function (event) {
        if (event.target.checked) {
            checkedSkills.push(event.target.value)
            outputSkills(result, checkedSkills)
        } else {
            let ind = checkedSkills.indexOf(event.target.value)
            checkedSkills.splice(ind, 1)
            outputSkills(result, checkedSkills)
        }
    })
})

// output print
function outputSkills(parent, skills) {
    let result = ''
    skills.forEach((skill, index) => {
        result += `(${index + 1 })   ${skill}   `
    })
    parent.innerHTML = result
}

let list = document.getElementById('list')
list.addEventListener('dblclick', function (event) {
    if (this.contains(event.target)) {
        let innerText = event.target.innerText
        event.target.innerHTML = ""
        let inputBox = createinputbox(innerText)
        event.target.appendChild(inputBox)

        inputBox.addEventListener('keypress', function (e) {
            if (e.key == 'Enter') {
                event.target.innerHTML = e.target.value
            }
        })
    }
})

function createinputbox(value) {
    let inp = document.createElement('input')
    inp.type = 'text'
    inp.className = "form-control"
    inp.value = value
    return inp
}


// list.addEventListener('click', function(event){
//     console.log("click event")
// })