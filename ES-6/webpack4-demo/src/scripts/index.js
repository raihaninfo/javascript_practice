import '../styles/index.scss'

let obj = {
    a: 20,
    b: 43,
    c: 4
}

console.log(Object.entries(obj))

let object2 = [
    ['A', 20],
    ['B', 43]
]

console.log(Object.fromEntries(object2))
