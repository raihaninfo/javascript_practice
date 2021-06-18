var a = [2, 3, 4, 5]
var b = [8, 5, 6, 7]
var c = [23, 45, 33]

// var sum = 0
// for(var i = 0; i<a.length; i++){
//     sum+=a[i]
// }
// console.log(sum)

// funcion

sumOfArray(a)
sumOfArray(b)
sumOfArray(c)

function sumOfArray(arr) {
    sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum)
}