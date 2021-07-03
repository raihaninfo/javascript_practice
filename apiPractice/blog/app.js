function post(data) {
    for (let i = 0; i < data.length; i++) {
        const title = document.getElementById('container')
        let postAll = data[i]
        const header = document.createElement('h2')
        const body = document.createElement('p')
        title.appendChild(header)
        title.appendChild(body)
        header.innerHTML = postAll.title
        body.innerHTML = postAll.body
    }
}

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => post(data))