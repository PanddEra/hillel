'use strict';

const a = 34;
const b = 21;
const num = 3;

console.log("Task 1 " + (a === 0 ? "True" : "False"));
console.log("Task 2 " + (a > 0 ? "True" : "False"));
console.log("Task 3 " + (a < 0 ? "True" : "False"));
console.log("Task 4 " + (a >= 0 ? "True" : "False"));
console.log("Task 5 " + (a <= 0 ? "True" : "False"));
console.log("Task 6 " + (a !== 0 ? "True" : "False"));
console.log("Task 7 " + (a === 'test' ? "True" : "False"));
console.log("Task 8 " + (a === '1' ? "True" : "False"));
console.log("Task 9 " + ((a > 0 && a < 5) ? "True" : "False"));
console.log("Task 10 " + ((a === 0 || a === 2) ? (a + 7) : (a / 10))); // better with if statement
console.log("Task 11 " + (a <= 1 && b >= 3 ? a + b : a - b)); // better with if statement
console.log("Task 12 " + ((a > 2 && a < 11) || (b >= 6 && b < 14) ? "True" : "False") // better with if statement
);

let result = "";
switch (num) {
    case 1: result = "Winter"; break;
    case 2: result = "Spring"; break;
    case 3: result = "Summer"; break;
    case 4: result = "Autumn"; break;
    default:
}
console.log("Task 13 " + result);