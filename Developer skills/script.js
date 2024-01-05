// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//PROBLEM
// we work for a company building a smart home thermometer, Our most recent task is this: " Goven an array of
// temperatures of one day, calculate the tempereature amplitude. Keep in mind that sometimes there might be a sensor error"

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//understanding the problem
// what is tem amplitude? Difference between highest and lowest temp
//how to compute max and min temp?
// what's a sensor error? and what to do?

//2) Breaking up into sub=problems
//how to ignore errors
// find max value in temp array
// find min value in temp array
// subtract min from max and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

calcTempAmplitude([3, 7, 4]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//problem 2;
//function should now receive 2 arrays of tempereatures
// - With 2 arrays do we implement functionality twice? NO just merge twoarrays at start

//How to merge 2 arrays
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

calcTempAmplitude([3, 7, 4]);
const amplitudeNew = calcTempAmplitudeNew([1, 2, 3], [5, 6, 8]);
console.log(amplitude);

/////////////////////////

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Enter degree celsius')),
  };
  console.log(typeof measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());
