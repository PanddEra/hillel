'use strict';

function wireContext(fn, context, ...args){ // function for wiring context for call/apply
    context.tempFn = fn;
    const result = args?.length ? context.tempFn(...args) : null;
    delete context.tempFn;

    return result;
}

const call = (fn, context, ...args) => {
    return wireContext(fn, context, args);
};

const apply = (fn, context, args) => {
    return wireContext(fn, context, args);
};

const bind = (fn, context, args) => {
    return function (){
        return wireContext(fn, context, args);
    }
}

//---
function getAndDisplayAge(){
    console.log(this.age);
    return this.age;
}

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 32
}

call(getAndDisplayAge, user);
apply(getAndDisplayAge, user);
const bindFn = bind(getAndDisplayAge, user);
bindFn();


