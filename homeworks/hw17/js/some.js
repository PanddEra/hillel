'use strict'

/**
 * Checks if at least one element in the array satisfies the callback function.
 * Returns false for empty arrays.
 *
 * @template T
 * @param {T[]} array - Array to check.
 * @param {(item: T, index: number, array: T[]) => boolean} callback - Function to test each element.
 * @returns {boolean} True if at least one element satisfies the callback, otherwise false.
 */

const numbers = [1, 2, 3, 4, 5, 6, 3, 2, 9];
//       index            0  1  2  3  4  5  6  7  8

const some = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i], i, array)) return true;
    }
    return false;
};

console.log(some(numbers, (item) => item > 0));
console.log(some(numbers, (item) => item > 10));
console.log(some([], (item) => item > 10));