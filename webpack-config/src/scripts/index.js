
class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    name = "raihan"
    draw() {
        console.log('Drawing...')
    }

    test() {
        console.log(323)
    }
}

let rect1 = new Rectangle(23, 45)
console.log(rect1)
console.log(rect1.test())