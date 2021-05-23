var arr = [1, 2, 4, 5, 6]

// var sqrArr = arr.map(function (value) {
//     // return Math.random()*100
//     return value * value
// })

// console.log(arr)
// console.log(sqrArr)

function map1(arr, cb) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        var temp = cb(arr[i], i, arr)
        newArr.push(temp)
    }
    return newArr
}

var qb = map1(arr, function(value){
    return value * value * value
})


console.log(arr)
console.log(qb)