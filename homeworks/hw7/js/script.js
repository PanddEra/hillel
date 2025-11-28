'use strict';

const ageString = prompt("Ваш вік: ");
const age = Number(ageString);

if(isNaN(age) || ageString === null || ageString.trim() === "") {
    alert("Некоректний вік");
}else{
    alert(`Через 5 років вам буде: ${age + 5}`);
}

//---
const price1 = "120.50$";
const price2 = "UAH 999";
const height = "180cm";
const broken = "abc123";

function parsingTest(string){
    console.log(`"${string}" -> parseInt: ${parseInt(string)}, parseFloat: ${parseFloat(string)}`);
}

parsingTest(price1);
// parseInt -> reads digits until it reaches dot
// parseFloat -> reads digits and dot, stops when it reaches "$"

parsingTest(price2);
// parseInt -> first character is not a digit, returns NaN
// parseFloat -> first character is not a digit, returns NaN

parsingTest(height);
// parseInt -> reads digits until it reaches the letter
// parseFloat -> reads digits until it reaches the letter

parsingTest(broken);
// parseInt -> first character is not a digit, returns NaN
// parseFloat -> first character is not a digit, returns NaN