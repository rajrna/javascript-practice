
const luffy = {
    firstName: 'Luffy',
    lastName: 'Monkey',
    occupation: 'Pirate',
    birthYear: 2000,
    crewmates: ['Zoro', 'Nami', 'Ussop', 'Sanji'],
    hasDriversLiscense: true,

    calcAge: function () {
        return 2020 - this.birthYear;
    },


    calcAge2: function () {
        this.age = 2024 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        console.log(`${this.firstName} is a ${this.calcAge()} ${this.occupation}, and he has ${this.hasDriversLiscense ? 'a' : 'no'} driver's liscense `);
    }



};


console.log(luffy.lastName);
console.log(luffy['lastName']);

const nameKey = "Name";
console.log(luffy['first' + nameKey]);
console.log(luffy['last' + nameKey]);

const interstedIn = prompt("What do you want to learn about luffy: firstName, lastName, occupation, crewmates");
console.log(luffy[interstedIn]);


luffy.location = 'New World';
luffy['crewName'] = 'strawhatPirates';
console.log(luffy);

console.log(`${luffy.firstName} has ${luffy.crewmates.length} friends, and his first crewmate is ${luffy.crewmates[0]}`);


console.log(luffy.calcAge2());
console.log(luffy.age);
console.log(luffy.getSummary());