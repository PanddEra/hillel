'use strict';

const numbers = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// 1
const min = Math.min(...numbers);
console.log('Min: ' + min + '; Index: ' + numbers.indexOf(min));

// 2
const max = Math.max(...numbers);
console.log('Max: ' + max + '; Index: ' + numbers.indexOf(max));

// 3
let countPositive = 0;
let sumPositive = 0;
for (const num of numbers) {
    if (num > 0) {
        countPositive++;
        sumPositive += num;
    }
}
console.log('Count of positive numbers: ' + countPositive);
console.log('Sum of positive numbers: ' + sumPositive);

// 4
const countNegative = numbers.filter(num => num < 0).length;
console.log('Count of negative numbers: ' + countNegative);

// 5, 6, 7, 8
let countEvenPositive = 0;
let countOddPositive = 0;
let sumEvenPositive = 0;
let sumOddPositive = 0;

for (const num of numbers) {
    if (num > 0) {
        if (num % 2 === 0) {
            countEvenPositive++;
            sumEvenPositive += num;
        } else {
            countOddPositive++;
            sumOddPositive += num;
        }
    }
}
console.log('Count of even positive numbers: ' + countEvenPositive);
console.log('Count of odd positive numbers: ' + countOddPositive);
console.log('Sum of even positive numbers: ' + sumEvenPositive);
console.log('Sum of odd positive numbers: ' + sumOddPositive);

// 9
const productPositive = numbers.filter(num => num > 0).reduce((a, b) => a * b);
console.log('Product of positive numbers: ' + productPositive);

// 10
const maxOnlyArray = numbers.map(num => num === max ? num : 0);
console.log('Array with max value: ' + maxOnlyArray);