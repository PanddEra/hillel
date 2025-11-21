'use strict';

const userName = prompt('What is your name?');
const greetingAccepted = confirm("Do you want to see greeting?");

if(greetingAccepted) {
    alert(`Hello, ${userName}!`);
}