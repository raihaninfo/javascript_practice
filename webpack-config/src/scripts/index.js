import '../styles/index.css'
import {
    ABC
} from './test'

const fn = () => {
    console.log("i am Fn")
}

fn()

function sum(a, b) {
    return a + b
}

console.log(sum(2, 3));

console.log(ABC)

class x {
    a = 10
    xyz() {
        console.log(this.a)
    }
}

let a = new x()
a.xyz()