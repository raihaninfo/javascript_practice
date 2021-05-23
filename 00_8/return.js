function greet(msg) {
    function sayHi(Name){
        return msg+" " + Name + "," + "!"
    }
    return sayHi
}

var gm = greet("Good Morning")
var msg= gm("Md Abu Raihan")
console.log(msg)

function base(b){
   return function(n){
        var result = 1
        for (var i= 0; i <b; i++){
            result *=n
        }
        return result
    }
}
var base10 = base(10)
console.log(base10(2))