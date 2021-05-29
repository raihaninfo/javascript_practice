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

var createRect = function (width, height) {
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


var Recttangle = function (width, height) {
    this.width = width
    this.height = height

    this.draw = function () {
        console.log("I am a reactangle")
        this.printProperties()
        console.log(this)
    }
    this.printProperties = function () {
        console.log("My width is " + this.width + " And Height " + this.height)
    }
}

var rect3 = new Recttangle(23, 45)
rect3.draw()

var n = 10

function change(n) {
    n = n + 100
    console.log(n)
}
change(n)
console.log(n)

var obj = {
    a: 10,
    b: 20
}

function changeMe(obj) {
    obj.a = obj.a + 100
    obj.b = obj.b + 100
    console.log(obj)
}

changeMe(obj)