// Remember, we're gonna use strict mode in all scripts now!
'use strict';

let hasDriversLiscense = false;
const passTest = true;

if (passTest) hasDriversLiscense = true;
if (hasDriversLiscense) {
    console.log("I'm allowed to drive rahh🔥🔥");
}

//const interface = 'Audio'; //not allowed because interface is reserved by js.

// learn about functions

function logger() {
    console.log('My name is What? Who?');
}
//calling the function
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    //console.log(juice);
    return juice;
}

const appleJuice = fruitProcessor(10, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(5, 5);
console.log(appleOrangeJuice);

//function declaration
function calcAge1(birthYear) {
    const age = 2024 - birthYear;
    console.log(age);
    return age;
}
const ekAge = calcAge1(2002);

//this is an anonymous function
// function expression
const calcAge2 = function (birthYear) {
    return 2024 - birthYear;
}

const age2 = calcAge2(2000);
console.log(age2, ekAge);
