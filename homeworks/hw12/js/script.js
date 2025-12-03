'use strict';

//task 1
let resultString = "";
for (let i = 20; i <= 30; i += 0.5) {
    i === 30 ? resultString += i : resultString += i + ", " ;
}
console.log(resultString);

//task 2
const price = 27;
for (let i = 10; i < 101; i += 10) {
    console.log(i + "USD = " + (price * i) + "UAH");
}

//task 3
const number = 68;
for (let i = 1; i < 101; i++) {
    if(i * i <= number){   // (i * i <= number) ? console.log(i) : break;  -> compile error
        console.log(i);
    }else{
        break;
    }
}
//task 4
const number2 = 23;
let isPrime = true;
if(number2 <= 1){
    isPrime = false;
}else {
    for (let i = 2; i < number2; i++) {
        if (number2 % i === 0) {
            isPrime = false;
        }
    }
}   
console.log(isPrime ? "Yes" : "No");

//task 5
const number3 = 34;
let isFound  = false;
for (let i = 2; i < number3; i++) {
    if(3 ** i === number3){
        isFound  = true;
        break;
    }
}
console.log(isFound ? "YES" : "NO");