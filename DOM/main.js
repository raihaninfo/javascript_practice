let Name = document.getElementById('name')
Name.addEventListener('keypress', function (event) {
    if (event.key == 'Enter') {
        document.getElementById('showName').innerHTML = `Your Name is : ${event.target.value}`
        event.target.value = ''
    }
})