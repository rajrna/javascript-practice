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

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(2002);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years `;
}

console.log(yearsUntilRetirement(2002, 'Ek'));

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges `;
    return juice;
}
fruitProcessor(4, 3);



const friends = ['quagmire', 'joe', 'peter', 'cleveland'];

console.log(friends[0]);
console.log(friends.length);

friends[3] = 'that guy';
console.log(friends);


//add elements to last
friends.push('Cleveland');
//add elements to front
friends.shift('Brian');
console.log(friends);

//remove elements
friends.pop();
console.log(friends);

console.log(friends.indexOf('Brian'));
console.log(friends.includes('Brian'));

const luffy = {
    firstName: 'Luffy',
    lastName: 'Monkey',
    occupation: 'Pirate',
    crewmates: [Zoro, Nami, Ussop, Sanji]
};

console.log(luffy.lastName);
console.log(luffy['lastName']);

const nameKey = "Name";
console.log(luffy['first' + nameKey]);
console.log(luffy['last' + nameKey]);

const interstedIn = propmt("What do you want to learn about luffy: firstName, lastName, occupation, crewmates");
console.log(luffy[interstedIn]);


luffy.location = 'New World';
luffy['crewName'] = 'strawhatPirates';
console.log(luffy);

console.log(`${luffy.firstName} has ${luffy.crewmates.length} friends, and his first crewmate is ${luffy.crewmates[0]}`)

for (let j = 0; j <= 5; j++) {
    console.log(`Number ${j}`);
}

const types = [];

const luffy = {
    firstName: 'Luffy',
    lastName: 'Monkey',
    occupation: 'Pirate',
    crewmates: [Zoro, Nami, Ussop, Sanji]
};
for (let i = 0; i <= luffy.length; i++) {
    console.log(luffy[i], typeof luffy[i]);

    //types[i] = typeof luffy[i];
    types.push(typeof jonas[i]);

}

const years = [2001, 2002, 2003, 2004];
const ages = [];

for (i = 0; i <= years.length; i++) {
    let age = 2023 - years[i];
    ages.push(age);
}

console.log(ages);

for (i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] != 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

const jonas = [
    'jonas',
    'schedmann',
    2020 - 2010,
    'teacher',
    ['michael', 'franklin', 'trevor']
];

for (i = jonas.length - 1; i >= 0; i--) {
    console.log(jonas[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`starting exercise ${exercise}`);

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`lifting weight repition ${rep} (❁'◡'❁) `);
    }
}

rep = 1;
while (rep <= 10) {
    console.log(`WHILE : Lifting weights repition ${rep}`);
    rep++;
}
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}