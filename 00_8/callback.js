// Call back function

function sample(a, b, cb){
    var c = a +b
    var d = a -b
    var result = cb(c, d)
    return result

}

function sum(a, b){
    return a+b
}

console.log(sample(6,5,sum))

// callback function
var result2 = (sample(6,5,function(c, d){
    return c - d
}))

console.log(result2)