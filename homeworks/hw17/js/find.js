'use strict';

/**
 * Returns the first element in the array that satisfies the callback function.
 * If no element satisfies the condition, returns undefined.
 *
 * @template T
 * @param {T[]} array - The array to search through.
 * @param {(item: T, index: number, array: T[]) => boolean} callback -
 *   Function that tests each element. Receives the element, its index, and the array.
 * @returns {T|undefined} The first element that satisfies the callback, or undefined if none found.
 */

const numbers = [1, 2, 3, 4, 5, 6, 3, 2, 9];
//       index            0  1  2  3  4  5  6  7  8

const find = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i], i, array)) return array[i];
    }
    return undefined;
};

console.log(find(numbers, (item) => item > 4));
console.log(find(numbers, (item) => item % 2 === 0));
console.log(find(numbers, (item) => item > 10));