// let person = {};

// person.name = "Raihan";
// person.age = 30;

// person.eat = function () {
//   console.log(`Person is eating`);
// };

function Person(name, age) {
  let person = {};

  person.name = name;
  person.age = age;

  person.eat = function () {
    console.log(`Person is eating`);
  };
  return person;
}

const sakib = Person("Sakib", 34);
const hasan = Person("Hasan", 35);

console.log(sakib);
