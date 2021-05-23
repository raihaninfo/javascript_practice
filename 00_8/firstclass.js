// First class function 6 Rools
// 

function add(a, b){
    return a+b;
}

// 1. A function can be stored in a variable.
var sum = add
console.log(sum(3,5))
// 2. A function can be stored in an Array
var arr =[];
arr.push(add)
console.log(arr[0](5, 5))
// 3. A function can be stored in an Object

var obj = {
    sum : add
}
console.log(obj)
console.log(obj.sum(4,4))

// 4. We can create function as Need
setTimeout(function(){
    console.log("I have created ...")
}, 500)
// 5. we can pass function as an Arguments

// 6. we can return functions from another function 

