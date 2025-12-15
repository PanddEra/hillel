'use strict'

/**
 * Reverses the elements of an array in place.
 * The first element becomes the last, the last becomes the first, and so on.
 * This function mutates the original array and returns the same array.
 *
 * @param {any[]} arr - The array to be reversed.
 * @returns {any[]} The same array, but with elements in reversed order.
 *
 * @example
 * const numbers = [1, 2, 3, 4, 5];
 * const reversed = reverse(numbers);
 * console.log(reversed); // [5, 4, 3, 2, 1]
 * console.log(numbers);  // [5, 4, 3, 2, 1] (original array is mutated)
 *
 * @timecomplexity O(n) – all elements are swapped
 */

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//        index            0  1  2  3  4  5  6  7  8

const reverse = (arr) => {
    let temp = arr[0];
    for (let i = 0; i < arr.length/2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length -1 - i] = temp;
    }
    return arr;
};

console.log(reverse(numbers1));