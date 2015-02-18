// return a function that will add x and y
function makeAdder(X){
  // we have a local variable x

  return function(y){
    return x + y;
  };

};

//Create a function that will take one argument and add 5 ot it.
var add5 = makeAdder(5);

//add 5 to 7 and output it.
console.log(add5(7));
