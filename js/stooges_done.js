var year = 1931, // primitive
    paid = true, // primitive
    manager,     // undefined
    moe = {      // pointer
      name: "Moe Howard",
      age: 34
    },
    larry = {
      name: "Larry Fine",
      age: 32
    },
    venue;

function Venue(name, city){ // pointer to a fuction in memory it stores the code itself.
  this.name = name;
  this.city = city;
}

var palladium = new Venue('Palladium', 'Worcester');

console.log("We went to see " + moe.name + " at the " + palladium.name);
