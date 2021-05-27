var a = 100
// newPrint(a)
print(10)


var newPrint = print
newPrint(45)

function print(a) {
    console.log(a)
}
print(a)