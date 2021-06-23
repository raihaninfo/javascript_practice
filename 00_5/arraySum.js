let arr = [2, 7, 4]

function arrySum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum)
}

arrySum(arr)