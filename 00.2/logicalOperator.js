
var a = 10
var b = 20
var c = 40
var d = 30

if (a > b && c > d){
    console.log("A is greater than B and c is greater than D")
}else{
    console.log("One condition is false")
}

if (a > b || c > d){
    console.log("A is greater than B Or c is greater than D")
}else{
    console.log("One condition is false")
}

var check = !(a < b)
console.log(check)