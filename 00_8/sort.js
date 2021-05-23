var parsons = [{
        Name: "A",
        Age: 34
    },
    {
        Name: "B",
        Age: 23
    },
    {
        Name: "C",
        Age: 21
    }
]

var arr = [2, 3,4 ,5 ,6 ,8 ,9, 34, -5]
// arr.sort()
// console.log(arr)
arr.sort(function(a, b){
    if(a>b){
        return 1
    }else if(a<b) {
        return -1
    }else{
        return 0
    }
})

console.log(arr)