function add(a, b){
    var result = a+b;
    console.log(result)
}
add(2,3)
add(10, 20)

var arr1 = [2, 3, 4]
var arr2 = [3, 5, 7]
// var sum1 = 0;
// for(var i = 0; i < arr1.length; i ++){
//     sum1 += arr1[i]
// }
// console.log(sum1)

function sumOfArray(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i ++){
        sum += arr[i]
    }
    console.log(sum)
}

sumOfArray(arr1)
sumOfArray(arr2)