'use strict';

function padString(string, length, char, rightSide = true) {
    const error = validatePadString(string, length, char);
    if (error) return error;

    if (length < string.length) {
        return string.substring(0, length);
    }

    let pad = '';
    for (let i = 0; i < length - string.length; i++) { // OR -> char.repeat(length - string.length);
        pad += char;
    }

    let result;

    if (rightSide) {
        result = string + pad;
    } else {
        result = pad + string;
    }

    return result;
}

function validatePadString(string, length, char) {
    if (!string || typeof string !== 'string' || string.trim().length === 0) {
        return "String must contain at least one character";
    }
    if (typeof length !== 'number' || isNaN(length)) {
        return "Length must be a valid number";
    }
    if (!char || typeof char !== 'string' || char.length !== 1) {
        return "Char must be exactly one character";
    }
    return null;
}

console.log(padString('hello', 8, '*'));
console.log(padString('hello', 6, '*', false));
console.log(padString('hello', 2, '*'));