'use strict';

/**
 * Returns the last index of a given element in an array, or -1 if the element is not found.
 * The search starts from the specified index and moves backwards. If no index is provided,
 * the search starts from the end of the array.
 *
 * @template T
 * @param {T[]} array - The array to search in.
 * @param {T} searchElement - The element to locate in the array.
 * @param {number} [fromIndex=array.length - 1] - The index to start searching backwards from.
 *   If this index is greater than the last index of the array, the search starts from the end.
 * @returns {number} The last index of the element if found; otherwise, -1.
 */

const numbers = [1, 2, 3, 4, 5, 6, 3, 2, 9];
//       index            0  1  2  3  4  5  6  7  8

const lastIndexOf = (array, searchElement, fromIndex = array.length - 1) => {
    if (fromIndex >= array.length) fromIndex = array.length - 1;

    for (let i = fromIndex; i >= 0; i--) {
        if (array[i] === searchElement) return i;
    }
    return -1;
};

console.log(lastIndexOf(numbers, 3, 5));
console.log(lastIndexOf(numbers, 10));