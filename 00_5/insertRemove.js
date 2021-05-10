// Array Insert and remove element

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// insert
//
// arr[3] = 9
// arr.push(9)
// arr.unshift(9)
// arr.splice(3, 0, 9) //position, remove, data
// arr[3] = undefined
// arr.pop()
// arr.shift()
arr.splice(3, 1)

console.log(arr)