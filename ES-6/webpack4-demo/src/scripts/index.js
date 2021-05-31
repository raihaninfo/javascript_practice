import '../styles/index.scss'

function sum(...rest){
    return rest.reduce((a,b)=>a+b)
}

console.log(sum(1,3,4,5,6,4))