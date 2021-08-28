// js OOP
class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  // method
  printMethod() {
    console.log(this.id + " " + this.name);
  }
}

let user1 = new User(1, "Raihan");

let user2 = new User(2, "Mahmud Hasan");

user1.printMethod();
user2.printMethod();
