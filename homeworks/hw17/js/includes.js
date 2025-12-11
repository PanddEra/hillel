'use strict';

/**
 * Checks if the array contains a given element, starting from the specified index.
 *
 * @template T
 * @param {T[]} array - Array to search in.
 * @param {T} searchElement - Element to find.
 * @param {number} [fromIndex=0] - Index to start searching from.
 * @returns {boolean} True if the element is found, otherwise false.
 */

const numbers = [1, 2, 3, 4, 5, 6, 3, 2, 9];

const includes = (array, searchElement, fromIndex = 0) => {
    for (let i = fromIndex; i < array.length; i++) {
        if (array[i] === searchElement) return true;
    }
    return false;
};

console.log(includes(numbers, 3));
console.log(includes(numbers, 1, 1));