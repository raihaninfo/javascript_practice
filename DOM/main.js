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

function outputSkills(parent, skills) {
    let result = ''
    skills.forEach((skill, index) => {
        result += `(${index + 1 })   ${skill}   `
    })
    parent.innerHTML = result
}