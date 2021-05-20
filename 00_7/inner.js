function something(greet, name){
    function sayHi(){
        console.log(greet, name)
    }
    sayHi()
}
something("Good Morning", "Raihan Mahmud")

function something(greet, name){
    function getFirstName(){
        if(name){
            return name.split(" ")[0]
        }
    }
    var message = greet + " " + getFirstName()
    console.log(message)
}
something("Good Night", "Raihan Mahmudi")