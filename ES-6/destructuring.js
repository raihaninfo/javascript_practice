// destructuring 

const user = {
    id: 22,
    name: "Sakib",
    age: 32
};

// old way
// var name = user["name"]

// console.log(name);

// new way 

const {
    name: title
} = user;
console.log(title);