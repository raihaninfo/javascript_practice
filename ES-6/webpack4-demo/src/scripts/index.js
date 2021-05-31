import '../styles/index.scss'

let obj = {
    a: 20,
    b: 43,
    c: 4
}

let s1 = Symbol()
let s2 = Symbol('test')

console.log(s1, s2)

console.log(s1 === s2)

