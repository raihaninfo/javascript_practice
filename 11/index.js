var rect = {
    width: 100,
    height: 50,

    draw: function () {
        console.log("i am a rectangle")
        this.printProperties()
    },
    printProperties: function(){
        console.log("My width is " + this.width + " And Height " + this.height)
    }
}

rect.draw()
rect.height = 100;
rect.draw()