'use strict';

const call = (fn, ...args) => {
    fn(...args);
};

const apply = (fn, args) => {
    fn(...args);
};

const bind = (fn, ...bindArgs) => {
    return (...callArgs) => fn(...bindArgs, ...callArgs);
}

function sayHi(name){
    console.log(name);
}

call(sayHi, 'Mickey');
apply(sayHi, ['Mickey', 'Sneaky']);
const hi = bind(sayHi, 'Mickey');
hi();


