'use strict'

/**
 * Checks if all elements in the array satisfy the callback function.
 * Returns true for empty arrays.
 *
 * @template T
 * @param {T[]} array - Array to check.
 * @param {(item: T, index: number, array: T[]) => boolean} callback - Function to test each element.
 * @returns {boolean} True if all elements satisfy the callback, otherwise false.
 */

const numbers = [1, 2, 3, 4, 5, 6, 3, 2, 9];
//       index            0  1  2  3  4  5  6  7  8

const every = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if(!callback(array[i], i, array)) return false;
    }
    return true;
};

console.log(every(numbers, (item) => item > 0));
console.log(every(numbers, (item) => item > 10));  
console.log(every([], (item) => item > 10));