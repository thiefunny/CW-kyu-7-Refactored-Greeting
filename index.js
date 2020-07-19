// function Person(name) {
//   this.name = name;
//   this.greet = function (herName) {
//     return `Hello ${herName}, my name is ${this.name}`
//   }
// }


class Person {
  constructor(name) {
    this.name = name;
  }
  greet(herName) {
    return `Hello ${herName}, my name is ${this.name}`
  }
}

let joe = new Person("Joe");


joe.greet("Kate");
