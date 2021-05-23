var arr = [2, 3, 4, 5]
// var sum = arr.reduce(function (prev, curr) {
//     return prev + curr
// }, 100)

// var max = arr.reduce(function (prev, curr) {
//     return Math.max(prev, curr)
// })

// console.log(sum, max)

function myReduce(arr, cd,acc) {
    for (var i = 0; i < arr.length; i++) {
        acc = cd(acc, arr[i])
    }
    return acc
}

var sum = myReduce(arr, function(prev, curr){
    return prev+curr
}, 1)
var max = myReduce(arr, function(prev, curr){
    return Math.max(prev, curr)
}, 1)
var min = myReduce(arr, function(prev, curr){
    return Math.min(prev, curr)
}, 1)

console.log(sum, max, min)
