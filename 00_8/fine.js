var arr = [2, 3, 43, 4, 5,6 ,7, 8]

var result = arr.find(function(value, index){
    return value == 3
})
console.log(result)

var result1 = arr.findIndex(function(value1){
    return value1 ==43
})
console.log(result1)

function myfine(arr, cb){
    for (var i =0; i < arr.length; i++){
        if(cb(arr[i])){
            return arr[i]
        }
    }
}
var result3= myfine(arr, function(value3){
    return value3 == 43
})

console.log(result3)