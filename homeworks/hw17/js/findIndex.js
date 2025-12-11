'use strict';

/**
 * Returns the index of the first element in the array that satisfies the callback function.
 * If no element satisfies the condition, returns -1.
 *
 * @template T
 * @param {T[]} array - The array to search through.
 * @param {(item: T, index: number, array: T[]) => boolean} callback -
 *   Function that tests each element. Receives the element, its index, and the array.
 * @returns {number} The index of the first element that satisfies the callback, or -1 if none found.
 */

const numbers = [1, 2, 3, 4, 5, 6, 3, 2, 9];
//       index            0  1  2  3  4  5  6  7  8

const findIndex = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i], i, array)) return i;
    }
    return -1;
};

console.log(findIndex(numbers, (item) => item > 4));
console.log(findIndex(numbers, (item) => item % 2 === 0));
console.log(findIndex(numbers, (item) => item > 10));