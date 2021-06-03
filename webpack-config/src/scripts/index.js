class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    draw() {
        console.log('Drawing...')
    }
}

let rect1 = new Rectangle(23, 45)
console.log(rect1)