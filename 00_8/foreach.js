var arr = [2, 3, 4, 5, 6, 6]

var sum = 0
arr.forEach(function(value, index, arr){
    // console.log(value, index, arr)
    sum += value
})
console.log(sum)