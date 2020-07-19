// function greet(myName, yourName){
//   return "Hello " + yourName + ", my name is " + myName;
// }

function Person(name) {
  this.name = name;
  this.greet = function (herName) {
    return `Hello ${herName}, my name is ${this.name}`
  }
}

let joe = new Person("Joe");


joe.greet("Kate");
joe.name;

// let Person = {
//   greet: function() {
//     return `Hello ${x}, my name is ${x}`
//   }

// };



// let person = new Person();



// var joe = new Person('Joe');
// joe.greet('Kate'); // should return 'Hello Kate, my name is Joe'
// joe.name           // should == 'Joe'