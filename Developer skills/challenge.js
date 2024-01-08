/*
Given an array of forecasted maximum temperatures,
the thermometer displays a string with these temperatures

Example: [17, 21, 23] will print "... 17C in 1 days...21C in 2 days ...
23C in 3 days..."

Create a function ' printForecast ' which takes in an 
array 'arr' and logs a string like the above to the console.

TEST DATA 1 : [17, 21, 23]
TEST DATA 2 : [12, 5, -5, 0, 4]
*/

// how to t
let i = 0;
let str = '';
const printForecast = function (arr) {
  for (i = 0; i < arr.length; i++) {
    str += `...${arr[i]}C in ${arr.indexOf(arr[i]) + 1}`;
  }
  console.log(str + '...');
};

printForecast([17, 21, 23]);
