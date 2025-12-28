'use strict';

function arrayCutter(array, result = []) { // cut array to one dimensional(works with all depths), specially for `flat()`
    for (const arrayElement of array) {
        if(Array.isArray(arrayElement)) {// if element of 'array' is array -> call arrayCutter() for it
            arrayCutter(arrayElement, result);
        }else{
            result.push(arrayElement);
        }
    }
    return result;
}

function flat(array){ //validate args and call arrayCutter()
    if(arguments.length > 1){
        throw new Error('Function accepts only 1 argument, too much arguments provided');
    }
    if(!Array.isArray(array)){
        throw new Error('Argument must be an array');
    }
    
    return arrayCutter(array);
}

console.log(flat([[1, 2, 3], [11, 22, 33], [111, 222, 333]]));


