'use strict'

import Student from './Student.js';

const student1 = new Student('Ronnie', 'Coleman', 2020);
for (let i = 0; i < 25; i++) {
    Math.random() > 0.5 ? student1.present() : student1.absent();
}
for (let i = 0; i < 10; i++) {
    student1.mark(Math.floor(Math.random() * 100));
}
console.log(student1.summary());
console.log(student1.getAge());
console.log(student1.firstName);
console.log(student1.lastName);
console.log('-------------------')


const student2 = new Student('Michael', 'Jackson', 2026);
for (let i = 0; i < 22; i++) {
    Math.random() > 0.5 ? student2.present() : student2.absent();
}
for (let i = 0; i < 9; i++) {
    student2.mark(Math.floor(Math.random() * 120));
}
console.log(student2.summary());
console.log(student2.getAge());
console.log(student2.firstName);
console.log(student2.lastName);
console.log('-------------------')

const student3 = new Student('Billie', 'Jean', 2000);
for (let i = 0; i < 27; i++) {
    Math.random() > 0.1 ? student3.present() : student3.absent();
}
for (let i = 0; i < 12; i++) {
    student3.mark(Math.floor(Math.random() * 100));
}
console.log(student3.summary());
console.log(student3.getAge());
console.log(student3.firstName);
console.log(student3.lastName);
