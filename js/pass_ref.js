// Create  a new object in memory

// Variable that has an identifier 'person1' and we have an object, lets call it obj1. Set obj 1 name to the primitive 'Tom' and obj1 age to the primitive 57.
var person1 = {
  name: 'Tom',
  age: 57
};

/*
Varialbe  | Memory
-------------------
person1   | ptr to obj1
...       | ...
obj1.name | 'tom'
obj1.age  | 57
*/

// copying the value of person1 to the value of person2
var person2 = person1;

/*
Varialbe  | Memory
-------------------
person1   | ptr to obj1
person2   | ptr to obj1
...       | ...
obj1.name | 'tom'
obj1.age  | 57
*/

//What is this going to print
person1.age = 37;
console.log(person2.name + " is " + person2.age);

/*
Varialbe  | Memory
-------------------
person1   | ptr to obj1
person2   | ptr to obj1
...       | ...
obj1.name | 'tom'
obj1.age  | 37
*/

//Accessing person1.age
// 1)Find person1's memory slot
// 2)if it's a object, aka reference object, then follow the reference. Get the object pointed.
// 3) Find the age property for this object.
//4)change or read that property

