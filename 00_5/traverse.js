// Traverse an Array
var arr = [3, 4, 5, 6, 7]

// velue + 2
for (var i =0; i <arr.length; i ++){
   console.log(arr[i])
    arr[i] = arr[i] + 2
}
console.log(arr)

// all array value sumetion
var sum = 0
for (var i =0; i <arr.length; i++){
    sum += arr[i]
}
console.log(sum)

// Even Number
for (var i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        console.log(arr[i])
    }
}