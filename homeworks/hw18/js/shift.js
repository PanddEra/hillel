'use strict';

/**
 * Removes the first element from an array, shifts all remaining elements
 * one position to the left, and returns the removed element.
 *
 * This function mutates the original array and reduces its length by 1.
 * If the array is empty, it returns `undefined`.
 *
 * @param {any[]} arr - The array from which the first element will be removed.
 * @returns {any|undefined} The removed first element, or `undefined` if the array is empty.
 *
 * @example
 * const nums = [1, 2, 3];
 * const first = shift(nums);
 * console.log(first); // 1
 * console.log(nums);  // [2, 3]
 *
 * @timecomplexity O(n) – all elements are shifted
 */

const numbers = [1, 2, 3, 4, 5, 6, 3, 2, 9];
//       index            0  1  2  3  4  5  6  7  8

const shift = (arr) => {
    if (arr.length === 0) return undefined;

    const firstOldElement = arr[0];

    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }
    arr.length--;

    return firstOldElement;
};

console.log(shift(numbers));
console.log(numbers);