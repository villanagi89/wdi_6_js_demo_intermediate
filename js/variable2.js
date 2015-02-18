// Primitives values
// number, string, boolean, null, undefiend,

var age = 3,
    name = "Jack Smith",
    male = true,
    favoriteHat = null,
    significantOther; //undefiend

// Reference Object, aka Object isntace.
var joe = {
  name: "Joe Fallon",
  age: 25
};

// Intance of an Array inherits from object
var instructors = ['alex', 'david', 'jeff', 'jason', 'tom', 'anna'];

//Car is a constructor funciton
var Car = function(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
};
// define a display method that all instances of car can use.
Car.prototype = {
  display: function(){
    return this.year + " " + this.model + " " + this.make;
  }
};
//Instance of a Car
var mustang = new Car("Ford", "Mustang", 1967);
console.log(mustang.display());
