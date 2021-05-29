// var rect = {
//     width: 100,
//     height: 50,

//     draw: function () {
//         console.log("i am a rectangle")
//         this.printProperties()
//     },
//     printProperties: function () {
//         console.log("My width is " + this.width + " And Height " + this.height)
//     }
// }

var createRect = function(width, height){
    return {
        width: width,
        height: height,
    
        draw: function () {
            console.log("i am a rectangle")
            this.printProperties()
        },
        printProperties: function () {
            console.log("My width is " + this.width + " And Height " + this.height)
        }
    }
}

var rect1 = createRect(10, 4)
rect1.draw()

var rect2 = createRect(23, 45)
rect2.draw()