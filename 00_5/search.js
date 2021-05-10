// Search Data in array

var arr = [2, 3, 4, 5, 56, 7, 8, 44, 33, 22];

var fine = 10;
var isFound = false;

for (var i = 0 ; i < arr.length; i ++){
    if (arr[i]==fine){
        console.log("Data Found")
        isFound = true;
    }
}
if (!isFound){
    console.log("Data Not Found")
}