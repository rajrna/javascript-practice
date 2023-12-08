//Challenge 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

//Challenge 2

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

//Challenge 3
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
}
else if (scoreDolphins == scoreDolphins) {
    console.log("Both win the trophy");
}
else {
    console.log("Koalas win the trophy");
}

//Challenge 4

/* Write your code below. Good luck! 🙂 */
const bill = 40;

const tip = (bill >= 50 && bill <= 300) ? (15 / 100) * bill : (20 / 100) * bill;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip} .`);