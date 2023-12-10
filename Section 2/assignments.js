let country = 'Nepal';
let population = 10;
let continent = 'Asia';

console.log(country);
console.log(population);
console.log(continent);

const isIsland = false;
let language;
language = 'English';

console.log(isIsland);
console.log(language);

population /= 2;
population += 1;
console.log(population);

const populationOfFinland = 50000;
console.log(population > populationOfFinland);

const averagePopulation = 330000;
console.log(population < averagePopulation);

if (population < averagePopulation) {
    console.log('The populaton is low bud, git gud');
}

const description = country + ' is in ' + continent + ', and its ' + population + ' people speak ' + language;
const description2 = `${country} is in ${continent} ,and it's ${population} people speak ${language}`;
console.log(description);
console.log(description2);


if (population > 30000) {
    console.log(`${country}'s population is ${population - 30000} above average`);
} else {
    console.log(`${country}'s population is ${30000 - population} below average`);
}

/*
    4
    1317-19
    23
    false
    1143
*/

// const numNeighbours = Number(prompt('How many neighbours does your country have?'));
// if (numNeighbours === 1) {
//     console.log("only one border");
// }
// else if (numNeighbours > 1) {
//     console.log("more than 1");
// } else {
//     console.log('No borders');
// }

if (language = 'English' && population < 50000 && !isIsland) {
    console.log(`You should live in ${country} :p`);
} else {
    console.log(`${country} doesn't meet the criteria`);
}


switch (language) {
    case 'chinese':
        console.log('Most number of native speakers');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'English':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    default:
        console.log("great lanuage as well my guy");
}

console.log(`${country}'s population is ${population > 3000 ? 'above' : 'below'} average`);

// const ageRaj = 21;
// const ageEk = 22;

// const averageAge = (ageEk + ageRaj) / 2;
// console.log(averageAge);
/* Write your code below. Good luck! 🙂 */
// const massMark = 78;
// const heightmark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightmark * heightmark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIMark, BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);


// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// /* Write your code below. Good luck! 🙂 */
// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

