let postForm = document.getElementById('post-form')
let post = document.getElementById('posts')
const URL = 'https://jsonplaceholder.typicode.com/posts'

postForm.addEventListener('submit', function (e) {
    e.preventDefault()

    let title = this.title.value || undefined
    let body = this.body.value || undefined

    if (title && body) {
        let postObj = {
            userId: 100,
            title,
            body
        }
        fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-type': 'Application/JSON'
                },
                body: JSON.stringify(postObj)
            })
            .then(response => response.json())
            .then(post => {
                let item = listItemGenatetor(post)
                posts.appendChild(item)
                this.reset()
            })
            .catch(e => console.log(e.message))
    } else {
        alert('Please Provide Every Detels')
    }
})

function listItemGenatetor(item) {
    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.innerHTML = `${item.id}. ${item.title} By user id - ${item.userId}`

    return li
}