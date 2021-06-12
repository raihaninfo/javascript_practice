let load = document.getElementById('load')
let postlist = document.getElementById('post')

const URL = 'https://jsonplaceholder.typicode.com/posts'

load.addEventListener('click', function () {
    fetch(URL)
        .then(response => response.json())
        .then(post => {

            post.forEach(post => {
                let listItem = listItemGenatetor(post)
                postlist.appendChild(listItem)
            })
        })
        .catch(e => console.log(e.message))
})

function listItemGenatetor(item) {
    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.innerHTML = item.title

    return li
}