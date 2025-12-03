'use strict';

const arr = [1, 2, 3, 4, 5];

let sum = 0;
let sqSum = 0;
for (const number of arr) {
    sum += number;
    sqSum += Math.pow(number, 2);
}
console.log(`${sum} --- ${sqSum}`);

