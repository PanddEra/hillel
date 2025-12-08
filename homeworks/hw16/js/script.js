'use strict';

const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item){
    array.splice(array.indexOf(item), 1);
}
removeElement(array, 5 );
console.log(array);
// Result: [1, 2, 3, 4, 6, 7]