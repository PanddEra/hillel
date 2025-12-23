'use strict';

const call = (fn, context = window, ...args) => {
    return context.fn(...args);
};

const apply = (fn, context = window, args) => {
    fn(...args);
};

const bind = (fn, context = window, ...bindArgs) => {
    return (...callArgs) => fn(...bindArgs, ...callArgs);
}

function sayHi(name){
    console.log(name);
}

call(sayHi, 'Mickey');
apply(sayHi, ['Mickey', 'Sneaky']);
const hi = bind(sayHi, 'Mickey');
hi();


