'use strict';

/**
 * Returns the first index at which a given element can be found in the array,
 * or -1 if it is not present. Works similarly to the built-in Array.prototype.indexOf.
 *
 * @template T
 * @param {T[]} array - The array to search in.
 * @param {T} searchElement - The element to locate in the array.
 * @param {number} [fromIndex=0] - The index to start the search at.
 * Defaults to 0. If the index is greater than or equal to the array's length, -1 is returned.
 *
 * @returns {number} The first index of the element in the array; otherwise, -1.
 */

const numbers = [1, 2, 3, 4, 5, 6];
//       index            0  1  2  3  4  5

const indexOf = (array, searchElement, fromIndex = 0) => {
    for (let i = fromIndex; i < array.length; i++) {
        if(array[i] === searchElement) return i;
    }
    return -1;
}

console.log(indexOf(numbers, 3, 1));
console.log(indexOf(numbers, 10));