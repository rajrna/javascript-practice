// let js = 'amazing';

// console.log(20 + 10);

// let myDreamGirl = 'I aint telling you';

// console.log(myDreamGirl);



// equality operators 

// const age = '18';
// if (age === 18) {
//     console.log("You are an adult (strict)");
// }

// if (age == 18) {
//     console.log("You are an adult (loose)");
// }

// const favNumber = Number(prompt("What's your favorite number dog?"));
// console.log(typeof favNumber);
// console.log(`your fav number's ${favNumber} ? That's cool`);
// if (favNumber == 16) {
//     console.log("16 is a cool number dawg");
// } else if (favNumber == 69) {
//     console.log('69 is a sus number dawg');
// }
// else {
//     console.log("whatever you entered I don't care. Who tf has a favorite number anyway");
// }

// if (favNumber !== 16) {
//     console.log("My number's 16 why isn't yours the same :(");
// }
// wtf, you just said who tf has a favorite number.


// const hasDriversLicense = true;
// const hadGoodVision = false;

// console.log(hasDriversLicense && hadGoodVision);
// console.log(hasDriversLicense || hadGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hadGoodVision;

// if (shouldDrive) {
//     console.log("You may drive");
// }
// else {
//     console.log("Get someone else to drive bruh");
// }
// tf am I learning and or not again for I already know that shit



const day = 'monday';

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare videos');
        break;
    case 'wednesday':
        console.log('do something i guess');
        break;
    case 'thursday':
    case 'friday':
        console.log('Work');
        break;
    case 'saturday':
        console.log('Sleep');
        break;
    default:
        console.log('Not a valid day');
}

if (day === "monday") {
    console.log('Plan course structure');
    console.log('go to coding meetup');
}
else if (day === "tuesday") {
    console.log('Prepare videos');
}
else if (day === "saturday") {
    console.log('Sleep');
}
else if (day === "friday" || day === "thursday") {
    console.log("Work");
}
else {
    console.log("Not a valid day");
}

