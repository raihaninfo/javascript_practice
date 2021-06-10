let form = document.getElementById('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    let isValid = false
    let formData = {};
    [...this.elements].forEach(el => {
        if (el.type !== 'submit') {
            isValid = validetor(el)
            if (isValid) {
                formData[el.name] = el.value
            } else {
                // alert(`${el.name} Is Required`)
                el.classList.add('is-invalid')
            }
        }
    })
    if (isValid) {
        console.log(formData)
        this.reset()
    }
})

function validetor(ele) {
    if (!ele.value) {
        return false
    }

    return true
}