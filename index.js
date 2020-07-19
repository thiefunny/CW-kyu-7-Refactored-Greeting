function Person(name) {
  this.name = name
}

Person.prototype.greet = function (herName) {
    return `Hello ${herName}, my name is ${this.name}`
  }

let joe = new Person("Joe");


joe.greet("Kate");
