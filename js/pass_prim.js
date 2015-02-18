function addTen(num){ // 3
  num += 10;
  return num;
};

var count = 10; // 1
var result = addTen(count); //2

console.log("count is " count);
console.log("result is " + result);

/*
1. set count to 20.
count  | 20
*/

/*
2. Invoke the addTen function and pass it the value of the variable count, which is 20.
3. Set the addTen functions local variable num to 20
*/

/*
count | 20
...   | ...
num   | 20
...   | ...
/*

/*
4. Add then to num, num is 30.
5. return num
6. set result to 30
6. After we leave addTen num is no longer needed. So we'll free up the memory using the garbage collection
*/

/*
count | 20
...   | ...
      |
...   | ...
result| 30
/*

// This function has no side effects
