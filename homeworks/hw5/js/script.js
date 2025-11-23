'use strict';
const inputAge = prompt("Вкажіть ваш вік:");

if (inputAge === null || inputAge.trim() === "") {
    alert("Вік не вказано");

} else {
    const age = Number(inputAge);

    if (age < 1 || isNaN(age)) {
        alert("Введено некоректний вік");

    } else if (age < 18) {
        const withAdult = confirm("Вам менше 18. Чи є з вами дорослий, який дозволяє перегляд?");

        if (withAdult) {
            alert("Доступ дозволено з дозволу дорослого.");

        } else {
            alert("Доступ заборонено.");
        }

    } else {
        alert("Доступ дозволено. Приємного перегляду!")
    }
}
