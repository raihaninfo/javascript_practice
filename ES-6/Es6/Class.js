// js OOP
class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  // method
  printMethod() {
    console.log(this.id + " " + this.name);
    return this;
  }
}

// inheritance
class Admin extends User {
  constructor() {
    super();
    console.log("Admin");
  }
}

let user1 = new User(1, "Raihan");
let admin = new Admin();

user1.printMethod();
