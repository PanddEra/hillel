'use strict';
const name = prompt("Ваше ім'я:");
const age = Number(prompt("Ваш вік:"));
const city = prompt("Ваше місто проживання:");
const isLoveJsString = prompt("Чи любите JavaScript? (так/ні)");

let isLoveJs = false;
if (isLoveJsString && isLoveJsString.toLowerCase() === "так") {
    isLoveJs = true;
}
alert(`Привіт, ${name}! Вам ${age} років, Ви з міста ${city}. Ставлення до JavaScript: ${isLoveJs ? "любить" : "не любить."}`);